import {
	createStore
} from 'vuex'

//用于响应组件中的动作
const actions = {

}

//用于操作数据(state)
const mutations = {
	setMusicUrl(state,url){
		state.musicPlayUrl=url
	},
	setCurrentMusicName(state,name){
		state.currentMusicName=name
	},
	setCurrentSinger(state,name){
		state.CurrentSinger=name
	}
}

//共享的数据
const state = {
	result_MusicList: [], //歌单信息
	user_Name: null,
	user_Like: null,
	user_Sheet: null, //用户歌单,id,名字
	musicPlayUrl: null,
	currentMusicName:"",  //当前音乐名
	CurrentSinger:"", //当前歌手
}
export default createStore({
	state,
	getters: {
		getmusicPlayUrl(state){
			return state.musicPlayUrl	
		},
	},
	mutations,
	actions,
	modules: {}
})