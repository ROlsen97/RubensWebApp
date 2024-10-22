document.addEventListener('DOMContentLoaded', function() {
   const homeSection = document.getElementById('home');
   const aboutMeSection = document.getElementById('aboutMe');
   const navHome = document.getElementById('nav-home');
   const navAboutMe = document.getElementById('nav-aboutMe');

   function showSection(section){

      homeSection.classList.remove('show');
      aboutMeSection.classList.remove('show');
      section.classList.add('show');

      homeSection.style.display = 'none';
      aboutMeSection.style.display = 'none';

      section.style.display = 'block';
      document.body.classList.remove('js-loading');

      if (section === homeSection) {
         navHome.classList.add('active');
         navAboutMe.classList.remove('active');
       } else if (section === aboutMeSection) {
         navHome.classList.remove('active');
         navAboutMe.classList.add('active');
       }

   }

   navHome.addEventListener('click', function(){
      showSection(homeSection);
   });

   navAboutMe.addEventListener('click', function(){
      showSection(aboutMeSection);
   });

   if (window.location.hash === '#home' || !window.location.hash){
      showSection(homeSection);
   } else {
      showSection(aboutMeSection);
   }

});
 
Vue.createApp({
    data() {
     return {
      selectedItem: null,
      Items:[
         {id: 0, name: "Om denne side", info:"Denne side er mit online portfolio. Den består af HTML, CSS, Vue.js, Bootstrap, og Javascript", 
         infoToShow: "", showInfo:false},
         {id: 1, name: "Kontakt", info: "ruben2010@live.dk", infoToShow: "", showInfo:false}
      ]
     };
    },
    methods: {
      showInfo(item) {
         this.Items.forEach(x => {
            x.infoToShow = ""; 
            x.showInfo == false
         });
         if (!item.showInfo){
            item.showInfo = true;
            item.infoToShow = item.info;
            } else {
               item.showInfo = false;
            }
         },
      followlink(item){
            window.open(item.link, "_blank")
         },
      signIn(){
            signInWithEmailAndPassword(auth, email, password)
               .then((userCredentials => {
                  const user = userCredentials.user;
               }).catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
               }));
         },
      createUser(){
         createUserWithEmailAndPassword(auth, email, password)
         .then((userCredentials) => {
         
         }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
         });
         },
      mounted(){
         onAuthStateChanged(auth, (user) => {
            if (user){
               const uid = user.uid;
            } else {
         
            }
         });
      } 
   }
}).mount("#app");