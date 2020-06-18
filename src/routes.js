import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Editor from './pages/Editor.vue'
import Notice from './components/Notice.vue'

export default new VueRouter({
	routes: [
		{
			path: '',
			component: Home
		},

		{
			path: '/editor',
			component: Editor
		},
			
		{
			path: '/notice',
			component: Notice
		}
	],

	mode: 'history'
})