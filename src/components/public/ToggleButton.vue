<template>
	<div class="Toggle" :class="$mq">
    <div  :class="$mq" class="swicth-btn" :style="{left:left_pos_func}"></div>
		<input :class="$mq" type="checkbox" class="checkbox" @change="onHandleChange" :style="{backgroundColor:switch_color}">
    <label v-if="checked" class="btnActived" :class="$mq">Actived</label>
    <label v-if="!checked" class="btnBlocked" :class="$mq">Blocked</label>
  
  <customDialog ref="dialog"></customDialog>
	</div>
</template>

<script>
import customDialog from './CustomDialog.vue'
export default {
  name: 'ToggleButton',
  props: {
    value: {
      type: String,
      default: 'Active'
    },

  },
  data(){

    const checked = (this.value==="Active")?true:false;



    const left_pos = checked?'2.8em':'0em';

    const switch_color = (checked)?'#44bd32':'#D50000';

    const status = this.value;
  	return{
      checked,
      left_pos,
      switch_color,
      status
  	};
  },
  created(){
    console.log(1234)
    console.log(this.value )
  },
  computed:{
    left_pos_func()
    {
      return this.left_pos;
    },

    returnStatus()
    {
      return this.status;
    }
  },
  watch:{

  },
  components:{
  customDialog
  },
  methods:{
  	onHandleChange()
    {
      console.log("status of user :");
      console.log(this.checked);
       this.$refs.dialog.open("Xác nhận","Bạn muốn thay đổi trạng thái của tài khoản này?")
       .then((dialog) =>{

            this.$store.dispatch('user_detail/changeUserStatus',{id:this.$route.params.userid,status:this.checked})
            .then(resp => 
            { 
              console.log(resp);
              this.checked = !this.checked;
              if(this.checked)
              {
                this.left_pos = '2.8em';
                this.switch_color = '#44bd32';
              }
              else
              {
                this.left_pos = '0';
                this.switch_color = '#D50000';
              }
            })
            .catch(err => console.log(err));
        }).catch(() => console.log("cancel dialog"))
    }
  },
  
 };
</script>

<style>
/*Toggle----------------------------------------*/
/*responsive----------------------*/
.Toggle
{
  position: relative;
  display: inline;
}
.Toggle.desktop
{
  font-size: 16px;
}
.Toggle.tablet
{
  font-size: 13px;
}
.Toggle.mobile
{
  font-size: 8px;
}
/*------------------------------------------------*/
/*checkbox----------------------------------------*/
.checkbox
{
  position: relative;
  outline: none;
  border-radius: 2em;
  -webkit-appearance:none;
  transition: 0.4s;
  cursor: pointer;
}
.checkbox.desktop
{
  width: 5em;
  height: 1.8em;
}
.checkbox.tablet
{
  width: 3.8em;
  height: 1.2em;
}
.checkbox.mobile
{
  width: 2.2em;
  height: .8em;
}
/*------------------------------------------------*/

.swicth-btn
{
  position: absolute;
  z-index: 2;
  left: 0;
  content: '';
  background-color: #FFEBEE;
  border-radius: 14px;
  transition: 0.4s;
}
.swicth-btn.desktop
{
  width: 1.8em;
  height: 1.8em;
}
.swicth-btn.tablet
{
  width: 1.4em;
  height: 1.4em;
  margin-top: 2px;
}
.swicth-btn.mobile
{
  width: 1.2em;
  height: 1.2em;
  align-items: center;
  margin-top: 3px;
}
.btnActived
{
  position: absolute;
  color: #E1F5FE;
  pointer-events: none;
  font-weight: 400;
  font-size: 0.7em;
}
.btnActived.desktop
{
  bottom: 1em;
  left: .6em;
}
.btnActived.tablet
{
  bottom: 1em;
  left: .6em;
}
.btnActived.mobile
{
  bottom: 1em;
  left: .7em;
}

.btnBlocked
{
  position: absolute;
  color: #E1F5FE;
  pointer-events: none;
  font-weight: 400;
  font-size: 0.7em;
}
.btnBlocked.desktop
{
  bottom: 1em;
  left: 2.6em;
}
.btnBlocked.tablet
{
   bottom: 1em;
  left: 2.3em;
}
.btnBlocked.mobile
{
  bottom: 1.2em;
  left: 1.8em;
}




</style>