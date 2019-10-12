<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>

</template>

<script>
import Header from './components/header.vue'
import theindex from './pages/theindex.vue'
export default {
  components:{
    Header,
    theindex,
  }
}
</script>

<style></style>
