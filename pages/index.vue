<template>
  <div class="d-flex flex-column">

    <div class="nav-bar d-flex justify-center">
      <div style="width:600px;">
        <v-card width="600" class="rounded-lg py-4 px-13 d-flex justify-space-between elevation-10" style="position: fixed;z-index: 5;left: auto;top: 50px;">
          <v-btn text class="font-weight-bold">About</v-btn>
          <v-btn text class="font-weight-bold">Journey</v-btn>
          <v-btn text class="font-weight-bold">What I Do</v-btn>
          <v-btn text class="font-weight-bold">Recommendations</v-btn>
        </v-card>
      </div>
    </div>

    <div class="greeting-section" style="position:relative">
      <img src="/bg-1.png" width="100%">
      <div class="d-flex justify-center" style="position:absolute;width:100%;z-index:2;top:200px">
        <img src="/sparkling.gif" width="800px">
      </div>

      <div class="d-flex justify-space-between" style="position:absolute;z-index:3;top:200px;width:100%;padding: 100px" >
        <div style="width:33%">
          <p class="for-title"> HELLO, </p>
          <p class="for-title" > <span style="color:#2EC4B6 !important"> ALFIANA'S </span> HERE!</p>
          <p class="for-desc-title"> Passionate to creating experience that easy to use!  </p>
          <p class="for-desc-title mt-13"> Want to know how  my universe unfolds?</p>
        </div>
        <div style="width:33%" class="d-flex justify-center">
          <img src="/rotating-earth.gif" width="350" height="350" style="margin-top:100px">
        </div>
        <div style="width:33%">
          <p class="text-right for-title " style="margin-top:95px"> A professional </p>
          <p class="text-right for-title" style="color:#2EC4B6 !important"> Website Developer</p>
          <p class="text-right for-desc-title mt-13"> Explore to know me better !</p>
        </div>
      </div>
    </div>

    <div class="about-section d-flex justify-space-between" style="padding:100px">
      <div style="width:50%;position:relative" class="d-flex justify-center">
        <img src="/bg-sun.png" width="430" height="430">
        <div style="position:absolute;z-index:2">
          <img src="/alfiana.png" width="260" style="">
          <v-card class="rounded-xl" style="z-index:3;bottom:10px;width:fit-content"> <p class="text-center px-13 py-2 ">Alfiana Cendani Putri</p></v-card>
        </div>
        
      </div>
      <div style="width:50%;height:fit-content;margin:auto">
        <p class="about-title"> I am <span style="color:#2EC4B6">Alfiana</span></p>
        <p class="about-desc"> A professional developer with 3 years of experience. With a strong passion for information and 
          technology, my background in mechatronic engineering from an Indonesian university (graduated in 2021) 
          fuels my love for space exploration. I aspire to create my own space in the digital world. Scroll down 
          to discover how my universe unfolds!
        </p>
        <p class="mt-4">Find me on my social media :</p>
        <div class="d-flex flex-row mt-1">
          <div v-for="(item,i) in socialMedia" :key="i" style="background-color:#F5F5F5" class="py-2 px-4 pointer" :class="i==1?'mx-3':''">
            <p style="color:#2EC4B6 "> {{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="journey-section mt-13" style="padding:100px">
      <div style="margin:auto;width:fit-content" class="mb-13">
        <p class="title-section text-center"> WANT TO KNOW <span style="color:#2EC4B6" >MY JOURNEY? </span></p>
        <p class="title-section text-center" style="position:relative;z-index:2"> LET’S FIND OUT WITH CLICK THE PLANETS!</p>

        <div style="position:relative">
          <div class="d-flex justify-end" style="position:relative;bottom:20px;z-index:0;right:0">
            <div style="width:325px;height:15px;background-color:#FFBF69;"></div>
          </div>
        </div>
      </div>

      <div style="position:relative">
        
        <div class="d-flex justify-space-between" style="position:relative;z-index:2">
          <img src="/mars.png" width="85" height="85" class="planets-journey">
          <img src="/earth.png" width="147" height="147" class="planets-journey">
          <img src="/venus.png" width="147" height="172" class="planets-journey">
          <img src="/merkurius.png" width="85" height="83" class="planets-journey">
          <img src="/sun.png" width="414" height="414" class="planets-journey">
        </div>
        <div class="d-flex justify-center">
          <div style="position:absolute;width:90%;border: dashed 3px #14213D;top:212px">

          </div>
        </div>
        
      </div>
      
    </div>

    <div class="whatIDo-section justify-center" style="padding:100px">

      <div style="margin:auto;width:fit-content" class="mb-13">
        <p class="title-section text-center " style="position:relative;z-index:2"> WHAT I DO?</p>
        <div style="position:relative">
          <div class="d-flex justify-end" style="position:relative;bottom:20px;z-index:0;right:0">
            <div style="width:90px;height:15px;background-color:#FFBF69;"></div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-space-between">
        <v-card @click="$router.push(item.url)" class="d-flex justify-center pointer elevation-4" v-for="(item,i) in kindOfWork" :key="i" width="250" height="320"> 
          <div style="width:fit-content;height:fit-content;margin:auto">
            <img :src="item.img" :width="item.width">
            <p class="text-center testimonial-title"> {{item.name}}</p>
          </div>
          
        </v-card>
      </div>
      
    </div>

    <div class="testimonials-section">
      
      <img src="/bg-2.png" width="100%">
      <p class="title-section text-center" style="position:absolute;z-index:2;top:200px;width:100%"> WHAT <span style="color:#2EC4B6">PEOPLE SAY</span> ABOUT ME?</p>
        <div style="position:absolute;z-index:2;top:250px;width:100%">
          <v-card class="justify-center pa-8 elevation-5 rounded-xl" width="700" style="margin:100px auto;">
            <div class="d-flex justify-center" > 
              <img src="/alfiana.png" width="65" style="border-radius:65px">
            </div>
            <p class="np-testimoni mt-2">{{selectedTesti.name}} - {{selectedTesti.position}}</p>
            <p class="content-testimoni mt-5">" {{selectedTesti.content}} "</p>
            <div class="d-flex justify-center mt-3">
              <div @click="selectedTesti=item" class="mx-1 pointer" :class="item.name == selectedTesti.name?'navigation-testimonials-acctive':'navigation-testimonials'" v-for="(item,i) in testimonials" :key="i" ></div>
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
  name: 'IndexPage',
  data () {
    return {
      fixed: false,
      selectedTesti: {name : 'Welldy Roesman', position: 'Senior Backend Dev at ATT Group', content:"Working with Alfiana is an absolute joy! Her passion for Vue and Laravel coding, coupled with a cheerful attitude, makes every project a delightful experience. Alfiana's dedication to learning and attention to detail create a positive and collaborative work environment. Lucky to have her on the team! 🚀😊"},
      testimonials:[
        {name : 'Welldy Roesman', position: 'Senior Backend Dev at ATT Group', content:"Working with Alfiana is an absolute joy! Her passion for Vue and Laravel coding, coupled with a cheerful attitude, makes every project a delightful experience. Alfiana's dedication to learning and attention to detail create a positive and collaborative work environment. Lucky to have her on the team! 🚀😊"},
        {name : 'Fida Ghaida', position:'Software Quality Assurance at Toko Rumahan', content:"I had the pleasure of working alongside Alfiana, and I can confidently say that she is a passionate and hardworking individual. As a frontend developer, Alfiana consistently demonstrated her ability to tackle challenges that arise during the application development process. She combines technical expertise with a keen eye for design. Her attention to detail, problem-solving skills, and dedication to creating user-friendly interfaces make her a standout professional. I highly recommend Alfiana for her exceptional contributions to frontend development. You're truly impressive, Alfiana!"},
        {name : 'Dania Azzahra', position:'',content:'It was such a wonderful experience by working with Alfiana! I had one of the best time in my life to work and learn in the same team as her. The passion she has for her role has always been so amazing and incredible. The way of her handling issues just show how much of a professional she is with such a great personality. With that much passions and professionalism, I would encourage anyone to trust her with their IT (mainly Front End side) matters to Alfiana. So happy that we have been working on stuff together, I feel honored to work with her and would look forward to more projects for us to collaborate again.'},
        {name : 'Tabita Ragilia', position:'', content:'The ability to create a web is very good, fast, neat, and responsible, and the results are up to 100% according to customer requests 👍🏻.'},
        {name : 'Diana NS', position:'Production Supervisor at Perfetti Van Melle', content:'have the ability to create a front end that is user friendly and eye catching'}
        
      ],
      socialMedia:[
        {name:'Github',url:'',icon:'mdi-github'},
        {name:'Linkedin',url:'',icon:'mdi-linkedin'},
        {name:'Email',url:'',icon:'mdi-email'},
      ],
      kindOfWork:[
        {name:'Website',img:'/Website.gif',width:'180',url:'/website'},
        {name:'Microcontroller',img:'/Microcontroller.gif',width:'180',url:'/microcontroller'},
        {name:'UI/UX',img:'/Design.gif',width:'180',url:'/ui-ux'},
        {name:'Machine Learning',img:'/Brain.gif',width:'180',url:'/machine-learning'},

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
  .font-footer{
    color : white;
  }
  .for-title{
    font-size:2.25rem;
    color : #14213D;
    font-weight: 700;
  }
  .for-desc-title{
    font-size: 1.25rem;
  }
  .about-title{
    font-size:1.5rem;
    font-weight: bold;
  }
  .about-desc{
    text-align: justify;
  }
  .title-section{
    font-size: 2rem;
    font-weight: bold;
  }
  .np-testimoni{
    color : #89909E !important;
    font-size:0.875rem;
    text-align: center;
  }
  .content-testimoni{
    font-size:0.875rem;
    text-align: center;
  }
  .navigation-testimonials{
    background-color:#ECECEC;
    width:15px;
    height:15px;
    border-radius:15px
  }
  .navigation-testimonials-acctive{
    background-color:   #BEC2CA;
    width:15px;
    height:15px;
    border-radius:15px
  }
  .testimonial-title{
    font-weight: 600;
    font-size:1.25rem
  }
  .planets-journey{
    margin:auto 20px;
    cursor: pointer
  }
  .testimonials-section{
    height: 812px;
    position: relative;
  }
</style>
