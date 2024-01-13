Vue.createApp({
    data() {
     return {
      selectedItem: null,
      Items:[
         {id: 0, name: "Om denne side", info:"Denne side er mit online cv, jeg har selv designet/kodet det hele", 
         infoToShow: "", showInfo:false},
         {id: 1, name: "Github", info: "101", infoToShow: "", showInfo:false},
         {id: 2, name: "Kontakt", info: "112", infoToShow: "", showInfo:false}
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
         }
      }
}).mount("#app");