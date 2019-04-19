<template>
	<div class="table-content">
    <div class="title-UserList">
      <h1>Danh sách người dùng</h1>
    </div>
    <div class="userlist-table">
      <table-component :data="usersDataFunc" :show-caption="false" @filterContent="filterChanged" ref="table">
         <table-column show="ID" label="ID"></table-column>
         <table-column show="Ho" label="Họ"></table-column>
         <table-column show="Ten" label="Tên"></table-column>
         <table-column show="TrangThai" label="Trạng thái" :filterable="false"></table-column>
         <table-column label="" :sortable="false" :filterable="false">
           <template slot-scope="row">
              <i class="far fa-eye" @click="viewUserInfo(row.Ho)"></i>
           </template>
         </table-column>
         <table-column label="" :sortable="false" :filterable="false">
           <template slot-scope="row">
              <i class="far fa-trash-alt" @click="deleteUser(row.Ten)"></i>
           </template>
         </table-column>
      </table-component>
    </div>
	</div>
</template>
<script>
export default {
  name: 'ShowUserList',
  data(){
  	return{
    usersData :{
    data : [{ID:"123",Ho:"Nguyen",Ten:"Viet Phi 1",TrangThai:"Active"}],
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
      let filter = this.filter;
      let curPage = newVal;
      let data = {
                  filter:filter,
                  curPage:curPage}; 
      this.$store.dispatch('user/getUserList',data)
      .then(resp => 
      { 
        this.usersData = resp;
        this.$refs.table.refresh();
      })
      .catch(err => console.log(err));
    }
  },
  computed:{

  },
  components:{
  
  },
  methods:{
  	viewUserInfo:function function_name(Ho) {
         this.Ho = Ho;
         this.$router.push({ name: 'DashBoard-UserList-ShowUserInfo', params: { name: this.Ho } });
    },

    usersDataFunc:function function_name()
    {
      return this.usersData;
    },

    filterChanged:function(value)
    {
      this.filter = value;
    },

    deleteUser(Ten)
    {
      this.$dialog.confirm("Nếu xóa bảng ghi này thì sẽ không hoàn tác được.Bạn muốn tiếp tục", {
          loader: true}).then(dialog => {
            
            setTimeout(() => {
                        console.log('Xóa hoàn thành');
                        dialog.close();
            }, 2500);
          })
                        .catch(() => {
            console.log('Hủy xóa');
      });
    },
  },
  created:function()
  {
    let filter = this.filter;
    let curPage = 1;
    let data = {
                  filter:filter,
                  curPage:curPage}; 
     this.$store.dispatch('user/getUserList',data)
      .then(resp => 
      { 
        this.usersData = resp;
        this.$refs.table.refresh();
      })
      .catch(err => console.log(err));     
  }
 };
</script>
<style>
 .table-content{
  height: auto;
  display: flex;
  min-height: 100em;
 }
  .VuejsDialog
  {
    position: absolute;
    top: 10%;
    width: 100%;
    height: 50px;
  }
  .title-UserList{
    display: inline-block;
    width: 100%;
    color: #dfe6e9;
    text-align: center;
    font-variant: normal;
    font-family:FreeMono, monospace;
    font-weight: 500;
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
    font-size: 1em;
    display: flex;
    width: 18em;
    float: right;
    justify-content: center;
    align-items: center;
    text-align: left;
    background-color: #e84393;
    outline: none;
    border: none;
    text-decoration: white;
    transition: 0.4s;
    color: white;
    font-weight: 400;
    border-radius: 18px;
    padding: .7em;
  }
  .table-component input:hover{
    background-color: #304FFE;
  }
  ::placeholder{
  color: white;
  }
  .userlist-table{
    position: absolute;
    top: 8%;
    left: 10%;
    background-color: none;
    width: 80%;
    height: 90%;
  }
  .pagination
  {
    text-align: center;
    padding: .5em 0px;
    background-color: none;
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
  vertical-align: top;
  text-align: center;
  background-color: #212121;
  color:#80DEEA;
  font-size: 1em;
  }

  .table-component__table th {
  background-color: #424242;
  color: #00C853;
  text-transform: uppercase;
  white-space: nowrap;
  font-size: 1em;
  text-align: center;
  padding-top: 1em;
  padding-bottom: 1em;
 }
</style>