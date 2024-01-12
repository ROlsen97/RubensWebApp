Vue.createApp({
    data() {
     return {
      selectedItem: null,
      Items:[
         {id: 0, name: "Om denne side", info:"Jeg er en datamatiker-studerende på Zealand, Sjællands erhvervsakademi, og jeg er interesseret i at lære mere om it-sikkerhed...", 
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