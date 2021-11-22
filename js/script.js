const app = new Vue({
  el: '#app',

  data: {
    mailList: [],
    isLoading: true,    
  },

  methods:{
    getMailList(){
      for(let i=0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) =>{
            const data = response.data;
            this.mailList.push(data.response);

            if(this.mailList.length === 10){              
              this.isLoading = false;
            };

         })           
      };     
      
      
    },

  },

  mounted(){
    this.getMailList();

  },

})