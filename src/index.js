import Vue from 'vue'
import Vuelidate from 'vuelidate'
import './scss/styles.scss';
require('es6-promise').polyfill();

import AppComponent from './components/AppComponent.vue';

Vue.use(Vuelidate);

new Vue({
    render: h => h(AppComponent)
}).$mount('#BenchmarkDownloadApp');

