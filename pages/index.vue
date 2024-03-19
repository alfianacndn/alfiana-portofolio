<template>
  <div class="d-flex flex-column">

    <!-- <div class="nav-bar">
        <v-card width="500" class="rounded-lg py-4 px-13 d-flex justify-space-between">
          <p>About</p>
          <p>Journey</p>
          <p>What I Do</p>
          <p>Recommendations</p>
        </v-card>
    </div> -->

    <div class="greeting-section" style="position:relative">
      <img src="/bg-1.png" width="100%">
      <div class="d-flex justify-center" style="position:absolute;width:100%;z-index:2;top:100px">
        <img src="/sparkling.gif" width="800px">
      </div>

      <div class="d-flex justify-space-between" style="position:absolute;z-index:3;top:100px;width:100%;padding: 0 100px" >
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

    <div class="about-section d-flex justify-space-between" style="padding:0 100px">
      <div style="width:50%;position:relative" class="d-flex justify-center">
        <img src="/bg-sun.png" width="430" height="430">
        <img src="/alfiana.png" width="260" style="position:absolute;z-index:2">
        <v-card  style="position:absolute;z-index:3;bottom:10px"> Alfiana Cendani Putri</v-card>
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
    
    <div class="journey-section mt-13">
      <div style="margin:auto;width:fit-content">
        <p class="title-section text-center"> WANT TO KNOW <span style="color:#2EC4B6" >MY JOURNEY? </span></p>
        <p class="title-section text-center"> LET’S FIND OUT WITH CLICK THE PLANETS!</p>

        <div style="position:relative">
          <div class="d-flex justify-end" style="position:relative;bottom:20px;z-index:0;right:0">
            <div style="width:325px;height:15px;background-color:#FFBF69;"></div>
          </div>
        </div>
      </div>
      
    </div>

    <div class="whatIDo-section justify-center" style="padding:0 100px">

      <div style="margin:auto;width:fit-content">
        <p class="title-section text-center"> WHAT I DO?</p>
        <div style="position:relative">
          <div class="d-flex justify-end" style="position:relative;bottom:20px;z-index:0;right:0">
            <div style="width:90px;height:15px;background-color:#FFBF69;"></div>
          </div>
        </div>
      </div>

      <div class="d-flex justify-space-between">
        <v-card v-for="(item,i) in kindOfWork" :key="i" width="250" height="320"> 
        </v-card>
      </div>
      
    </div>

    <div class="testimonials-section" style="position:relative">
      
      <img src="/bg-2.png" width="100%">
      <p class="title-section text-center" style="position:absolute;z-index:2;top:200px;width:100%"> WHAT <span style="color:#2EC4B6">PEOPLE SAY</span> ABOUT ME?</p>
        <div style="position:absolute;z-index:2;top:250px;width:100%">
          <v-card class="justify-center pa-8 elevation-5 rounded-lg" width="650" style="margin:100px auto;">
            <div class="d-flex justify-center" > 
              <img src="/alfiana.png" width="65" style="border-radius:65px">
            </div>
            <p class="np-testimoni mt-2">{{selectedTesti.name}} - {{selectedTesti.position}}</p>
            <p class="content-testimoni mt-5">" {{selectedTesti.content}} "</p>
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
        {name : 'Tabita Ragilia', position:'', content:'The ability to create a web is very good, fast, neat, and responsible, and the results are up to 100% according to customer requests 👍🏻.'},
        {name : 'Diana NS', position:'Production Supervisor at Perfetti Van Melle', content:'have the ability to create a front end that is user friendly and eye catching'}
      ],
      socialMedia:[
        {name:'Github',url:'',icon:'mdi-github'},
        {name:'Linkedin',url:'',icon:'mdi-linkedin'},
        {name:'Email',url:'',icon:'mdi-email'},
      ],
      kindOfWork:[
        {name:'Website',img:''},
        {name:'Microcontroller',img:''},
        {name:'UI/UX',img:''},
        {name:'Machine Learning',img:''},

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
</style>
