import axios from 'axios'

export default {
  namespaced: true,
 	state: {
 		user_detail:{
 			id:0,
        	Ho:'',
        	Ten:'',
        	Email:'',
        	Birthday:'',
        	PhoneNumber:'',
        	isProvider:false,
 		}

	},
	mutations: {
	  	storeUserDetail(state,data)
	  	{
	  		state.user_detail = data; 
	  	}
	},
	actions: {	  	
	    getUserDetail({commit},user_id)
	    {
	    	/*let user_detail = {
	    	id:123456,
        	Ho:'Nguyen',
        	Ten:'Viet Phi',
        	Email:'user123@gmail.com',
        	Birthday:'12/12/2019',
        	PhoneNumber:'01212040198',
        	Address:'k2/duong Nguyen Sinh Sac,Quan Lien Chieu,thanh pho Da Nang',
        	isProvider: true,
        	status:'Active'
	    	};*/
	    	return new Promise((resolve, reject) => {
	            axios.get("http://13.67.50.208:3003/api/"+user_id+"/profile")
	            .then(resp => {
	                console.log(resp);
	            })
	            .catch(err => {
	                reject(err)
	                console.log("get table data fail")
	            })

	        //resolve(user_detail);
	        //commit('storeUserDetail', user_detail);

	        })	    	
	    },

	   changeUserStatus({commit},user_id)
	   {
	   		return new Promise((resolve, reject) => {
	            /*axios.post("",id)
	            .then(resp => {	                              
	                resolve(resp)
	            })
	            .catch(err => {
	                reject(err)
	                console.log("get table data fail")
	            })*/

	        resolve(true);
	        })	    	
	   }
	},
	getters : {
	  
	}
}