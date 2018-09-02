// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

import 'common/stylus/index.styl'
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
	{path: '/goods', component: goods},
	{path: '/ratings', component: ratings},
	{path: '/seller', component: seller}
]

const router = new VueRouter({
	routes,
	linkActiveClass: 'active'
})

const app = new Vue({
	router,
	components: { App },
	render: h => h(App)
}).$mount('#app')

router.push('/goods')