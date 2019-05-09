import axios from 'axios'

export default {
  namespaced: true,
 	state: {
  		status: '',
  		token: localStorage.getItem('token') || ''

	},
	mutations: {
		auth_request(state){
	    	state.status = 'loading'
	  	},
	  	auth_success(state, token){
		    state.status = 'success'
		    state.token = token
	  	},
	  	auth_error(state){
	    	state.status = 'error'
	  	},
	  	logout(state){
	    	state.status = ''
	    	state.token = ''
	  	},
	},
	actions: {
	  	login({commit}, user){
	        return new Promise((resolve, reject) => {
	            commit('auth_request')
	            axios.post("http://13.67.50.208:3003/api/auth/login", user)
	            .then(resp => {

	            	let checkAdmin = resp.data.data.isAdmin;
	            	console.log(checkAdmin);


	            	if(checkAdmin)
	            	{
		            	const token = resp.data.data.token
		                localStorage.setItem('token', token)
		                // Add the following line:
		                axios.defaults.headers.common['Authorization'] = token
		                commit('auth_success', token)
		                console.log("login success")
		                resolve(true);
		                sessionStorage.setItem('currentPage','Home');
	            	}
	            	else
	            	{
	            		resolve(false);
	            	}

	                
	                resolve(resp)
	            })
	            .catch(err => {
	                commit('auth_error')
	                localStorage.removeItem('token')
	                reject(err)
	                console.log("Cannot login")
	            })
	        })
	    },
	  	logout({commit}){
		    return new Promise((resolve, reject) => {
		      	commit('logout')
		      	localStorage.removeItem('token')
		      	delete axios.defaults.headers.common['Authorization']
		      	console.log("logout");
		      	resolve()
		    })
	  	}
	},
	getters : {
	  isLoggedIn: state => !!state.token,
	  authStatus: state => state.status,
	}
}