<template>
	<div class="table-content" :class="$mq">
    <div class="title-UserList-wrap">
      <h1 :class="$mq" class="title-UserList">Danh sách người dùng</h1>
    </div>
    
    <div class="userlist-table" :class="$mq">
      <table-component :data="usersDataFunc" :show-caption="false" @filterContent="filterChanged" ref="table" :class="$mq">
         <table-column show="id" label="Id"></table-column>
         <table-column show="email" label="Email"></table-column>
         <table-column show="phone" label="Số điện thoại"></table-column>
         <table-column show="status" label="Trạng thái" :filterable="false"></table-column>
         <table-column label="" :sortable="false" :filterable="false">
           <template slot-scope="row">
              <i class="far fa-eye" @click="viewUserInfo(row.id,row.status)"></i>
           </template>
         </table-column>
      </table-component>
    </div>
    
    <customDialog ref="notification">
      <footer></footer>
    </customDialog>
	</div>
</template>
<script>
import customDialog from '../CustomDialog.vue'
export default {
  name: 'ShowUserList',
  data(){
  	return{
    usersData :{
    data : [],
    pagination : 
    {
        currentPage : 1,
        totalPages : 5
    }
    },
      filter:'',
  	};
  },
  watch:{
    'usersData.pagination.currentPage':function(newVal, oldVal)
    {
      let key_words = this.filter;
      let page = newVal;
      let per_page = 6;
      let data = {
              key_words:key_words,
              page:page,
              per_page:per_page
                }; 
      this.$store.dispatch('user/getUserList',data)
      .then(resp => 
      { 
        this.usersData = resp;
        console.log(resp);
        this.$refs.table.refresh();
      })
      .catch(err => console.log(err));
    }     
  },
  computed:{

  },
  components:{
  customDialog
  },
  methods:{
  	viewUserInfo:function function_name(ID,status) {
         this.$router.push({ name: 'DashBoard-UserList-ShowUserInfo', params: { userid: ID,status:status } });
    },

    usersDataFunc:function function_name()
    {
      return this.usersData;
    },

    filterChanged:function(value)
    {
      this.filter = value;
      console.log('tim kiem'+value);

      let key_words = this.filter;
      let page = 1;
      let per_page = 6;
      let data = {
              key_words:key_words,
              page:page,
              per_page:per_page
                }; 
      this.$store.dispatch('user/getUserList',data)
      .then(resp => 
      { 
        this.usersData = resp;
        console.log(resp);
        this.$refs.table.refresh();
      })
      .catch(err => console.log(err));

    },

    deleteUser(ID)
    {
      
    },
  },
  created:function()
  {

    let data = this.$store.getters['user/dataInput'];
    this.$store.dispatch('user/getUserList',data)
    .then(resp => 
      { 
        this.usersData = resp;
        console.log(resp);
        this.$refs.table.refresh();
      })
    .catch(err => console.log(err)); 
    
  },
  beforeDestroy()
  {
    console.log("Show user list");
  }
 };
</script>
<style>
 .table-content{
  font-size: 16px;
  height: auto;
  display: flex;  
 }
  .table-content.tablet
  {
    min-height: 60em;
  }
  .table-content.desktop
  {
    min-height: 100em;
  }
  .table-content.mobile
  {
    min-height: 30em;
  }
  .VuejsDialog
  {
    position: absolute;
    top: 10%;
    width: 100%;
    height: 50px;
  }
  
  /*title user list-----------------------------------------------*/
  .title-UserList
  {
    color: #f5f6fa;
    border: 0.5px solid #718093;
    background-color: rgba(0, 0, 0, 0.3);
    background: rgba(0, 0, 0, 0.3);
    position: relative;
    margin-left: auto;
    margin-right: auto;      
    text-align: center;
    border-radius: 2em;
    padding: 0.3em;
    width: 18em; 
  }


  .title-UserList-wrap{
    display: inline-block;
    width: 100%;
    color: #dfe6e9;
    text-align: center;
    font-variant: normal;
    font-family:FreeMono, monospace;
    font-weight: 500;
  }
  /*responesive*/
  .title-UserList.mobile
  {
    font-size: 1.2em;
  }
  .title-UserList.tablet
  {
    font-size: 1.2em;
  }




  .table-component div a
  {
    display: block;
    position: absolute;
    right: 1em;
    align-items: center;
    line-height: 2.5em;
    color: white;
    font-weight: 700;
  }
  .table-component input{  
    display: flex;
    float: right;
    justify-content: center;
    align-items: center;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.7);
    background: rgba(0, 0, 0, 0.7);
    color: rgba(0, 0, 0, 0.7);
    outline: none;
    border: none;
    text-decoration: white;
    transition: 0.4s;
    color: white;
    font-weight: 400;
    border-radius: 18px;   
    padding: .7em;
     width: 18em;
     font-size: 1em;
  }
  .table-component.mobile input
  {
     width: 10em;
     font-size: 0.6em;
  }
  .table-component.tablet input
  {
     width: 15em;
     font-size: 0.8em;
  }


  .table-component input:hover{
    background-color: black;
  }
  ::placeholder{
  color: white;
  }



  .userlist-table{
    position: absolute;  
    background-color: none;
  }
  .userlist-table.mobile
  {
    font-size: 0.2em;
    width: 80%;
    height: 90%;
    left: 7%;
    top: 14%;
  }
  .userlist-table.tablet
  {
    font-size: 0.7em;
    width: 80%;
    height: 90%;
    top: 13%;
    left: 10%;
  }
  .userlist-table.desktop
  {
    width: 80%;
    height: 90%;
    top: 18%;
    left: 10%;
  }

  .pagination
  {
    text-align: center;
    padding: .5em 0px;
    list-style-type: none;
    display: block;

  }
  .pagination li
  {
    display: inline-block;
    border-radius: 100%;
    width: 2em;
    height: 2em;
    line-height: 2em;
    margin: 1em;
    background-color: rgba(0, 0, 0, 0.7);
    background: rgba(0, 0, 0, 0.7);
    color: rgba(0, 0, 0, 0.7);
  }
  .pagination li a
  {
    font-weight: 700;
    color: #FAFAFA;
    width: 2em;
    height: 2em;
    line-height: 2em;
    display: inline-block;
    border-radius: 100%;
  }
  .pagination li a:hover,
  .pagination li.active
  {
    background-color: #4CAF50;   
  }
  .table-component {
  display: flex;
  flex-direction: column;
  margin: 1.5em 0;
  box-sizing: border-box;
  font-family: sans-serif;
  font-weight: 400;
  max-height: 100%;
  
  }
  .table-component__table-wrapper {
  overflow-x: auto;
  margin: 1em 0;
  width: 100%;
  border: solid 1px #ddd;
  border-bottom: none;
  border-radius: 6px;

  }
  .table-component__table {
  min-width: 100%;
  border-collapse: collapse;
  border-bottom: solid 1px #ddd;
  table-layout: fixed;
  }

  .table-component__table td {
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 2.3em;
  vertical-align: top;
  text-align: left;
  background-color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.7);
  color: rgba(0, 0, 0, 0.7);
  color: #E0E3DA;
  font-size: 1em;
  }

  .table-component__table th {
  background-color: black;
  color: white;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 1em;
  text-align: left;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 2.3em;
 }
 .detele-user-icon
 {
  color:#ff3838;
 }
</style>