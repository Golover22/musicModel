import {
    createRouter,
    createWebHistory
} from 'vue-router'

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
// import StoSheet from "../views/sto_sheet/StoSheet"
const StoSheet = () =>
    import ("../views/sto_sheet/StoSheet")
    //引入个性推荐
    // import DisHeader from "../views/menu/dis_cover/Header"
    // 懒加载 即按需加载
const DisHeader = () =>
    import ("../views/menu/dis_cover/Header")
const SearchResult = () =>
    import ("@/views/center/center")

// 中部显示区域
const routes = [
	{ // 重定向 访问首页默认转到发现音乐界面
        path: "/",
        redirect: "/menu/discover"
    },
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
    //个性推荐
    {
        path: '/menu/discover/recommendation',
        name: 'DisHeader',
        component: DisHeader
    },
	// 搜索结果
    {
        path: '/SearchResult',
        name: 'SearchResult',
        component: SearchResult
    },
	
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router