<template>
  <v-app >
    <Nuxt />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      fixed: false,
    }
  }
}
</script>

<style >

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

  #app {
    /* overflow: auto; */
    font-family:'Poppins', sans-serif;
    color:#676767 !important;
    font-size:0.875rem
  }

  .pointer{
    cursor: pointer;
  }

  p{
    margin:0
  }

</style>
