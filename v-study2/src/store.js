import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state={
	count:8
}

const getters={
	ct:function(state){
		return state.count
	},
	isEvenOrOdd:function(state){
		return state.count%2==0?"偶数":"奇数"
	}
}

const actions={
	increment:function(context){
		console.log(state)
		context.commit("increment")
	},
	decrement:function(context){
		if (state.count>8) {
			context.commit("decrement")
		}
		
	}
	
}

const mutations={
	increment:function(state){
		state.count++;
	},
	decrement:function(state){
		state.count--;
	}
}

const store=new Vuex.Store({
	state,
	getters,
	actions,
	mutations
})

export default store;

