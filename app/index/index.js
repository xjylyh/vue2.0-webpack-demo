import Vue from 'Vue';
import Favlist from './components/Favlist.vue';
import Float from './components/float.vue'
Vue.config.debug = true; //错误提示
window.onload = function(){
    console.log('fuck');
    new Vue({
        el:'#app',
        components:{
            'my-compts':Favlist,
            'my-float':Float
        }
    })
}