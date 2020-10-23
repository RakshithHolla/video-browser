import Vue from 'vue';
import App from './App';

new Vue({
    //el: '#app', can be used in place of $mount()
    render: h => h(App)
}).$mount('#app');