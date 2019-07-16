<template>
  <div id="app">
    <div>
      <teacher-list-one></teacher-list-one>
      <teacher-list-two></teacher-list-two>
    </div>
  </div>
</template>
<script>
  import TeacherListOne from './components/TeacherListOne.vue'
  import TeacherListTwo from './components/TeacherListTwo.vue'
  export default {
    components:{
      'teacher-list-one': TeacherListOne,
      'teacher-list-two': TeacherListTwo
    },
    data(){
      return{

      }
    }
  }


</script>



<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
