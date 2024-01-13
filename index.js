Vue.createApp({
    data() {
     return {
      selectedItem: null,
      Items:[
         {id: 0, name: "Om denne side", info:"Denne side er mit online cv. Jeg har selv designet/kodet det hele", 
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
         item.showInfo = true;
         item.infoToShow = item.info;
         if (!item.showInfo){
            item.infoToShow="";
            }
         },
         followlink(item){
            window.open(item.link, "_blank")
         }
      }
}).mount("#app");