<template>
	<router-view></router-view>
</template>
<style>
 
</style>
<script>
import router from 'vue-router';
export default {
    computed : {  
      isLoggedIn : function(){ return this.$store.getters['auth/isLoggedIn']}
    },
    created: function () {
      if(this.isLoggedIn)
      {
        this.$router.push('/dashBoard');
      }
      this.$http.interceptors.response.use(undefined, function (err) {
        return new Promise(function (resolve, reject) {
          if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
            this.$store.dispatch(logout)
          }
          throw err;
        });
      });
    }
  }
</script>

