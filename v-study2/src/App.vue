<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
    	<button @click="increment">+</button>
    	<button @click="decrement">-</button>
    </div>
    <!--{{count}}-->
    <div>
    	{{ct}}
    	 <p>{{isEvenOrOdd}}</p>
    </div>
   
  </div>
</template>

<script>
	import {mapGetters,mapActions,mapState} from "vuex"
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
//第一种方法
//computed:{
//	ct(){
//		return this.$store.state.count
//	}
//}
//或者可以通过mapState获取count
//computed:mapState(['count']),
//第二种方法
	computed:mapGetters(["ct","isEvenOrOdd"]),

	methods:mapActions(["increment","decrement"])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

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
