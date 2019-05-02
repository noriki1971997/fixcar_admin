<template>
	<div class="Toggle" :value="value" :class="$mq">
    <div  :class="$mq" class="swicth-btn" :style="{left:left_pos_func}"></div>
		<input :class="$mq" type="checkbox" class="checkbox" @change="onHandleChange" :style="{backgroundColor:switch_color}">
    <label v-if="checked" class="btnActived" :class="$mq">Actived</label>
    <label v-if="!checked" class="btnBlocked" :class="$mq">Blocked</label>
	</div>
</template>
<script>
export default {
  name: 'ToggleButton',
  props: {
    value: {
      type: String,
      default: 'Active'
    },

  },
  data(){
    console.log(this.value);
    const checked = this.value=='Active'?true:false;
    const left_pos= this.checked?'2.8em':'0em';
    const switch_color = this.checked?'#44bd32':'#D50000';
  	return{
      checked,
      left_pos,
      switch_color
  	};
  },
  computed:{
    left_pos_func()
    {
      return this.left_pos;
    },
  },
  watch:{
    'value':function(newVal, oldVal)
    {
      if(newVal == 'Active')
      {
        this.checked = true;
      }
      else
      {
        this.checked = false;
      }
    },



    'checked':function(newVal, oldVal)
    {
      if(newVal)
      {
        this.left_pos = '2.8em';
        this.switch_color = '#44bd32';
      }
      else
      {
        this.left_pos = '0';
        this.switch_color = '#D50000';
      }
    }
  },
  components:{
  
  },
  methods:{
  	onHandleChange()
    {
      this.$dialog.confirm("Bạn chắc chắn muốn thay đổi", {
          loader: true}).then(dialog => {
            this.$store.dispatch('user_detail/changeUserStatus',this.$route.params.userid)
            .then(resp => 
              { 
                console.log('thay doi ht');
                this.checked = !this.checked;
              })
            .catch(err => console.log(err)); 
            setTimeout(() => {
                console.log('Huy thay doi');
                dialog.close();
            }, 2500);
          })
            .catch(() => {
            console.log('Hủy xóa');
      });
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
label
{
  position: absolute;
  color: #E1F5FE;
  pointer-events: none;
  font-weight: 400;
  font-size: 0.7em;
}
.btnActived
{

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