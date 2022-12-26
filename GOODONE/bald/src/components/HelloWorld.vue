<template>
  <LoggerComp />
  <div class="hello mt-4">
    <h1>{{ msg }} </h1>
  <img src="../assets/img/calb1.gif" class="w-50" />

<div class="container m-2">

  <p>Earth, the gentle planet <a href="#">as we know it among us, the B.A.L.D. galactic members</a> has always been our brother world. When you needed help, we were there. When you neded guidance, we were there. When you demanded FREEDOM from your corrupt leaders, we heard the call too. <br /> <br /> And with us came PEACE ON EARTH!... And the end of suffering and pain!...And the most important: the recovery of the ECOHABITAT that YOU destroyed during centuries in the past.</p>
  
<br /> 
  
<br />
  
  <div class="container border border-success bg-dark rounded-2 p-2 m-4 w-75"> <h1 style="color:aquamarine">
  <div class="container bg-success rounded-4 p-2">THANKS TO </div>
    <div > <img src="@/assets/img/baldlogo.gif" class="d-flex w-50"/></div> </h1>Pollution levels will be lowered to 1,23339 htc this month.* 
    <br /> <br />
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, eos repudiandae iusto nihil nobis aspernatur dolorum nam repellendus odio obcaecati neque sunt, commodi assumenda dolor! Assumenda at ad nostrum quam.</p></div>

  <br />Congratulations to everybody.
  <br />
 
 
  <a href="#">Evererything is gonna be JUST FINE!</a> </div>
  <button class="btn btn-danger" @click="player1()">PLAY</button>
  <div class="container">
  <div class="row">
  <div class="col"><div class="container bg-dark m-4 p-4 w-50"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quidem quae a deleniti. A ut fugit autem perferendis libero sint mollitia omnis id! Explicabo ab aperiam aliquid molestias, praesentium provident?</p></div></div>
  <div class="col">  <div class="container border border-success m-4 p-4 w-50"> <a href="#">OFFICIAL MESSAGE for TODAY </a>The numbers of biodiversity are increasing.</div></div>
  </div>
  </div>
    

  </div>
</template>

<script>
//import { useSound } from '@vueuse/sound'
import LoggerComp from '@/components/LoggerComp.vue'
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
  components:{
      LoggerComp
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
    font-size: xx-small;}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
