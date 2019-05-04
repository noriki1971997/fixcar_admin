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
	    	let user_detail = {
	    	id:123456,
        	Ho:'Nguyen',
        	Ten:'Viet Phi',
        	Email:'user123@gmail.com',
        	Birthday:'12/12/2019',
        	PhoneNumber:'01212040198',
        	Address:'k2/duong Nguyen Sinh Sac,Quan Lien Chieu,thanh pho Da Nang',
        	isProvider: false,
        	status:'Active'
	    	};
	    	return new Promise((resolve, reject) => {
	            /*axios.get("http://13.67.50.208:3003/api/user/"+user_id+"/profile")
	            .then(resp => {
	                console.log(resp);
	                axios.get("http://13.67.50.208:3003/api/address/detail/"+resp.data.data.address_id)
	                .then(resp => {
	                	    console.log(resp);
	                 })
	                .catch(err => {
	                		reject(err)
	            	})
	                let user_detail = {
	                	id:resp.data.data.account_id,
	                	Name:resp.data.data.full_name,
	                	Email:"email@email.com",
	                	Birthday:resp.data.data.birthday,
	                	PhoneNumber:resp.data.data.phone,
	                	Address:"",
	                	isProvider:false,
	                	status:'Block'
	                };
	                resolve(user_detail);
	            })
	            .catch(err => {
	                reject(err)
	                console.log("get table data fail")
	            })*/

	        resolve(user_detail);
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