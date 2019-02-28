<template>
    <el-row :gutter="20">
        <el-col :span="12" :offset="6">
            <div class="grid-content bg-purple">
                <el-form :label-position="labelPosition" label-width="80px" :model="loginFrom">
                    <el-form-item label="名称">
                        <el-input v-model="loginFrom.name" @input="chengeName"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域">
                        <el-input v-model="loginFrom.region"></el-input>
                    </el-form-item>
                    <el-form-item label="活动形式">
                        <el-input v-model="loginFrom.type"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input type="password" v-model="loginFrom.password"></el-input>
                    </el-form-item>
                </el-form>
            </div>
        </el-col>
    </el-row>
</template>
<script>
export default {
    name: 'Login',
    data(){
        return {
            labelPosition: 'right',
            loginFrom: {
                name:"输入您的名字",
                region: '',
                type: '',
                password: ''
            } 
        }
    },
    methods: {
        chengeName(){
            console.log(this.loginFrom.name );
        }
    },
    created(){
        this.$axios({
            url: 'api/login',
            methos: 'get',
            params: {
                id: 122,
                name: 'ldd'
            }
        })
        .then( res => {
            console.log(res)
            
        })
        .catch( res => {
            console.log(res)
        })
    }
}
</script>

