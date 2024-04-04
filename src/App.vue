<template>
  <div>
    <Greet  msg="Ashok A" Age="33.8"/>
    <Greet  msg="Devansh" Age="02.0"/>
    <Greet  msg="Vedansh" Age="00.8"/>
    <Second title="Kathyayani"/>
    <Second title="Honey"/>
  </div>
</template>

<script>
import Greet from './components/Greet.vue';
import Second from './components/Second.vue';
export default {
  name: 'App',
  components:{
    Greet,
    Second,
  },
  data(){
    return{

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
