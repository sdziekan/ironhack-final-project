<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  
    <h2>CREATE A NEW TRIP</h2>
    <h3>It's simple! Just enter a New Trip Name and your Email Address to get started</h3>
    <ul class='new-trip'>
      <li>New Trip Name:
        <input type="text"> </li>
      <li>Your Email:
        <input type="text">
      </li>
      </br>
  
      <button class='btn-trip'>LET'S PLAN A TRIP</button>
    </ul>
    <div class='lower-bkgrd'>
      <h2>The Problems:</h2>
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
      <h2>Finally there's a Solution:</h2>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to K Trip Collaborative Trip Planner'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
  background-color: #aec6cf;
  width: 100%;
}

a {
  color: #42b983;
}
</style>
