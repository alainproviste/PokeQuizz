var Vue = new Vue({
  el: '#app',
  data: {
      dataPoke: {},
      response: null,
      loading: true,
      errored: false,
      quizz_rep: null
  },
  methods: {

    async quizz(){
      const choix = [];
      for (var i = 0; i < 4; i++) {
        await axios
          .get('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 151))
          .then(response => {
            this.dataPoke = response.data
          })
        choix.push(this.dataPoke);
        }
      document.getElementById('choix').innerHTML = "";
      for (var i = 0; i < choix.length; i++) {
        document.getElementById('choix').insertAdjacentHTML("beforeend", '<button onclick="Vue.add('+ i +')" id="'+ i +'"><img src="' + choix[i].sprites.front_default + '" class="reponse" ></button>');
      }
      quizz_rep = Math.floor(Math.random() * 4);
      await axios
        .get('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 151))
        .then(response => {
          this.dataPoke = response.data
        })
      document.getElementById("title").innerHTML = "<h2>Wich pokemon is  "+ this.dataPoke.name +"</h2>";
      document.getElementById(quizz_rep).innerHTML = '<img src="' + this.dataPoke.sprites.front_default + '" class="reponse">'
    },
    timer(){
      duration = moment.duration({'seconds': 15});
      var interval = 1;
      var downloadTimer = setInterval(function(){
        duration = moment.duration(duration.asSeconds() - interval, 'seconds');
        var sec = duration.seconds();
        document.getElementById("tempsRestant").innerText = sec + "s left" ;
        sec -=1;
        if (sec < 0) {
          alert("Session ended....");
          clearInterval(downloadTimer);
        }
      }, 1000);
      valeur = 0;
    },
    add(number){
      if (duration > 0) {
        if (number == quizz_rep) {
          valeur ++;
          Vue.quizz();
        }else {valeur --;}
        document.getElementById("nbDeClique").innerText ="Your score : " + valeur;
      }
    }
  }
});
window.onload = Vue.quizz();

