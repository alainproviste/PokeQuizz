<template>
  <div id="nav">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar'

export default {
  name: 'nav',
  components: {
    Navbar
  }
}
</script>