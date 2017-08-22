<template>
    <div>
        <!-- <form>
                    <p>Name: <input type="text" placeholder="   name" v-model="name"></p>

                    <p>Group:
                        <select v-model="group">
                            <option>Activities</option>
                            <option>Lodging</option>
                            <option>Transportation</option>
                        </select>
                    </p>

                    <p>Type: <input type="text" placeholder="  type" v-model="type"></p>
                    <p>Start Time: <input type="text" placeholder="  start time" v-model="startTime"></p>
                    <p>End Time: <input type="text" placeholder="  end time" v-model="endTime"></p>

                    <p>Location: <input type="text" placeholder="  location" v-model="location"></p>
                    <p>Website: <input type="text" placeholder="  website" v-model="url"></p>
                    <p>Cost: <input type="text" placeholder="  cost" v-model="cost"></p>
                    <p>Status:
                        <select v-model="status">
                            <option>potential</option>
                            <option>booked</option>
                            <option>archived</option>
                        </select>
                    </p>

                </form> -->

        <v-card class="grey lighten-4 elevation-0">
            <v-card-text>
                <v-container fluid>
                    <v-layout row>
                        <v-flex xs4>
                            <v-subheader>Name: </v-subheader>
                        </v-flex>
                        <v-flex xs8>
                            <v-text-field name="input-1" label="Name" id="testing"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs4>
                            <v-subheader>Group: </v-subheader>
                        </v-flex>
                        <v-flex xs8>
                            <v-text-field name="input-1" label="Change to Select. Mandatory field!" id="testing"></v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs4>
                            <v-subheader>Type: </v-subheader>
                        </v-flex>
                        <v-flex xs8>
                            <v-text-field name="input-1" label="Also a Select, but dependent upon the Group" id="testing"></v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs4>
                            <v-subheader>Start Time: </v-subheader>
                        </v-flex>
                        <v-flex md12 lg4>
                            <v-date-picker v-model="picker"></v-date-picker>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs4>
                            <v-subheader>End Time: </v-subheader>
                        </v-flex>
                        <v-flex md12 lg4>
                            <v-date-picker v-model="picker"></v-date-picker>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs4>
                            <v-subheader>Location: </v-subheader>
                        </v-flex>
                        <v-flex xs8>
                            <v-text-field name="input-1" label="Address" id="testing"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs4>
                            <v-subheader>Website: </v-subheader>
                        </v-flex>
                        <v-flex xs8>
                            <v-text-field name="input-1" label="Website" id="testing"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs4>
                            <v-subheader>Cost: </v-subheader>
                        </v-flex>
                        <v-flex xs8>
                            <v-text-field name="input-1" label="Cost" id="testing"></v-text-field>
                        </v-flex>
                    </v-layout>

                    <v-layout row>
                        <v-flex xs4>
                            <v-subheader>Status: </v-subheader>
                        </v-flex>
                        <v-flex xs8>
                            <v-text-field name="input-1" label="Last Select" id="testing"></v-text-field>
                        </v-flex>
                    </v-layout>

                    </v-layout>

                </v-container>
            </v-card-text>
        </v-card>

        <v-footer light class="pa-3">
            <v-spacer></v-spacer>
            <div>© {{ new Date().getFullYear() }}</div>
        </v-footer>
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
            name: "",
            group: "",
            type: "",
            startTime: "",
            endTime: "",
            url: "",
            status: "",
            location: "",
            cost: null,
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
            let itemID = this.items[index]._id;

            this.items.splice(index, 1); // To update this.items in Vue application

            // To update the information on the backend
            api.deleteItem(itemID).then(response => {
                response.data;
            });
        }
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

.ai {
    padding-top: 50px;
}

v-parallax {
    width: 100%;
    height: auto;
}

input,
select {
    border: 1px solid black;
    border-radius: 5px;
}
</style>
