import {
	createRouter,
	createWebHashHistory
} from 'vue-router'

//引入组件
//左边Menu的六个组件
import DisCover from '../views/menu/DiscoverMusic'
import Follow from '../views/menu/Follow'
import LiveBroadcast from '../views/menu/LiveBroadcast'
import Podcast from '../views/menu/Podcast'
import PrivateFM from '../views/menu/PrivateFM'
import Video from '../views/menu/Video'
//我的音乐下5个组件
import Download from "../views/my_music/Download"
import MyCloudDisk from "../views/my_music/MyCloudDisk"
import MyPodcast from "../views/my_music/MyPodcast"
import MyStore from "../views/my_music/MyStore"
import Recent from "../views/my_music/Recent"
//创建的歌单
import MyLike from "../views/c_song_sheet/MyLike"
//收藏的歌单
import StoSheet from "../views/sto_sheet/StoSheet"
const routes = [
	//menu下6个组件
	{
		path: '/menu/discover',
		name: 'discover',
		component: DisCover
	},
	{
		path: '/menu/podcast',
		name: 'podcast',
		component: Follow
	},
	{
		path: '/menu/video',
		name: 'video',
		component: LiveBroadcast
	},
	{
		path: '/menu/follow',
		name: 'follow',
		component: Podcast
	},
	{
		path: '/menu/live_broadcast',
		name: 'live_broadcast',
		component: PrivateFM
	},
	{
		path: '/menu/private_fm',
		name: 'private_fm',
		component: Video
	},
	//my_music下5个组件
	{
		path: '/my_music/download',
		name: 'Download',
		component: Download
	},
	{
		path: '/my_music/cloud_disk',
		name: 'MyCloudDisk',
		component: MyCloudDisk
	},
	{
		path: '/my_music/podcast',
		name: 'MyPodcast',
		component: MyPodcast
	},
	{
		path: '/my_music/store',
		name: 'MyStore',
		component: MyStore
	},
	{
		path: '/my_music/recent',
		name: 'recent',
		component: Recent
	},
	//我喜欢的音乐(创建的歌单)
	{
		path: '/crt/mylike',
		name: 'MyLike',
		component: MyLike
	},
	//收藏的歌单
	{
		path: '/sto/my_sto',
		name: 'StoSheet',
		component: StoSheet
	},


	// {
	// 	path: '/about',
	// 	name: 'about',
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
	// }
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router