<template>
    <aside> 
        <el-menu>
            <el-menu-item index="1">
                <icon name="retweet"></icon>
                <router-link to="use_install">
                    使用安装
                </router-link>
            </el-menu-item>
            <el-menu-item index="2">
                <icon name="retweet"></icon>
                <router-link  to="invite_payback">
                    邀请返利
                </router-link>
            </el-menu-item>
            <el-menu-item index="3">
                <icon name="eye"></icon>
                <router-link to="get_invite">
                    邀请查询
                </router-link>
            </el-menu-item>
            <el-menu-item index="4">
                <icon name="shopping-bag"></icon>
                <router-link to="shop_buy">
                    套餐购买
                </router-link>
            </el-menu-item>
            <el-menu-item index="5">
                <icon name="user-circle"></icon>
                <router-link to="user">
                    用户中心
                </router-link>
            </el-menu-item>
            <el-menu-item index="6">
                <icon name="cogs"></icon>
                <router-link to="management">
                    管理面板
                </router-link>
            </el-menu-item>
        </el-menu>
    </aside>
</template>
<script>
export default {
    name:"Aside",
    data () {
        return{
        }
    },
    methods: {
      
    },
    watch:{
        $route(){
            this.route = this.$route.path
        }
    },
    created(){
        console.log(this)
    }
}
</script>   
<style lang="scss" scoped>
a{
    display: inline-block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color:#666;
}
.fa-icon{
    display: inline-block;
    margin:4px;
}
aside{
    flex: 0 0 180px;
    min-height: 100vh;
    overflow: visible;
    border-right: 1px solid #ccc;
    ul{
        border:none;
    }
}
</style>

