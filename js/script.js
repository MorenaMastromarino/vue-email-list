const app = new Vue({
  el: '#app',

  data: {
    mailList: [],
  },

  methods:{
    getMailList(){
      for(let i=0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((response) =>{
            const data = response.data;
            this.mailList.push(data.response);
         })
         
      };
      console.log(this.mailList);
    },

  },

  mounted(){
    this.getMailList();

  },

})