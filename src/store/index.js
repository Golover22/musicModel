import {
	createStore
} from 'vuex'

//用于响应组件中的动作
const actions = {

}

//用于操作数据(state)
const mutations = {

}

//共享的数据
const state = {
	result_MusicList: [],
	user_Name: null,
	user_Like: null,
	user_Sheet: null,
	musicPlayUrl:null,
}
export default createStore({
	state,
	getters: {

	},
	mutations,
	actions,
	modules: {}
})