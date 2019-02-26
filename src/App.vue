<template>
  <div id="app">
    <myHeader></myHeader>
    <Aside></Aside>
    <Main></Main>
  </div>
</template>

<script>
import myHeader from './components/Header'
import Aside from './components/aside'
import Main from './components/main'
export default {
  name: 'App',
  components: {
    myHeader,
    Aside,
    Main
  },
  data (){
    return {
      route:'sdfsd'
    }
  },
  created(){
    console.log(this)
  }
  
}
</script>

<style>
body{
  margin:0;
  padding:0;
}
.el-header{
  background: #ccc;
}
#app{
  display: flex;
}
</style>
