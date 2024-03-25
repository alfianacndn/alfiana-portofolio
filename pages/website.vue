<template>
  <div>

    <div class="header-section d-flex flex-row elevation-5 pa-10">
      <div style="width:5%">
        <v-icon @click="$router.push('/')" style="margin:auto;color:#14213D" size="30"> mdi-arrow-left</v-icon>
      </div>
      <div style="width:95%">
        <div style="margin:auto;width:fit-content">
        <p class="title-section text-center " style="position:relative;z-index:2"> WEBSITE DEVELOPMENT?</p>
        <div style="position:relative">
          <div class="d-flex justify-end" style="position:relative;bottom:20px;z-index:0;right:0">
            <div style="width:260px;height:15px;background-color:#FFBF69;"></div>
          </div>
        </div>
      </div>
      </div>
      
    </div>

    <div class="tech-section mt-13">
      <p class="title-content mb-3"> Tech Stack</p>
      <v-card height="100%" class="elevation-3 py-4 px-13 d-flex justify-space-between">
        <img class="pointer" v-for="(item,i) in techStack" width="50" :key="i" :src="item.img">
      </v-card>
    </div>

    <div class="content-section my-13" >
      <p class="title-content mb-3"> Projects</p>
      <div class="d-flex justify-center" style="display: flex;flex-wrap: wrap;width:100%;margin:auto">
        <v-card v-for="(item,i) in dataWebsite" :key="i" width="550" class="mx-4 my-4 pa-5 justify-center">
          <div class="d-flex justify-center mb-1">
            <div style="border:solid 1px; width:300px;height:200px">

            </div>
          </div>
          <p class="title-project text-center"> {{item.name}}</p>
          <p class="detail-project text-center mb-3"> {{item.as}} - {{item.kindOfProject}} ({{item.year}})</p>
          <p class="content-project">contenttttt </p>
          <p class="tech-project">Tech stack : </p>
          <div class="d-flex flex-row " style="display:flex;flex-wrap:wrap">
            <div v-for="(stack,j) in item.stack" :key="j" class="mr-2 px-4 mb-2 pointer" style="height:fit-content;background-color:#F5F5F5">
              <p class="stack-name">{{stack}}</p>
            </div>
          </div>
        </v-card>
      </div>
      
      
    </div>

    <div class="footer-section">
      <v-footer
        class="d-flex justify-space-between pa-4"
        color="#14213D"
      >
        <div>
          <p class="font-footer">© 2024 Alfiana Space</p>
        </div>
        <div>
          <v-icon color="white" class="mx-1"> mdi-github</v-icon>
          <v-icon color="white" class="mx-1"> mdi-linkedin</v-icon>
          <v-icon color="white" class="ml-1"> mdi-email</v-icon>
        </div>
      </v-footer>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      dataWebsite:[
        {name:'Smart City', year:'2021', as:'Fullstack Developer', kindOfProject: 'Asistant Labolatory', detail:'', stack:['Laravel', 'Bootstrap', 'Firebase', 'MYSQL']},
        {name:'Devhub', year:'2022', as:'Fullstack Developer', kindOfProject: 'Parkland World Indonesia', detail:'', stack:['Laravel', 'Vue.JS', 'Bootstrap', 'MYSQL', 'Tortoise SVN', 'Postman' ]},
        {name:'Patroltaru', year:'2023', as:'Frontend Developer', kindOfProject: 'Cityplan Indonesia', detail:'', stack:['Laravel', 'Bootstrap', 'Firebase', 'MYSQL']},
        {name:'Cospace - Assets Marketplace',year:'2023', as:'Frontend Developer',  kindOfProject: 'Cityplan Indonesia', detail:'', stack:['Laravel', 'Bootstrap', 'Firebase', 'MYSQL']},
        {name:'Social Media Analytics', year:'2024', as:'Frontend Developer', kindOfProject: 'Cityplan Indonesia', detail:'', stack:['Laravel', 'Bootstrap', 'Firebase', 'MYSQL']},
        {name:'Dragee Detection', year:'2023', as:'Fullstack Developer', kindOfProject: 'Freelance', detail:'', stack:['Laravel', 'Bootstrap', 'Firebase', 'MYSQL']},
        {name:'Dealku Legal', year:'2024', as:'Frontend Developer', kindOfProject: 'Freelance', detail:'', stack:['Laravel', 'Bootstrap', 'Firebase', 'MYSQL']},
        {name:'Plum Cookies', year:'2024', as:'Fullstack Developer',  kindOfProject: 'Freelance', detail:'', stack:['Nuxt.js', 'Vuetify']},
      ],
      techStack:[
        {name: 'Vue.Js', img:'/tech-stack/vue.png', url:''},
        {name: 'Nuxt.JS', img:'/tech-stack/nuxt.png', url:''},
        {name: 'Laravel', img:'/tech-stack/laravel.png', url:''},
        {name: 'Code Igniter', img:'/tech-stack/ci.png', url:''},
        {name: 'FastAPI', img:'/tech-stack/fastapi.png', url:''},
        {name: 'Bootstrap', img:'/tech-stack/bootstrap.png', url:''},
        {name: 'Vuetify', img:'/tech-stack/vuetify.png', url:''},
        {name: 'Tailwind', img:'/tech-stack/tailwind.png', url:''},
        {name: 'MYSQL', img:'/tech-stack/mysql.png', url:''},
        {name: 'Firebase', img:'/tech-stack/firebase.png', url:''},
        {name : 'Postman', img:'/tech-stack/postman.png', url:''},
        {name: 'Git', img:'/tech-stack/git.png', url:''}
      ]
    }
  }
}
</script>

<style scoped>
  p{
    margin:0;
    color : #14213D;
    font-size:1rem

  }
  .title-section{
    font-size: 2rem;
    font-weight: bold;
  }

  .tech-section,.content-section{
    padding:  0 80px;
  }

  .tech-section{
    padding-top:150px
  }

  .title-content{
    font-size:1.5rem;
    font-weight: bold;
  }

  .header-section{
    width: 100%;
    position: fixed;
    z-index: 5;
    background: white;
  }

  .font-footer{
    color : white;
  }

  .title-project{
    font-weight: bold;
  }

  .content-project{
    text-align: justify;
  }

  .detail-project{
    color: #89909E;
    font-size: 0.875rem
  }

  .stack-name{
    color:#2EC4B6;
    font-size:0.875rem
  }

</style>