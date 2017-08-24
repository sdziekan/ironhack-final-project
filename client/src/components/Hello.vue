<template>
  <div class="hello">
    <h1 class="h1-title">{{ msg }}</h1>

    <h3 class="h3-title">It' s simple! Just enter a New Trip Name and your Email Address to get start ed
    </h3>

    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-media class="elevation-5" height="400px"><img class="header-img" src="../assets/hiker-on-globe.png">
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <h2>CREATE A NEW TRIP</h2>

            </div>
          </v-card-title>

        </v-card>
      </v-flex>
    </v-layout>

    <v-container xs8 offset-xs2 fluid="fluid" class="text-xs-center">
      <v-card height="300px" class="form-create elevation-10 white">
        <v-card-text>
          <v-layout row>
            <v-flex offset-xs1 xs3>
              <v-subheader>New Trip Name:</v-subheader>
            </v-flex>
            <v-flex xs7>
              <v-text-field v-model="name" name="input-1" label="new trip name" id="testing"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex offset-xs1 xs3>
              <v-subheader>Your Email</v-subheader>
            </v-flex>
            <v-flex xs7>
              <v-text-field v-model="email" name="input-1" label="email" id="testing"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs2 offset-xs5>

              <div>
                <v-btn light @click="submitButton">LET'S PLAN A TRIP</v-btn>
              </div>

            </v-flex>

          </v-layout>
        </v-card-text>
      </v-card>
    </v-container>

    <v-container class='lower-bkgrd'>
      <v-card fluid="fluid" class='lower-bkgrd xs10 offset-xs10 elevation-15 '>
        <v-card-text>
          <v-layout>
            <v-flex>
              <h3 class="list-header">The Problems:</h3>
              <ul class='problems'>
                <li>There is no one-stop application for trip planning with friends and family</li>
                <li>Common trip planning involves communications across emails, shared documents, text messages, custom maps</li>
                <li>Disorganization, lack of communication, hard to make decisions, hard to coordinate everything</li>
                <li>You can view your trip plans in a list, a map or a calendar. But not all three at once</li>
                <br>
                <li>
                  <strong>Planning can be so stressful. By the time your trips starts, you might not even want to see the people that you are traveling with!</strong>
                </li>
              </ul>
              </br>
              </br>
              <h3 class="list-header">Finally there's a Solution:</h3>
              <ul class='solutions'>
                <li>One application to coordinate
                  <strong>ALL TRIP PLANNING!</strong>
                </li>
                <li>Anyone can add options for
                  <strong>activities</strong>,
                  <strong>lodging</strong> or
                  <strong>transportation</strong>
                </li>
                <li>Everyone can upvote or downvote each option and write comments about what they think</li>
                <li>Built in list view, map view and calendar view allow you to see you options in the best way</li>
              </ul>
            </v-flex>

          </v-layout>
        </v-card-text>
      </v-card>
    </v-container>
    </v-container>
  </div>
</template>

<script>
import api from "./api";

export default {
  data() {
    return {
      msg: 'Welcome to K Trip Collaborative Trip Planner',
      name: null,
      newTrip: null,
      email: ""
    }
  },

  methods: {
    goToTrip() {
      if (this.newTrip) {

        this.$router.push({ name: 'TripList', params: { tripID: this.newTrip._id } })
      }
    },
    createNewTrip() {
      const fields = {
        newTrip: this.newTrip,
        name: this.name,
        email: this.email
      }
      return api.createTrip(fields);
    },
    submitButton() {
      this.createNewTrip().then((trip) => {
        this.newTrip = trip
        this.goToTrip()
      }).catch(err => {

        alert("Error creating new trip. Please try again")
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

.new-trip {
  border: 1px solid black;
  border-radius: 15px;
  margin: 5px 15%;
  padding: 20px 0;
}

.new-trip li {
  padding: 0 20px;
  display: inline-block;
}

.problems li {
  margin: 0 15%;
  text-align: left;
  list-style-image: url('../assets/earth-globe16.png');
}


.solutions li {
  margin: 0 15%;
  text-align: left;
  list-style-image: url('../assets/hiker16.png');
}


.btn-trip {
  margin-top: 20px;
}

.lower-bkgrd {
  border-radius: 15px;
}

a {
  color: #42b983;
}

.form-create {
  border-radius: 15px;
}

.h1-title {
  text-align: center;
  margin: 50px 0;
}

.h3-title {
  text-align: center;
  margin: 0 50px 25px;
}

.header-img {
  height: 400px;
  width: auto;
  display: block;
  margin: auto;
  margin-top: 15px;
}

.list-header {
  text-align: center;
}
</style>
