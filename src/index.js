import Vue from 'vue'
import App from './app.vue'
import './asserts/css/main.css'
import './asserts/images/ad2.jpg'

const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
    render:h => h(App)
}).$mount(root);