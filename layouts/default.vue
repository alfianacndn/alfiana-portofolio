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
  .slide-left {
    -webkit-animation: slide-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    opacity: 0;
  }

  .slide-right {
    -webkit-animation: slide-right 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-right 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    opacity:0
  }

  @-webkit-keyframes slide-right {
    0% {
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
      opacity:0
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity:1
    }
  }
  @keyframes slide-right {
    0% {
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
      opacity:0
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity:1
    }
  }

  @-webkit-keyframes slide-left {
    0% {
      -webkit-transform: translateX(100px);
      transform: translateX(100px);
    }
    100% {
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
      opacity:1
    }
  }
  @keyframes slide-left {
    0% {
      -webkit-transform: translateX(100px);
      transform: translateX(100px);
    }
    100% {
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
      opacity: 1;
    }
  }

  @keyframes show-up {
    0% {
      opacity: 0;
      transform: translateY(0px);
      -webkit-transform: translateY(0px);
      -moz-transform: translateY(0px);
      -ms-transform: translateY(0px);
      -o-transform: translateY(0px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
    }
  }

  .slide-up {
    animation-duration: 1.5s;
    animation-fill-mode: both;
    animation-name: slide-up;
    opacity:0
  }

  .show-up {
    animation-duration: 2s;
    animation-fill-mode: both;
    animation-name: show-up;
    opacity:0
  }

  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(10px);
      -webkit-transform: translateY(30px);
      -moz-transform: translateY(20px);
      -ms-transform: translateY(20px);
      -o-transform: translateY(20px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
      -webkit-transform: translateY(0);
      -moz-transform: translateY(0);
      -ms-transform: translateY(0);
      -o-transform: translateY(0);
    }
  }
  .opacity-0{
    opacity:0
  }

</style>
