const app = new Vue({
  el: '#app',

  data: {
    mailList: [],
    isLoading: true,  
    isError: false,  
  },

  methods:{
    getMailList(){
      for(let i=0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/maill')

          .then((response) =>{
            const data = response.data;
            this.mailList.push(data.response);

            if(this.mailList.length === 10){              
              this.isLoading = false;
            };
          }) 
         
          .catch((error) => {
            this.isError = true; 
          })
      };     
      
      
    },

  },

  mounted(){
    this.getMailList();

  },

})