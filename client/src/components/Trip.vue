<template>
    <div>

        <h1>{{ message }}</h1>

        <section>
            <div class="tripsList">
                <h2>{{ trip.name }}</h2>
                <h4>Description :</h4>
                <p class="descrip">{{ trip.email }}</p>
                <p>
                    {{ trip._id }}
                </p>
                <p>
                    {{ trip.currency }}
                </p>
                <p>
                    {{ trip.participants }}
                </p>
            </div>
            <div class="trips-header">
                <h2 class="trip-items-title">TRIP ITEMS</h2>
                <v-btn round primary class="btn-add">ADD ITEM</v-btn>
                <v-btn round primary dark class="btn-view btn-list" v-on:click="setView('list')">List View</v-btn>
                <v-btn round primary class="btn-view" v-on:click="setView('map')">Map View</v-btn>
                <v-btn round primary class="btn-view" v-on:click="setView('calendar')">Calendar View</v-btn>
            </div>
            <div id="list-view" v-if="seen === 'list'">
                <!-- <div id="list-view"> -->

                <div>
                    <h3>Activities</h3>
                    <ul class="itemList" v-for="(item, index) in items" v-show="item.group === 'Activities' ">
                        <h2>{{ item._id }}</h2>
                        <li>
                            <p>{{ item.name }}</p>
                        </li>
                        <li>
                            <p>{{ item.group }}</p>
                        </li>
                        <li>
                            <p>{{ item.type }}</p>
                        </li>
                        <li>
                            <p>{{ item.location }}</p>
                        </li>
                        <li>
                            <p>{{ item.cost }}</p>
                        </li>
                        </br>
                        Item Name: <input type="text" v-model="item.name"> Item Group:
                        <select v-model="item.group">
                            <option>Activity</option>
                            <option>Lodging</option>
                            <option>Transportation</option>
                        </select>
                        Type:
                        <li>
                            <p>{{ item.type }}</p>
                        </li>
                        Location: <input type="text" v-model="item.location"> Item Cost: <input type="text" v-model="item.cost">

                        <li>
                            <v-btn>EDIT</v-btn>
                            <!--Defintely an issue with the v-btn  -->
                            <v-btn v-on:click="deleteItemWithIndex(index)">DELETE</v-btn>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Lodging</h3>
                    <ul class="itemList" v-for="item in items" v-show="item.group === 'Lodging' ">
                        <!-- <h2>{{ item.trip }}</h2> -->
                        <li>
                            <p>{{ item.name }}</p>
                        </li>
                        <li>
                            <p>{{ item.group }}</p>
                        </li>
                        <li>
                            <p>{{ item.type }}</p>
                        </li>
                        <li>
                            <p>{{ item.location }}</p>
                        </li>
                        <li>
                            <p>{{ item.cost }}</p>
                        </li>
                        <li>
                            <v-btn>EDIT</v-btn>
                            <v-btn>DELETE</v-btn>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3>Transportation</h3>
                    <ul class="itemList" v-for="item in items" v-show="item.group === 'Transportation' ">
                        <!-- <h2>{{ item.trip }}</h2> -->
                        <li>
                            <p>{{ item.name }}</p>
                        </li>
                        <li>
                            <p>{{ item.group }}</p>
                        </li>
                        <li>
                            <p>{{ item.type }}</p>
                        </li>
                        <li>
                            <p>{{ item.location }}</p>
                        </li>
                        <li>
                            <p>{{ item.cost }}</p>
                        </li>
                        <li>
                            <v-btn>EDIT</v-btn>
                            <v-btn>DELETE</v-btn>
                        </li>
                    </ul>
                </div>

            </div>
            <div id="map-view" v-if="seen === 'map'">
                <h1>PLACEHOLDER FOR MAPS</h1>
                <!-- <div class="google-map" :id="mapName"></div> -->
            </div>

            <div id="calendar-view" v-if="seen === 'calendar'">
                <h1>PLACEHOLDER FOR CALENDARS</h1>
            </div>
        </section>

    </div>
</template>

<script>
import axios from "axios";
import api from "./api";
export default {
    data() {
        return {
            message: "TRIP INFORMATION",
            trip: "",
            items: "",
            seen: 'list',
            styles: { height: "150px" }
        };
    },

    created() {

        api.getTrip(this.$route.params.tripID).then(trip => {
            this.trip = trip;
        });

        api.getItems(this.$route.params.tripID).then(items => {
            this.items = items;
        });


    },
    methods: {
        setView(arg) {
            this.seen = arg;
        },

        //fix this 8/22/17
        deleteItemWithIndex(index) {
            api.deleteItem(this.items.splice(index, 1));
        }
        //???????
        // api.deleteItem(this.$route.params.itemID).then(item => {
        //     this.item = item;
        // }
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
