<template>
  <nav>
  <div class="container d-flex">   
  
   <router-link to="/">START</router-link> |
   <router-link to="/gamedata">DATA</router-link> |
   <router-link to="/story">STORY</router-link> |
   <router-link to="/">START</router-link> |
   <router-link to="/">START</router-link> |
  
    <router-link to="/about">About</router-link></div>

  </nav>
  <router-view/>
  <hr />
</template>

<style type="css">

#app {

  font-family: 'Press Start 2P', cursive;

  text-align: center;
  color: #ff2c88;

  min-width: 320px;
}
a {
  color: #31d5ca;
}

nav {
  font-size: xx-small;
  padding: 5px;
  background-color: hotpink;
  width:100%;
}

nav a {
  font-weight: bold;
  color: #000000;
  text-decoration: none;
}
nav a:hover {
  font-weight: bold;
  color:  #31d5ca;
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

h2,h3{
  font-family: 'Press Start 2P', cursive;
    font-size: 15px;
}

h4,h5,h6,p{

    font-size: 8px;
}
.A{
  background-color: #583560;
  color:#ff2c88 ;
}
.B{
  background-color: #31d586;
  color: #583560;
}
.C{
  background-color: rgb(255, 110, 177);
  color: #583560;
}
.D{
  background-color: #c3ff00;
  color:#000000 ;
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
