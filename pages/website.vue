<template>
  <div style="background-color:#f5f5f5">

    <div v-if="$vuetify.breakpoint.width>600" class="header-section d-flex flex-row elevation-5 pa-10">
      <div style="width:5%">
        <v-icon @click="$router.push('/')" style="margin:auto;color:#14213D" size="30"> mdi-arrow-left</v-icon>
      </div>
      <div style="width:95%">
        <div style="margin:auto;width:fit-content">
          <p class="title-section text-center " style="position:relative;z-index:2"> WEBSITE DEVELOPMENT</p>
          <div style="position:relative">
            <div class="d-flex justify-end" style="position:relative;bottom:20px;z-index:0;right:0">
              <div style="width:260px;height:15px;background-color:#FFBF69;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-app-bar v-else class="elevation-3 app-bar "  app clipped-left flat light style="z-index:99;width:100%;background-color:white">
        <v-icon @click="$router.push('/')" style="margin:auto;color:#14213D" size="30"> mdi-arrow-left</v-icon>
      <v-spacer></v-spacer>
        <p class="font-weight-bold"> Website Development </p>
    </v-app-bar>

    <div class="tech-section mt-13">
      <p class="title-content mb-3"> Tech Stack</p>
      <v-card height="100%" class="elevation-3 py-4 px-13 d-flex justify-space-between" style="display:flex;flex-wrap:wrap">
        <img  v-for="(item,i) in techStack" width="50" :key="i" :src="item.img">
      </v-card>
    </div>

    <div class="content-section my-13" >
      <p class="title-content mb-3"> Projects</p>
      <div class="d-flex justify-center" style="display: flex;flex-wrap: wrap;width:100%;margin:auto">
        <v-card v-for="(item,i) in dataWebsite" :key="i" width="550" class="mx-4 my-4 pa-5 justify-center">
          <div class="d-flex justify-center mb-1">
            <div style="width:100%;" class="d-flex justify-center">
              <v-carousel height="auto" show-arrows-on-hover :style="$vuetify.breakpoint.width>600?'width:100%':'width:100%'">
                  <v-carousel-item v-for="(img,j) in item.img" :key="j" >
                      <v-img :src="img.src" ></v-img>
                  </v-carousel-item>
              </v-carousel>
            </div>
          </div>
          <p class="title-project text-center" :class="item.url==''?'':'pointer'" :style="item.url==''?'':'text-decoration: underline;'" @click="goTo(item.url)"> {{item.name}}</p>
          <p class="detail-project text-center mb-3"> {{item.as}} - {{item.kindOfProject}} ({{item.year}})</p>
          <p class="content-project">{{item.detail}} </p>
          <p v-if="item.url!==''" class="mt-2" style="font-size:0.875rem" :class="item.url==''?'':'pointer'" :style="item.url==''?'':'text-decoration: underline;'" @click="goTo(item.url)"> Check out the details. </p>

          <p class="tech-project mt-2">Tech stack : </p>
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
          <p class="font-footer">© 2024 Alfiana's Space</p>
        </div>
        <div>
          <v-icon color="white" class="mx-1" @click="goTo('https://github.com/alfianacndn/')"> mdi-github</v-icon>
          <v-icon color="white" class="mx-1" @click="goTo('https://www.linkedin.com/in/alfianacendani/')"> mdi-linkedin</v-icon>
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
        {name:'Patroltaru', url:'https://ditjenpptr.atrbpn.go.id/penilaiankkpr/', img:[{src:'/patroltaru-1.png'},{src:'/patroltaru-2.png'},{src:'/patroltaru-3.png'},{src:'/patroltaru-4.png'},{src:'/patroltaru-5.png'},{src:'/patroltaru-6.png'},{src:'/patroltaru-7.png'},{src:'/patroltaru-8.png'}],year:'2023', as:'Frontend Developer', kindOfProject: 'Cityplan Indonesia', detail:'Patroltaru is an government app for the Indonesian Ministry of Agrarian Affairs and Spatial Planning. It assesing business work permits in Indonesia. This applications provides each different tasks/ action at each level. Starting from the data input, conducting assessments, verification BAP and certificate issuance by the Director General of ATR/BPN. This application has been successfully used in eary 2023 for 46 cities in Indonesia.', stack:['Nuxt.Js','Vuetify','Arcgis Javascript', 'Chart.JS']},
        {name:'Cospace - Assets Marketplace',url:'https://cospace-cityplan.netlify.app/', img:[{src:'/cospace-1.png'},{src:'/cospace-2.png'},{src:'/cospace-3.png'}],year:'2023', as:'Frontend Developer',  kindOfProject: 'Cityplan Indonesia', detail:'Cospace  is an asset market platform. This app helps users find strategic locations for starting a business. When users select the type of business they want to establish,  the platform will shows regional coverage with both strategic and non-strategic locations. The goal is that userscan find the most suitable location for their business.', stack:['Nuxt.JS','Arcgis Javascript']},
        {name:'Social Media Analytics',url:'https://sma.cityplan.id/', img:[{src:'/sma-1.png'},{src:'/sma-2.png'},{src:'/sma-3.png'},{src:'/sma-4.png'},{src:'/sma-5.png'}], year:'2024', as:'Frontend Developer', kindOfProject: 'Cityplan Indonesia', detail:'The platform gathers social media data for analysis, aiding planners in formulating RDTR. It displays popular topics, word frequencies, summaries, and sentiment analysis for each data from social media. Data is categorized by region and topic within the context of detailed spatial planning (RDTR). The goal is to provide planners with fresh and new insights on public opinion related to RDTR topics, facilitating future RDTR preparation based on public sentiment awareness.', stack:['Nuxt.JS','Vuex','Vuetify','Chart.JS','Arcgis Javascript']},
        {name:'Dealku Legal', url:'https://deal-ku.com/landing-page', img:[{src:'/dealku-1.png'},{src:'/dealku-2.png'},{src:'/dealku-3.png'},{src:'/dealku-4.png'},{src:'/dealku-5.png'}],year:'2024', as:'Fullstack Developer', kindOfProject: 'Freelance', detail:"Dealku Legal's website, owned by a law firm under GGP Law firm, serves to showcase Dealku's services. In addition to this, the platform offers a feature for users to submit legal questions, which will be addressed by Dealku's advocates. It also facilitates online consultations and includes a dashboard for admins and users to streamline data collection to make it easier to organize data for all of activites involved on this website.", stack:['Nuxt.JS','Vuetify','MYSQL','Laravel']},
        {name:'Devhub',url:'', img:[{src:'/devhub-1.png'},{src:'/devhub-2.png'},{src:'/devhub-3.png'},{src:'/devhub-4.png'},{src:'/devhub-5.png'},], year:'2022', as:'Fullstack Developer', kindOfProject: 'Parkland World Indonesia', detail:'Devhub is a centralized data of every transaction across development networrk. Using this apps, participants can confirm every transaction without sending a lot of manual emails.', stack:['Laravel', 'Vue.JS', 'Bootstrap', 'MYSQL', 'Tortoise SVN', 'Postman' ]},
        {name:'Smart City', url:'', img:[{src:'/sc-1.png'},{src:'/sc-2.png'},{src:'/sc-3.png'},{src:'/sc-4.png'}], year:'2021', as:'Fullstack Developer', kindOfProject: 'Asistant Labolatory', detail:"It is a platform that simplifies the usage of smart city tools. The platform provides detailed equipment information by scanning the device's barcode, offers equipment monitoring data (total power capacity, sun orientation, status of electronic devices powered by smart city tools), and includes a user dashboard for reading articles written by the admin, sending messages, and managing account information.", stack:['Laravel', 'Bootstrap', 'Firebase', 'MYSQL']},
        {name:'Candy Detection', url:'', img:[{src:'/detection-1.png'},{src:'/detection-2.png'},{src:'/detection-3.png'},],year:'2023', as:'Fullstack Developer', kindOfProject: 'Freelance', detail:'Candy Detection is a platform for detecting candy conditions using deep learning. The candy can be in ideal/good condition, double condition, or broken condition. In addition to identifying these conditions, the application also gathers user data from those who have checked the candy.', stack:['Laravel', 'Nuxt.JS', 'FastAPI', 'MYSQL','Vuetify']},
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
  },
  methods:{
    goTo(val){
      window.open(val)
    },
  }
}
</script>

<style scoped>
 @media only screen and (max-width:425px){
  .tech-section,.content-section{
    padding:  0 30px !important;
  }
  .tech-section{
    padding-top:50px !important
  }
 }
 @media  (min-width:426px) and (max-width:600px) {
  .tech-section,.content-section{
    padding:  0 50px !important;

  }
  .tech-section{
    padding-top:50px !important
  }
 }
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
    font-size:0.875rem
  }

  .detail-project{
    color: #89909E;
    font-size: 0.875rem
  }

  .stack-name{
    color:#2EC4B6;
    font-size:0.875rem
  }

  .tech-project{
    font-size:0.875rem
  }

</style>