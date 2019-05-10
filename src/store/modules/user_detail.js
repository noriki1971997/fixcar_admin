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
	    	return new Promise((resolve, reject) => {
	            axios.get("http://13.67.50.208:3003/api/user/"+user_id)
	            .then(resp => {
	         

	            	let user_detail = {
	                	avatar:"",
	                	id:resp.data.data.id,
	                	Name:"",
	                	Email:resp.data.data.email,
	                	Birthday:"",
	                	PhoneNumber:resp.data.data.phone,
	                	Address_str:"",
	                	Address_detail:"",
	                	isProvider:(resp.data.data.role==3)?true:false,
	                	status:'Active'
	                };

	                //get profile
	                let getProfile = new Promise((resolve, reject)=>{
	                	axios.get("http://13.67.50.208:3003/api/user/"+user_id+"/profile")
	               					.then(resp => {
	               					 	resolve(resp.data.data);
				                	})	 
				                	.catch(err => {
						                console.log(err)
						            })
	                });

	               	getProfile.then(resp=>{
	               		user_detail.Name = resp.full_name;
	               		user_detail.Birthday = resp.birthday;
	               		user_detail.avatar = (resp.avatar == null)?
	               		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKmAU1sHMatl9womt5WsbdYdbFohpxk-jQHWJBRuCZU2bC36N0"
	               		:"http://13.67.50.208:3003/"+resp.avatar;
	               		user_detail.Address_detail = (resp.address.address_more!==null)?resp.address.address_more+", ":"";
	               		user_detail.Address_str = resp.address.province+resp.address.district+resp.address.ward;
	               		console.log(user_detail.Address_str)

	               	}).catch(err => 
	               		console.log(err)
	               	);
	                resolve(user_detail);
	                console.log(user_detail);
	            })
	            .catch(err => {
	                console.log(err)
	            })	            

	        })	    	
	    },

	    getAddressFunction({commit},address_str_input)
	    {
	    	console.log("string address");
	    	console.log(address_str_input);


   			const instance = axios.create({
			  baseURL: 'http://13.67.50.208:3003/api/',
			  timeout: 1000,
			  headers: {'Authorization': 'Bearer '+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJwaGkubmd1eWVudmlldDE5N0BnbWFpbC5jb20iLCJhY2NvdW50X3R5cGUiOiJBRE1JTiIsInJvbGUiOjQsImlhdCI6MTU1NzMyNzk3OX0.eJuY7cBjYAX-TT4O_o9JXD1O3feCnYO0OkUSHMmP2_c'}
			});

	    	return new Promise((resolve, reject) => {
	    	instance.get("address/detail/"+address_str_input)
	                  .then(resp => {
		                  let getCity = (resp.data.address === null)?{name:""}:{name:resp.data.data.address.name+""};
		                  let getDistrict = (resp.data.data.address.devvn_quanhuyens.length == 0)?{name:""}:{name:resp.data.data.address.devvn_quanhuyens[0].name+", "};
		                  let getCommune = (resp.data.data.address.devvn_quanhuyens[0].devvn_xaphuongthitrans.length == 0)?{name:""}:
		                  {name:resp.data.data.address.devvn_quanhuyens[0].devvn_xaphuongthitrans[0].name+", "};



		                  let tp = "" || getCity.name ;
		                  let quan = "" || getDistrict.name;
		                  let xa = "" || getCommune.name;
		                  let detail = xa+quan+tp;
		                  resolve(detail);
	                  })
					  .catch(err => {
						  console.log(err)
						  reject(err);
					  })
			})
	    },

	   changeUserStatus({commit},data)
	   {
	   	const instance = axios.create({
			baseURL: 'http://13.67.50.208:3003/api/',
			timeout: 1000,
			headers: {'Authorization': 'Bearer '+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJwaGkubmd1eWVudmlldDE5N0BnbWFpbC5jb20iLCJhY2NvdW50X3R5cGUiOiJBRE1JTiIsInJvbGUiOjQsImlhdCI6MTU1NzMyNzk3OX0.eJuY7cBjYAX-TT4O_o9JXD1O3feCnYO0OkUSHMmP2_c'}
			});
	   	if(data.status)
	   	{
	   		return new Promise((resolve, reject) => {                        
	            instance.post("user/"+data.id+"/block")
	            .then(resp => {

	                resolve('Block');
	            })
	            .catch(err => {
		            reject(err)
		            console.log("change fail")
	             })
           
	        })	   
	   	}
	   	else
	   	{
	   		return new Promise((resolve, reject) => {                        
	            instance.post("user/"+data.id+"/unblock")
	            .then(resp => {
	                resolve(resp);
	                console.log('Active');
	            })
	            .catch(err => {
		            reject(err)
		            console.log("change fail")
	             })
           
	        })	   
	   	}
	   		 	
	   },

	   getProviderDetail({commit},provider_id)
	   {

	   	return new Promise((resolve, reject) => {
	            axios.get("http://13.67.50.208:3003/api/user/"+provider_id+"/provider")
	            .then(resp => {

	                 let address_str = resp.data.data.addr_province+resp.data.data.addr_district+resp.data.data.addr_ward;
	                 let address_more = (resp.data.data.addr_more!==null)?resp.data.data.addr_more+", ":"";
	                 let servicesImgList = resp.data.data.images;
	                 let servicesImg = [];
	                 servicesImgList.forEach(function(element) {
  						servicesImg.push("http://13.67.50.208:3003/"+element.path);
					 });


	                 console.log("Hinh anh");
	                 console.log(servicesImg);
	                 let provider_data = {
	                 	Name:resp.data.data.name,
	                 	CloseTime:resp.data.data.close_time,
	                 	OpenTime:resp.data.data.open_time,
	                 	id_personal:resp.data.data.identity_card,
	                 	PhoneNumber:resp.data.data.phone,
	                 	Address:address_more,
	                 	Address_str:address_str,
	                 	ServicesImg:servicesImg
	                 }
	                resolve(provider_data);
	            })
	            .catch(err => {
	                console.log(err)
	            })
	        })
	    },

	    getProviderServices({commit},provider_id)
	    {
	    	return new Promise((resolve, reject) => {
	    		axios.get("http://13.67.50.208:3003/api/user/"+provider_id+"/service")
	                  .then(resp => {
	                  	  console.log("Service");
		                  console.log(resp);
		                  let services = [];
		                  let service_array = resp.data.data;
		                  service_array.forEach(function(element){
		                  	let service = {
		                  		name:element.service_type.name,
		                  		minvalue:element.price_min,
		                  		maxvalue:element.price_max,
		                  		desc:(element.description==null)?"Trống":element.description,
		                  		note:(element.notes==null)?"Trống":element.notes,
		                  	};
		                  	services.push(service);
		                  })

		                  resolve(services);
	                  })
					  .catch(err => {
						  console.log(err)
					  });
			})
	    }
	},
	getters : {
	  
	}
}