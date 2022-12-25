<template>
  <div class="hello mt-4">
    <h1>{{ msg }}</h1>
  <img src="../assets/img/calvo1.gif" class="w-50" />

<div class="container m-2">
  <p>Earth, the gentle planet <a href="#">as we know it among us, the B.A.L.D. galactic members</a> have always been our brother world. When you needed help, we were here. When you neded guidance, we were here. When you demanded FREEDOM from your corrupt leaders, we heard the call too. And with us came PEACE ON EARTH!... And the end of suffering and pain!...And the most important: the recovery of the ECOHABITAT that YOU destroyed incounsciously during centuries in the past. <a href="#">OFFICIAL MESSAGE for TODAY </a>The numbers of biodiversity are increasing.</p><br /> <br />
  <div class="container"> <h1 style="color:aquamarine">THANKS TO B.A.L.D. </h1>Pollution levels will be lowered to 1,23339 htc this month. </div>
 
  <br />Congratulations to everybody.
  <br />
  <a href="#">Evererything is gonna be JUST FINE!</a> </div>
  <button class="btn btn-danger" @click="player1()">PLAY</button>
  </div>
</template>

<script>
//import { useSound } from '@vueuse/sound'
export default {
  name: 'HelloWorld',
  data(){
    return{
      sound:new Audio('../assets/music/bald01_intro.wav')
    }
  },
  props: {
    msg: String
  }, 
  mounted(sound) {
    if(sound){
     let audio = new Audio('@/music/bald01_intro.wav'); // path to file
   audio.play();}
  },
  
  

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
