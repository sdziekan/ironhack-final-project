<template>
    <div>
    
        <h1>{{ message }}</h1>
    
        <section v-if="trips">
            <div class="">
                <ul class="tripsList" v-for="trip in trips">
                    <h2>{{ trip.name }}</h2>
                    <h4>Description :</h4>
                    <p class="descrip">{{ trip.email }}</p>
                    <p>
                        {{ trip.id }}
                    </p>
                    <p>
                        {{ trip.currency }}
                    </p>
                    <p>
                        {{ trip.participants }}
                    </p>
                </ul>
            </div>
        </section>
        <section v-else>
            Loading...
        </section>
    
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            message: "TRIPS",
            trips: null,
            styles: { height: "150px" }
        };
    },
    created() {
        const myTrips = axios.create({
            baseURL: "http://localhost:3000/api/trips"
        });

        function getTrips() {
            return myTrips.get("/").then(response => {
                return response.data;
            });
        }
        getTrips().then(trips => {
            this.trips = trips;
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

.tripsList {
    border: 1.5px solid black;
    margin-top: 5px;
    border-radius: 15px;
}
</style>
