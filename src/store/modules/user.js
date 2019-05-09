import axios from 'axios'

export default {
  namespaced: true,
 	state: {
		dataInput: {
            key_words:"",
            page:1,
            per_page:6
                },
	},
	mutations: {
	  	storeUserList(state,data)
	  	{
	  		state.dataInput = data;
	  	}
	},
	actions: {	  	
	    getUserList({commit},dataInput)
	    {
	    	return new Promise((resolve, reject) => {
	            axios.get("http://13.67.50.208:3003/api/user",{params: dataInput})
	            .then(resp => {

	                let currentPage = resp.data.data.current_page;
	                let totalPages = resp.data.data.last_page;
	                let data = resp.data.data.data;

	                let table = {
	                	data:data,
 						pagination:
        				{
					        currentPage : currentPage,
					        totalPages : totalPages
				        }
	                };	               
	                commit('storeUserList',dataInput);               
	                console.log("get table data success");
	                resolve(table);


	            })
	            .catch(err => {
	                reject(err)
	                console.log("get table data fail")
	            })
	        })	    	
	    },

	    deleteUser({commit},ID)
	    {
	    	return new Promise((resolve, reject) => {
	            /*axios.post("",ID)
	            .then(resp => {    
	                resolve()
	            })
	            .catch(err => {
	                reject(err)
	            })*/
	        resolve("Xóa hoàn thành");
	        })    	
	    },
	},
	getters : {
		dataInput: state => state.dataInput,
	}
}