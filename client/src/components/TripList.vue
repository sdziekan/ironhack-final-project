<template>
    <div>
        </br>
        <v-layout>
            <v-flex xs8 sm6 offset-sm3>
                <v-card>
                    <v-card-media class="elevation-5" height="400px"><img class="header-img" src="../assets/hiker-on-globe.png">
                    </v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{ trip.name }}</h3>
                            <div>
                                <p class="headline-p">See below for all of the fun things you are planning to do on vacation!!!</p>
                            </div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn round primary class="btn-add elevaton-5" @click="toAddItem()">ADD ITEM</v-btn>

                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        </br>
        </br>
        <div>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-card id="trips-header" dark class="accent elevation-7">
                        <v-card-text>
                            <h2>TRIP VIEWS
                                <v-btn round primary dark class="btn-view btn-list">List View</v-btn>
                                <v-btn round primary disabled class="btn-view responsive-btn">Map View</v-btn>
                                <v-btn round primary disabled class="btn-view responsive-btn">Calendar View</v-btn>
                            </h2>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </div>

        </br>
        <h3 class="list-start">Activities</h3>
        <v-data-table v-bind:headers="headers" :items="filter(items, 'Activities')" hide-actions class="elevation-1">
            <template slot="items" scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.type }}</td>
                <!-- <td class="text-xs-right">{{ props.item.startTime }}</td>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    <td class="text-xs-right">{{ props.item.endTime }}</td> -->
                <td class="text-xs-right">{{ props.item.location }}</td>
                <td class="text-xs-right">{{ props.item.cost }}</td>
                <td class="text-xs-right">{{ props.item.url }}</td>
                <td class="text-xs-right">{{ props.item.status }}</td>
                <td class="text-xs-center">
                    <v-flex>
                        <v-btn v-on:click="props.item.upVotes += 1" icon class="green--text">
                            <v-icon>thumb_up</v-icon>
                        </v-btn>
                        {{ props.item.upVotes }}
                    </v-flex>
                </td>
                <td class="text-xs-center">
                    <v-flex>
                        <v-btn v-on:click="props.item.downVotes -= 1" icon class="red--text">
                            <v-icon>thumb_down</v-icon>
                        </v-btn>{{ props.item.downVotes }}</v-flex>
                </td>
                <td class="text-xs-right">
                    <v-flex xs12 sm3>
                        <v-btn @click="editItem(props.item)" icon class="blue--text">
                            <v-icon>edit</v-icon>
                        </v-btn>
                    </v-flex>
                </td>
                <td class="text-xs-right">
                    <v-flex xs12 sm3>
                        <v-btn @click="deleteItemWithItem(props.item)" icon class="red--text">
                            <v-icon>delete</v-icon>
                        </v-btn>
                    </v-flex>
                </td>
            </template>
        </v-data-table>
        </br>
        </br>
        <h3>Lodging</h3>
        <v-data-table v-bind:headers="headers" :items="filter(items, 'Lodging')" hide-actions class="elevation-1">
            <template slot="items" scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.type }}</td>
                <td class="text-xs-right">{{ props.item.location }}</td>
                <td class="text-xs-right">{{ props.item.cost }}</td>
                <td class="text-xs-right">{{ props.item.url }}</td>
                <td class="text-xs-right">{{ props.item.status }}</td>
                <td class="text-xs-center">
                    <v-flex>
                        <v-btn v-on:click="props.item.upVotes += 1" icon class="green--text">
                            <v-icon>thumb_up</v-icon>
                        </v-btn>
                        {{ props.item.upVotes }}
                    </v-flex>
                </td>
                <td class="text-xs-center">
                    <v-flex>
                        <v-btn v-on:click="props.item.downVotes -= 1" icon class="red--text">
                            <v-icon>thumb_down</v-icon>
                        </v-btn>{{ props.item.downVotes }}</v-flex>
                </td>
                <td class="text-xs-right">
                    <v-flex xs12 sm3>
                        <v-btn @click="editItem(props.item)" icon class="blue--text">
                            <v-icon>edit</v-icon>
                        </v-btn>
                    </v-flex>
                </td>
                <td class="text-xs-right">
                    <v-flex xs12 sm3>
                        <v-btn @click="deleteItemWithItem(props.item)" icon class="red--text">
                            <v-icon>delete</v-icon>
                        </v-btn>
                    </v-flex>
                </td>
            </template>
        </v-data-table>
        </br>
        </br>
        <h3>Transportation</h3>
        <v-data-table v-bind:headers="headers" :items="filter(items, 'Transportation')" hide-actions class="elevation-1">
            <template slot="items" scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.type }}</td>
                <td class="text-xs-right">{{ props.item.location }}</td>
                <td class="text-xs-right">{{ props.item.cost }}</td>
                <td class="text-xs-right">{{ props.item.url }}</td>
                <td class="text-xs-right">{{ props.item.status }}</td>
                <td class="text-xs-center">
                    <v-flex>
                        <v-btn v-on:click="props.item.upVotes += 1" icon class="green--text">
                            <v-icon>thumb_up</v-icon>
                        </v-btn>
                        {{ props.item.upVotes }}
                    </v-flex>
                </td>
                <td class="text-xs-center">
                    <v-flex>
                        <v-btn v-on:click="props.item.downVotes -= 1" icon class="red--text">
                            <v-icon>thumb_down</v-icon>
                        </v-btn>{{ props.item.downVotes }}</v-flex>
                </td>
                <td class="text-xs-right">
                    <v-flex xs12 sm3>
                        <v-btn @click="editItem(props.item)" icon class="blue--text">
                            <v-icon>edit</v-icon>
                        </v-btn>
                    </v-flex>
                </td>
                <td class="text-xs-right">
                    <v-flex xs12 sm3>
                        <v-btn @click="deleteItemWithItem(props.item)" icon class="red--text">
                            <v-icon>delete</v-icon>
                        </v-btn>
                    </v-flex>
                </td>
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
                { text: 'Location', value: 'location' },
                { text: 'Cost', value: 'cost' },
                { text: 'Website', value: 'url' },
                { text: 'Status', value: 'status' },
                { text: 'Up Votes', value: 'upVotes' },
                { text: 'Down Votes', value: 'downVotes' },
                { text: 'Edit', value: 'coming soon' },
                { text: 'Delete', value: 'coming soon' }
            ],
            items: [],
            trip: []
        }
    },
    methods: {
        filter: function(items, groupName) {
            var res = [];
            for (var i = 0; i < items.length; i++) {
                if (items[i].group === groupName)
                    res.push(items[i]);
            }
            return res;
        },
        deleteItemWithItem(item) {
            let itemID = item._id;
            let i = this.items.indexOf(item)

            api.deleteItem(itemID).then(response => {
                response.data;
                this.items.splice(i, 1)
            })
        },
        toAddItem() {
            if (this.trip) {
                this.$router.push({ name: 'AddItem', params: { tripID: this.trip._id } })
            }
        },
        editItem(item) {
            let itemID = item._id;
            let i = this.items.indexOf(item)

            this.$router.push({ name: "EditItem", params: { tripID: this.trip._id, itemID: itemID } })

        },

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
    display: inline-block;
}

h3.headline {
    text-align: center;
}

.headline-p {
    text-align: center;
    margin-top: 15px;
}

.trip-items-title {
    display: inline-block;
    text-align: center;
}

.btn-add {
    margin: 0 auto 15px;
}

.btn-views {
    clear: both;
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



.list-start {
    clear: both;
}



.header-img {
    height: 400px;
    width: auto;
    display: block;
    margin: auto;
    margin-top: 15px;
}

@media (max-width: 1024px) {
    .responsive-btn {
        display: none;
    }
}
</style>
