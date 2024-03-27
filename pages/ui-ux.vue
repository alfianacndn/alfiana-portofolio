<template>
  <div style="background-color:#f5f5f5">

    <div class="header-section d-flex flex-row elevation-5 pa-10">
      <div style="width:5%">
        <v-icon @click="$router.push('/')" style="margin:auto;color:#14213D" size="30"> mdi-arrow-left</v-icon>
      </div>
      <div style="width:95%">
        <div style="margin:auto;width:fit-content">
        <p class="title-section text-center " style="position:relative;z-index:2"> WEBSITE DESIGN</p>
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
      <v-card height="100%" class="elevation-3 py-4 px-13 d-flex justify-center" style="display:flex;flex-wrap:wrap">
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
          <p class="title-project text-center"> {{item.name}}</p>
          <p class="detail-project text-center mb-3"> {{item.as}} - {{item.kindOfProject}} ({{item.year}})</p>
          <p class="content-project">{{item.detail}} </p>
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
        {name:'Smart City', img:[{src:'/sc-1.png'}], year:'2021', as:'Website Design', kindOfProject: 'Asistant Labolatory', detail:".", stack:['Figma']},
        {name:'Social Media Analytics',img:[{src:'/sma-1.png'},{src:'/sma-2.png'},{src:'/sma-3.png'},{src:'/sma-4.png'},{src:'/sma-5.png'}], year:'2024', as:'Website Design', kindOfProject: 'Cityplan Indonesia', detail:'', stack:['Figma']},
        {name:'Dealku Legal', img:[{src:'/dealku-1.png'},{src:'/dealku-2.png'},{src:'/dealku-3.png'},{src:'/dealku-4.png'},{src:'/dealku-5.png'}],year:'2024', as:'Website Design', kindOfProject: 'Freelance', detail:"", stack:['Figma']},
      ],
      techStack:[
        {name: 'Figma', img:'/tech-stack/figma.png', url:''},
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