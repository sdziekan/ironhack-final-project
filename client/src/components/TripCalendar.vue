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
                <button class="btn-add">ADD ITEM</button>
                <!-- <button class="btn-view btn-list" v-on:click="lseen = !lseen">List View</button> -->
                <button class="btn-view btn-list">List View</button>
                <button class="btn-view">Map View</button>
                <button class="btn-view">Calendar View</button>
            </div>
            <div>
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

        // not sure this is correct
        myApi.get("/trips/" + this.$route.params.tripID + "/items" + this.$route.params.itemID).then(response => {
            this.items = response.data;
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
