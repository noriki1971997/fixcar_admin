import axios from 'axios'

export default {
  namespaced: true,
 	state: {
  		menuStatus: '',
  		menuWidth: 0,
  		currentPage:'Home'
	},
	mutations: {
	  	openMenu(state){
		    state.menuStatus = 'open',
		    state.menuWidth = 18
	  	},
	  	closeMenu(state){
	  		state.menuStatus = 'close',
		    state.menuWidth = 0
	  	},
	  	goto(state,page)
	  	{
	  		state.currentPage = page
	  	}
	},
	actions: {
	  	openMenu({commit}){ 
	        commit('openMenu')
	    },
	  	closeMenu({commit}){ 
	        commit('closeMenu')
	    },
	    goto({commit},page){
	    	commit('goto',page)
	    }
	},
	getters : {
	  menuWidth: state => state.menuWidth,
	  menuStatus: state => state.menuStatus,
	  currentPage: state => state.currentPage
	}
}