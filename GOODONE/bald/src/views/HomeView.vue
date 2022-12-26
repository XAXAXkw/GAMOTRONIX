<template>
  <div class="home">
  
  <GameData />
   
    <HelloWorld msg="Nameless Imbecile "/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import GameData from '../gaming/GameData.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld, GameData
  }
}
</script>
