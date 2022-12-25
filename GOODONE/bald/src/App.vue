<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <hr />
</template>

<style>
#app {
  font-family: 'Press Start 2P', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ff2c88;
  max-width:800px;
  min-width: 320px;
}

nav {
  padding: 5px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a:hover {
  font-weight: bold;
  color: aquamarine;
}

nav a.router-link-exact-active {
  color:#ff2c88 ;
}
*{
    margin:auto;
    
}
body{
    background-color: black;
}

h4,h5,h6,p{
  font-family: 'Press Start 2P', cursive;
    font-size: x-small;
}
.redMenu{
    font-family: 'Press Start 2P', cursive;
    margin: auto;
}

.gameBox{
    width: 800px;
    

    
}


.bluey{
    font-family: 'Press Start 2P', cursive;
    text-align: center;
    color: aquamarine;
    border: solid 1px rgb(122, 151, 156);   
   
    max-width: 1000px;
  
 
 
}


.GUI{
    background-color: rgb(73, 86, 100);
    height:25px;
    width: 1000px;
    padding-left:10px;
    padding-top:8px;
    text-align: start;
  
}
.GUI-dark{
    background-color: rgb(27, 33, 40);
    color: rgb(170, 201, 207);
    height:25px;
    width: 1000;
    padding-left:10px;
    padding-top:8px;
    text-align: start;
  
}

.GUI-healthBar{
    background-color: rgb(181, 0, 0);
    height:5px;
    width: 250px;


  
}
</style>
