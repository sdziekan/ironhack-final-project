<template>
    <div>
        </br>
        <v-layout>
            <v-flex xs8 offset-xs2 sm6 offset-sm3>
                <v-card>
                    <v-card-media class="elevation-5" height="400px"><img class="header-img" src="../assets/hiker-on-globe.png">
                    </v-card-media>
                    <v-card-title primary-title class=" elevation-5">
                        <div>
                            <h2 id="message">{{ message }}</h2>

                        </div>
                    </v-card-title>

                </v-card>
            </v-flex>
        </v-layout>
        </br>
        </br>

        <v-card class=" elevation-15 form-card">
            <v-card-text>
                <v-container fluid>
                    <v-layout row>
                        <v-flex xs8 offset-xs2>
                            <v-text-field v-model="name" name="input-1" label="Name" id="testing"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs8 offset-xs2>
                            <v-select :items="groupOptions" v-model="group" label="Select Group" single-line bottom></v-select>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs8 offset-xs2>
                            <v-select :items="typeOptions" v-model="type" label="Select Type" single-line bottom></v-select>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs8 offset-xs2>
                            <v-text-field v-model="location" name="input-1" label="Address" id="testing"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs8 offset-xs2>
                            <v-text-field v-model="url" name="input-1" label="Website" id="testing"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs8 offset-xs2>
                            <v-text-field v-model="cost" name="input-1" label="Cost" id="testing"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs8 offset-xs2>
                            <v-select :items="statusOptions" v-model="status" label="Select Status" single-line bottom></v-select>
                        </v-flex>
                    </v-layout>

                    <!-- <v-layout row>
                                                                                                                                                                                                                        <v-flex md6 lg4>
                                                                                                                                                                                                                                <v-date-picker v-model="startDate"></v-date-picker> 
                                                                                                                                                                                                                        </v-flex>
                                                                                                                                                                                                                        <v-flex md6 lg4>
                                                                                                                                                                                                                                <v-time-picker v-model="startTime"></v-time-picker> 
                                                                                                                                                                                                                        </v-flex>
                                                                                                                                                                                                                    </v-layout>
                                                                                                                                                                                                                    <v-layout row>
                                                                                                                                                                                                                        <v-flex md6 lg4>
                                                                                                                                                                                                                                <v-date-picker v-model="endDate"></v-date-picker> 
                                                                                                                                                                                                                        </v-flex>

                                                                                                                                                                                                                        <v-flex md6 lg4>
                                                                                                                                                                                                                                <v-time-picker v-model="endTime"></v-time-picker> 
                                                                                                                                                                                                                        </v-flex>
                                                                                                                                                                                                                    </v-layout> -->

                    <v-layout class="btn-layout" row align-end justify-end>

                        <v-btn light @click="returnToTrip()">Cancel</v-btn>

                        <v-btn primary @click="submitButton()">Submit</v-btn>

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
import api from "./api";
export default {
    data() {
        return {
            message: "Create a New Item Below",
            items: [],
            trip: null,
            name: "",
            group: {},
            groupOptions: [
                { text: 'Activities' },
                { text: 'Lodging' },
                { text: 'Transportation' }
            ],
            type: {},
            typeOptions: [
                { text: "Car - own" },
                { text: "Car - rental" },
                { text: "Car - share" },
                { text: "Plane" },
                { text: "Train" },
                { text: "Boat/Ferry" },
                { text: "Hiking/Walking" },
                { text: "other" },
                { text: "Food" },
                { text: "Drinks" },
                { text: "Hotel" }
            ],
            startDate: null,
            startTime: null,
            endDate: null,
            endTime: null,
            url: "",
            status: {},
            statusOptions: [
                { text: 'potential' },
                { text: 'booked' },
                { text: 'archived' }
            ],
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
        },

        returnToTrip() {
            if (this.trip) {
                this.$router.push({ name: 'TripList', params: { tripID: this.trip._id } })
            }
        },

        createNewItem() {
            const fields = {
                trip: this.trip._id,
                name: this.name,
                group: this.group.text,
                type: this.type.text,
                startDate: this.startDate,
                startTime: this.startTime,
                endDate: this.endDate,
                endTime: this.endTime,
                location: this.location,
                cost: this.cost,
                url: this.url,
                status: this.status.text
            }
            return api.createItem(fields);
        },

        submitButton() {
            this.createNewItem().then(() => {
                this.returnToTrip()
            }).catch(err => {
                alert("Error creating new item. Please try again")
            })
        }
    }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
    text-align: center;
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



.ai {
    padding-top: 50px;
}


input,
select {
    border: 1px solid black;
    border-radius: 5px;
}

.form-card {
    border-radius: 15px;
}


.header-img {
    height: 400px;
    width: auto;
    display: block;
    margin: auto;
    margin-top: 15px;
}

#message {
    font-family: 'Roboto Slab', serif;
}

@media (max-width: 1024px) {
    #message {
        font-size: 20pt;
    }
}

#btn-div {
    position: absolute;
    right: 10px;
}
</style>
