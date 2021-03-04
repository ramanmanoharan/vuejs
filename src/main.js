import Vue from 'vue'
import App from './App.vue'


import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

const routes =[
	{ path:'/', component:HelloWorld },
	{ path:'/home', component: Home },
	{ path:'/about', component: About },

]

const router = new VueRouter({
	routes
})
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
