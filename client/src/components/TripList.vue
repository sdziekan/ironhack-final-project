<template>
    <div>
        <h3>Activities</h3>
        <v-data-table v-bind:headers="headers" :items="filter(items, 'Activities')" hide-actions class="elevation-1">
            <template slot="items" scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.type }}</td>
                <td class="text-xs-right">{{ props.item.startTime }}</td>
                <td class="text-xs-right">{{ props.item.endTime }}</td>
                <td class="text-xs-right">{{ props.item.location }}</td>
                <td class="text-xs-right">{{ props.item.cost }}</td>
                <td class="text-xs-right">{{ props.item.url }}</td>
                <td class="text-xs-right">{{ props.item.status }}</td>
                <td class="text-xs-right">{{ props.item.upVotes }}</td>
                <td class="text-xs-right">{{ props.item.downVotes }}</td>
            </template>
        </v-data-table>
        <h3>Lodging</h3>
        <v-data-table v-bind:headers="headers" :items="filter(items, 'Lodging')" hide-actions class="elevation-1">
            <template slot="items" scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.type }}</td>
                <!-- <td class="text-xs-right">{{ props.item.startTime }}</td> -->
                <!-- <td class="text-xs-right">{{ props.item.endTime }}</td> -->
                <td class="text-xs-right">{{ props.item.location }}</td>
                <td class="text-xs-right">{{ props.item.cost }}</td>
                <td class="text-xs-right">{{ props.item.url }}</td>
                <td class="text-xs-right">{{ props.item.status }}</td>
                <td class="text-xs-right">{{ props.item.upVotes }}</td>
                <td class="text-xs-right">{{ props.item.downVotes }}</td>
            </template>
        </v-data-table>
        <h3>Transportation</h3>
        <v-data-table v-bind:headers="headers" :items="filter(items, 'Transportation')" hide-actions class="elevation-1">
            <template slot="items" scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.type }}</td>
                <!-- <td class="text-xs-right">{{ props.item.startTime }}</td> -->
                <!-- <td class="text-xs-right">{{ props.item.endTime }}</td> -->
                <td class="text-xs-right">{{ props.item.location }}</td>
                <td class="text-xs-right">{{ props.item.cost }}</td>
                <td class="text-xs-right">{{ props.item.url }}</td>
                <td class="text-xs-right">{{ props.item.status }}</td>
                <td class="text-xs-right">{{ props.item.upVotes }}</td>
                <td class="text-xs-right">{{ props.item.downVotes }}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>

import api from "./api";
export default {

    data() {
        return {
            headers: [
                { text: 'Name', align: 'left', value: 'name' },
                { text: 'Type', value: 'type' },
                // { text: 'Start Time', value: 'startTime' },
                // { text: 'End Time', value: 'endTime' },
                { text: 'Location', value: 'location' },
                { text: 'Cost', value: 'cost' },
                { text: 'Website', value: 'url' },
                { text: 'Status', value: 'status' },
                { text: 'Up Votes', value: 'upVotes' },
                { text: 'Down Votes', value: 'downVotes' }
            ],
            items: []
        }
    },
    methods: {
        filter: function(items, groupName) {
            var res = [];
            for (var i = 0; i < items.length; i++) {
                // if (items[i].trip === this.$route.params.tripID)
                if (items[i].group === groupName)
                    res.push(items[i]);
            }
            return res;
        }
    },
    computed: {
        activityItems: function() {
            return this.items;
        }
    },
    created() {


        api.getTrip(this.$route.params.tripID).then(trip => {
            this.trip = trip;
        });

        api.getItems(this.$route.params.tripID).then(items => {
            this.items = items;
        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.descrip {
    margin: 0 50px;
}

.trips-header {
    margin-top: 25px;
    margin-right: 50px;
}

.trip-items-title {
    display: inline-block;
    float: left;
    margin-left: 15%;
}

.btn-add {
    float: left;
    margin-top: 25px;
    margin-left: 10px;
}

.btn-view {
    margin: 25px 5px 0 0;
    float: right;
    padding: 0 15px;
}

.tripsList {
    border: 1.5px solid black;
    margin-top: 5px;
    border-radius: 15px;
}

.itemList {
    border: 1.5px solid black;
    background-color: lightblue;
    border-radius: 15px;
    margin: 0 75px;
}

#list-view {
    clear: both;
}

#map-view {
    clear: both;
}

#calendar-view {
    clear: both;
}

.google-map {
    width: 800px;
    height: 600px;
    margin: 0 auto;
    background: gray;
}
</style>
