<template>
  <div id="app">
    <div id="rote">
    <img style="width:80px;height:auto" alt="Vue logo" src="./assets/logo.png">
    <router-link class="nav-link" to="/">Main</router-link> | 
    <router-link class="nav-link" to="/home">Home</router-link> | 
    <router-link class="nav-link" to="/about">About</router-link>
    <HelloWorld msg="Welcome to Your Vue.js App" data="This is Data Bindinag in Vue"/>
    </div>
    
    <router-view></router-view>
    <Footer/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/Footer.vue'




export default {
  name: 'App',
  components: {
    HelloWorld,
    Footer,
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  /*overflow-x: hidden!important;*/
}
img{
  float:left!important;
  height: 50px;width:auto;
}
.nav-link{
  text-decoration: none!important;
  color:darkblue!important;
}
#rote{
  background-color: lightgreen;

}
*{
  padding: 0;
  margin:0;
}
</style>
