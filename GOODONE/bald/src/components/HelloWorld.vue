<template>
  <div class="hello mt-4">
    <h1>{{ msg }}</h1>
  <img src="../assets/img/calvo1.gif" class="w-50" />

<div class="container m-2">
  <p>Lorem ipsum, <a href="#">dolor sit amet consectetur</a> adipisicing elit. Suscipit animi autem consequatur non quam fugiat incidunt <a href="#">officia labore </a>architecto sequi illo dolor doloribus, fuga minus, perspiciatis, exercitationem perferendis</p><a href="#">inventore molestias!</a> </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
h4,h5,h6,p{
  font-family: 'Press Start 2P', cursive;
    font-size: x-small;}
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
</style>
