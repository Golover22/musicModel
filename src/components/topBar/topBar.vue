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
        position: fixed;
        right: 0;
        left: 400px;
        top: 0;
        background: #457ca886;
        width: 900px;
        height: 40px;
        line-height: 40px;
        padding-left: 20px;
        text-align: left;
    }
</style>