<template>
  <div class="d-flex flex-column">

    <div class="nav-bar d-flex justify-center">
      <div style="width:600px;">
        <v-card width="600" class="rounded-lg py-4 px-13 d-flex justify-space-between elevation-10" style="position: fixed;z-index: 99;left: auto;top: 50px;">
          <v-btn text class="font-weight-bold" href="#about">About</v-btn>
          <v-btn text class="font-weight-bold" href="#journey">Journey</v-btn>
          <v-btn text class="font-weight-bold" href="#whatido">What I Do</v-btn>
          <v-btn text class="font-weight-bold" href="#recommendations">Recommendations</v-btn>
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

    <div id="about" class="about-section" style="padding:100px">
      <div class="d-flex justify-space-between" >
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
            <div @click="goTo(item.url)" v-for="(item,i) in socialMedia" :key="i" style="background-color:#F5F5F5" class="py-2 px-4 pointer" :class="i==1?'mx-3':''">
              <p style="color:#2EC4B6 "> {{item.name}}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p class="text-center mb-4" style="font-size:1rem;font-weight:bold"> SKILLS</p>
        <div class="d-flex justify-center" style="display:flex;flex-wrap:wrap">
          <div v-for="(skill,i) in skills" :key="i" style="background-color:#F5F5F5" class="py-2 px-4 mb-3" :class="i!==0?'mx-3':''">
            <p>{{skill}} </p>
          </div>
        </div>
      </div>
    </div>
    
    <div id="journey" class="journey-section mt-13" style="padding:100px">
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
          <v-menu offset-x v-for="(item,i) in planets" :key="i">
            <template v-slot:activator="{ on, attrs }">
              <img v-bind="attrs" v-on="on"  :src="item.img" :width="item.width" :height="item.height" class="planets-journey">
            </template>
            <v-card width="500" class="pa-5 ">
              <div class="py-2 px-5 d-flex justify-center" style="border-radius:0;margin:auto;background-color:#FFBF69;width:fit-content;height:fit-content">
                <p class="title-journey-section " style="width:fit-content">{{item.year}}</p>
              </div>
              <div class="mb-2 mt-3" v-for="(content,j) in item.content" :key="j">
                <p class="content-journey-section" > <span style="font-weight:600;font-size:1rem"> {{content.name}} </span> ({{content.date}}) </p>
                <p class="content-journey-section"> {{content.task}}</p>
              </div>
            </v-card>
          </v-menu>
        </div>
        <div class="d-flex justify-center">
          <div style="position:absolute;width:90%;border: dashed 3px #14213D;top:212px">

          </div>
        </div>
        
      </div>
      
    </div>

    <div id="whatido" class="whatIDo-section justify-center" style="padding:100px">

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

    <div id="recommendations" class="testimonials-section">
      
      <img src="/bg-2.png" width="100%">
      <p class="title-section text-center" style="position:absolute;z-index:2;top:200px;width:100%"> WHAT <span style="color:#2EC4B6">PEOPLE SAY</span> ABOUT ME?</p>
        <div style="position:absolute;z-index:2;top:250px;width:100%">
          <v-card class="justify-center pa-8 elevation-5 rounded-xl" width="700" style="margin:100px auto;">
            <div class="d-flex justify-center" > 
              <img :src="selectedTesti.img" width="65" style="border-radius:65px">
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
  name: 'IndexPage',
  data () {
    return {
      fixed: false,
      selectedTesti: {name : 'Welldy Roesman', img:'/Welldy.jpg',  position: 'Senior Backend Dev at ATT Group', content:"Working with Alfiana is an absolute joy! Her passion for Vue and Laravel coding, coupled with a cheerful attitude, makes every project a delightful experience. Alfiana's dedication to learning and attention to detail create a positive and collaborative work environment. Lucky to have her on the team! 🚀😊"},
      testimonials:[
        {name : 'Welldy Roesman', img:'/Welldy.jpg', position: 'Senior Backend Dev at ATT Group', content:"Working with Alfiana is an absolute joy! Her passion for Vue and Laravel coding, coupled with a cheerful attitude, makes every project a delightful experience. Alfiana's dedication to learning and attention to detail create a positive and collaborative work environment. Lucky to have her on the team! 🚀😊"},
        {name : 'Fida Ghaida', img:'/Fida.jpg', position:'Software Quality Assurance at Toko Rumahan', content:"I had the pleasure of working alongside Alfiana, and I can confidently say that she is a passionate and hardworking individual. As a frontend developer, Alfiana consistently demonstrated her ability to tackle challenges that arise during the application development process. She combines technical expertise with a keen eye for design. Her attention to detail, problem-solving skills, and dedication to creating user-friendly interfaces make her a standout professional. I highly recommend Alfiana for her exceptional contributions to frontend development. You're truly impressive, Alfiana!"},
        {name : 'Dania Azzahra', img:'/Dania.jpg', position:'',content:'It was such a wonderful experience by working with Alfiana! I had one of the best time in my life to work and learn in the same team as her. The passion she has for her role has always been so amazing and incredible. The way of her handling issues just show how much of a professional she is with such a great personality. With that much passions and professionalism, I would encourage anyone to trust her with their IT (mainly Front End side) matters to Alfiana. So happy that we have been working on stuff together, I feel honored to work with her and would look forward to more projects for us to collaborate again.'},
        {name : 'Tabita Ragilia', img:'/Tabita.jpg', position:'', content:'The ability to create a web is very good, fast, neat, and responsible, and the results are up to 100% according to customer requests 👍🏻.'},
        {name : 'Diana NS', img:'/Diana.jpg', position:'Production Supervisor at Perfetti Van Melle', content:'have the ability to create a front end that is user friendly and eye catching'}
      ],
      skills:['Vue.Js','Nuxt.Js','Laravel','Code Igniter','Bootstrap', 'Vuetify','Tailwind', 'MYSQL','Firebase','Data Visualization','Figma', 'Postman','Git', 'Microcontroller Programming'],
      socialMedia:[
        {name:'Github',url:'https://github.com/alfianacndn/',icon:'mdi-github'},
        {name:'Linkedin',url:'https://www.linkedin.com/in/alfianacendani/',icon:'mdi-linkedin'},
      ],
      kindOfWork:[
        {name:'Website',img:'/Website.gif',width:'180',url:'/website'},
        {name:'Microcontroller',img:'/Microcontroller.gif',width:'180',url:'/microcontroller'},
        {name:'Website Design',img:'/Design.gif',width:'180',url:'/ui-ux'},
        {name:'Machine Learning',img:'/Brain.gif',width:'180',url:'/machine-learning'},
      ],
      planets:[
        {name:'Mars', img:'/mars.png',year:'2021',width:85,height:85,content:[
          {name : 'Informatics Lab Assistant at Polman Bandung', date:"Feb'21 - Jul'21", task:'Create websites based on department requirements, overseeing inventory and maintenance of lab equipment and managing students on practicum.'}, 
          {name : 'Generasi Gigih Participant (Data Analyst) at GoTo Impact Foundation', date:"May'21 - Jun'21", task:'Learn the fundamentals of data analysis, focusing on Python and SQL. Additionally, acquire knowledge of essential soft skills required in the professional environment.'}, 
          {name: 'Graduated from Polman Bandung Majoring in Mechatronics Engineering', date:"Oct'21",task:'Graduated with the final project of Creating a Solar Tracker System based on a Solar Algorithm Using a Website as a Control and Monitoring Tool.'},
          {name: 'Website Developer at Parkland World Indonesia', date:"Oct'21 - Mar'22", task:'Developed efficient and maintainable software according to business objectives and needs of user both of frontend side and the backend side with modern framework like Laravel and Vue.js, developed functional databases and discussed the project about the system.'}
        ]},
        {name:'Earth',img:'/earth.png',year:'2022',width:147,height:147,content:[
          {name:'Website Developer at Parkland World Indonesia', date:"Oct'21 - Mar'22", task:"Developed efficient and maintainable software according to business objectives and needs of user both of frontend side and the backend side with modern framework like Laravel and Vue.js, developed functional databases and discussed the project about the system."},
          {name:'Frontend Developer at Cityplan Indonesia', date:"Mar'22 - Now", task:"Involved in each project as a frontend developer. Responsible for translating business flow into UI/UX design using design thinking principles, creating high fidelity prototypes in Figma, discussing project features and goals, translating UI designs into code solutions with modern frontend frameworks (Vue.js / Nuxt.js), and creating map views with geospatial engines (ArcGIS JavaScript and others)."}
        ]},
        {name:'Venus',img:'/venus.png',year:'2023',width:147,height:172, content:[
          {name:'Frontend Developer at Cityplan Indonesia', date:"Mar'22 - Now", task:'Involved in each project as a frontend developer. Responsible for translating business flow into UI/UX design using design thinking principles, creating high fidelity prototypes in Figma, discussing project features and goals, translating UI designs into code solutions with modern frontend frameworks (Vue.js / Nuxt.js), and creating map views with geospatial engines (ArcGIS JavaScript and others).'},
          {name:'Fullstack Developer Freelance', date:"Jul'23 - Now", task:'Responsible as a project manager (managing schedules, client discussions, creating website system flows), designing websites (based on UX research, design thinking principles, high fidelity prototyping in Figma), frontend developer (UI creation based on approved designs, interactive and responsive design), and backend developer (API creation, database design, server management when the website is deployed)'}
        ]},
          {name:'Merkurius',img:'/merkurius.png',year:'2024',width:85,height:83, content:[
          {name:'Frontend Developer at Cityplan Indonesia', date:"Mar'22 - Now", task:'Involved in each project as a frontend developer. Responsible for translating business flow into UI/UX design using design thinking principles, creating high fidelity prototypes in Figma, discussing project features and goals, translating UI designs into code solutions with modern frontend frameworks (Vue.js / Nuxt.js), and creating map views with geospatial engines (ArcGIS JavaScript and others).'},
          {name:'Software Engineer Mentor Kampus Merdeka at Revou', date:"Ap'24 - Now", task:'Mentoring, managing, providing a simulation of the material for the student.'},
          {name:'Fullstack Developer Freelance', date:"Jul'23 - Now", task:'Responsible as a project manager (managing schedules, client discussions, creating website system flows), designing websites (based on UX research, design thinking principles, high fidelity prototyping in Figma), frontend developer (UI creation based on approved designs, interactive and responsive design), and backend developer (API creation, database design, server management when the website is deployed)'}
        ]},
        {name:'Sun',img:'/sun.png',year:'Now',width:414,height:414, content:[
          {name:'Fullstack Developer',date:'Now',task:'My commitment to staying updated with the latest technologies and frameworks reflects my dedication to creating impactful and user-friendly web applications that address real-world challenges and improve user experiences. I am known for my sense of responsibility, ability to collaborate effectively, and adaptability in both team and independent work settings. I approach tasks with creativity and communicate proficiently. My goal is to continue refining my skills and expertise as a full-stack developer while contributing to the growth and success of my company and its clients. Please let me know if you are interested to collaborate with me!'}]},
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
  .title-journey-section{
    font-weight: bold;
  }
  .content-journey-section{
    font-size:0.875rem
  }
</style>
