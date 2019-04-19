import axios from 'axios'

export default {
  namespaced: true,
 	state: {
 		table:{
 			data:[],
 			pagination:
        	{
	          currentPage : 1,
	          totalPages : 1
        	}
 		},
 		filter:''
  		
	},
	mutations: {
	  	storeUserList(state,data)
	  	{
	  		state.table = data.table
	  		state.filter = data.filter
	  	}
	},
	actions: {	  	
	    getUserList({commit},dataInput)
	    {
	    	 let data = [
			          {ID:"123",Ho:"Nguyen",Ten:"Viet Phi 1",TrangThai:"Active"},
			          {ID:"124",Ho:"Hoang",Ten:"Viet Phi 2",TrangThai:"Active"},
			          {ID:"125",Ho:"Le",Ten:"Viet Phi 3",TrangThai:"Active"},
			          {ID:"126",Ho:"Le",Ten:"Viet Phi 3",TrangThai:"Active"},
			          {ID:"127",Ho:"Le",Ten:"Viet Phi 3",TrangThai:"Active"},
			          {ID:"128",Ho:"Le",Ten:"Viet Phi 3",TrangThai:"Active"},
			          {ID:"129",Ho:"Le",Ten:"Viet Phi 3",TrangThai:"Active"},
			          {ID:"120",Ho:"Le",Ten:"Viet Phi 3",TrangThai:"Active"},
			          {ID:"1223",Ho:"Le",Ten:"Viet Phi 3",TrangThai:"Active"},
			          {ID:"124",Ho:"Le",Ten:"Viet Phi 3",TrangThai:"Active"},
			          {ID:"12567",Ho:"Le",Ten:"Viet Phi 3",TrangThai:"Active"},
			          {ID:"123",Ho:"Le",Ten:"Viet Phi 3",TrangThai:"Active"},
			          {ID:"123",Ho:"Le",Ten:"Viet Phi 3",TrangThai:"Active"},
			          {ID:"123",Ho:"Le",Ten:"Viet Phi 3",TrangThai:"Active"},
			          {ID:"123",Ho:"Le",Ten:"Viet Phi 3",TrangThai:"Active"},
			          {ID:"123",Ho:"Le",Ten:"Viet Phi 3",TrangThai:"Active"},
			          {ID:"123",Ho:"Le",Ten:"Viet Phi 3",TrangThai:"Active"},
			          {ID:"123",Ho:"Le",Ten:"Viet Phi 3",TrangThai:"Active"},
			          {ID:"123",Ho:"Le",Ten:"Viet Phi 3",TrangThai:"Active"},
			          {ID:"123",Ho:"Ta",Ten:"Viet Phi 4",TrangThai:"Active"}];
			    let pagination = {
			    	  currentPage : dataInput.curPage,
			          totalPages : 5 };
			          console.log(dataInput.curPage);
	            let usersData = {
			        //24 bang ghi
			        data:data,
			        pagination: pagination
			    };
	    	return new Promise((resolve, reject) => {
	            /*axios.post("",filter,curPage)
	            .then(resp => {
	                const table = resp.data.table
	                commit('getUserList',filter,table)               
	                console.log("get table data success")
	                resolve(resp.data.table)
	            })
	            .catch(err => {
	                reject(err)
	                console.log("get table data fail")
	            })*/

	        resolve(usersData)


	        })	    	
	    },

	    deleteUser({commit},ID)
	    {
	    	return new Promise((resolve, reject) => {
	            axios.post("",ID)
	            .then(resp => {
	                
	                resolve()
	            })
	            .catch(err => {
	                reject(err)
	            })
	        
	        })	    	
	    },
	},
	getters : {
	  
	}
}