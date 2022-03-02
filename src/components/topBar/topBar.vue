<template>
    <div class="topBar">
        <search/>
        <profile/>
    </div>
</template>

<script>
import search from "./searchBar/search.vue"
import profile from "./profile/profile.vue"
export default {
    name:'',
    components: {
        search,
        profile,
    },
    data() {
        return {

        };
    },
    computed: {},
    watch: {},
    methods: {},
    created() {/* 被创建的时候 */
        
    },
    updated() {/* 更新的时候 */
        
    },
    mounted() {/* 被正常挂载的时候 */
        
    },
    unmounted() {/* 对应v2 的destroyed  被销毁的时候 */
        
    }
}
</script>
<style>
    .topBar{
        position: relative;
        left: 150px;
        background: #457ca886;
        width: 900px;
        height: 50px;
        line-height: 40px;
        padding-left: 20px;
        text-align: left;
    }
</style>