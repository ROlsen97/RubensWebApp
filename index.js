Vue.createApp({
    data() {
     return {
      selectedItem: null,
      Items:[
         {id: 0, name: "Om denne side", info:"Denne side er mit online cv. Den består af HTML, CSS, Vue.js, og Bootstrap", 
         infoToShow: "", showInfo:false},
         {id: 1, name: "Denne knap fører til min Github", link: "https://github.com/ROlsen97", infoToShow: "", showInfo:false},
         {id: 2, name: "Kontakt", info: "ruben2010@live.dk", infoToShow: "", showInfo:false}
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
         }
      }
}).mount("#app");