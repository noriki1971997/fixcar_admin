<template>
<transition name="modal">
    <div class="modal-mask" v-show="show" :class="$mq">
      <div class="modal-wrapper" :class="$mq">
        <div class="modal-container" :class="$mq">

          <div class="modal-header" :class="$mq">
            <span :class="$mq">{{title}}</span>
          </div>

          <div class="modal-body" :class="$mq">
            <span :class="$mq">{{notification}}</span>     
          </div>

          <div class="modal-footer" :class="$mq">
            <slot name="footer" :class="$mq">
              <button class="modal-cancel-button" @click="onCancel" :class="$mq">
                Cancel
              </button>
              <button class="modal-ok-button" @click="onAgree" :class="$mq">
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  background-color: #000003;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  border-radius: 1em;
}
.modal-container.desktop
{
  width: 20em;
  margin: 0px auto;
  padding: 2.2em 2.5em;
}
.modal-container.tablet
{
  width: 15em;
  margin: 0px auto;
  padding: 1em 2em;
}
.modal-container.mobile
{
  width: 10em;
  margin: 0px auto;
  padding: 0.5em 0.7em;
}




.modal-header span {
  margin-top: 0;
  color: #59FE2F;
}

.modal-header span.desktop
{
  font-size: 16px;
}
.modal-header span.tablet
{
  font-size: 14px;
}
.modal-header span.mobile
{
  font-size: 8px;
}






.modal-body {
  margin-top: 0.3em;
  margin-bottom: 1.3em;
  width: 100%;
}
.modal-body.desktop {
  margin-top: 1.3em;
  margin-bottom: 1.3em;
}
.modal-body.tablet {
  margin-top: 1em;
  margin-bottom: 1.3em;
}
.modal-body.mobile {
  margin-top: 0.3em;
  margin-bottom: 1.3em;
}







.modal-body span
{
  color: white;
}
.modal-body span.desktop
{
  font-size: 16px;
}
.modal-body span.tablet
{
  font-size: 12px;
}
.modal-body span.mobile
{
  font-size: 8px;
}


.modal-ok-button {

  float: right;
  border: none;
  color: #59E259;
  background-color: inherit;
  outline: none;
}
.modal-ok-button.desktop
{
  font-size: 16px;
}
.modal-ok-button.tablet
{
  font-size: 14px;
  margin-top: -10px;
}
.modal-ok-button.mobile
{
  margin-top: -10px;
  font-size: 8px;
}


.modal-cancel-button {

  float: left;
  border: none;
  color: #da5a88;
  background-color: inherit;
  outline: none;
}
.modal-cancel-button.desktop
{
  font-size: 16px;
}
.modal-cancel-button.tablet
{
  font-size: 14px;
  margin-top: -10px;
}
.modal-cancel-button.mobile
{
  margin-top: -10px;
  font-size: 8px;
}



/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
<script>
export default {
  name: 'CustomDialog',
  data()
  {
    return{
      title:null,
      notification:null,
      resolve: null,
      reject: null,
      show:false
    }
  },
  methods:{
    open(title,notification)
    {
      this.title = title;
      this.notification = notification;
      this.show=true;
      return new Promise((resolve, reject) => {
          this.resolve = resolve
          this.reject = reject
      })
    },
    onAgree()
    {
      this.resolve(true);
      this.show = false;
    },

    onCancel()
    {
      this.show = false;
      this.reject(true);
    }
  }
};
</script>