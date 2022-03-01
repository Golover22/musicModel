// topBar区域信息
import axios from   "axios"
const requst=axios.create({
    // 基url
    baseURL:"https://autumnfish.cn",
    // 超时时间
    timeout:5000
})
export default {
        // 利用回调传入数据
    searchQuery(key,success,fail){
        // 要求传入两个回调函数 第二个为请求成功时候回调 第三个为失败时候回调
        return requst({
            // 使用对应的axios实例访问即可
            url:"/search?keywords="+key
        }).then(res=>{
            success(res)  // 回调成功函数
        }).catch(err=>{
            fail(err)    // 回调失败函数  
        })
    }
}