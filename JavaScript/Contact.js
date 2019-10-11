
//localStorage.removeItem('count')
const updateWithJoke = async (event) => {
    document.querySelector('#result').innerHTML = ''
    const url = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]'
    const response = await fetch(url)
    const obj = await response.json()
    const joke = obj.value.joke || 'No joke for you.'
    document.querySelector('#result').innerHTML = joke
  }
  document.addEventListener('click', event => {
    if (event.target && event.target.id === 'getJokeButton') { updateWithJoke(event) }
  })
localStorage.setItem('count',parseInt(localStorage.getItem('count'))+1||0); 
document.querySelector("#countNumber").innerHTML="SANTHOSH ,The number of times the web page is reloaded or content validated  "+ localStorage.getItem('count');
const coder3 = new Vue({
  el: '#coder3',
  data: {
    phonenumber:null,
    firstname:null,
    lastname:null,
    email:null,
    validateNumber:null,
    validateFirstName:null,
    validateSecondName:null

  },
  
  methods: {
    validate: function () {
        if((localStorage.getItem('count'))==null||parseInt(localStorage.getItem('count'))==0){
            localStorage.setItem('count',1);
        }
        console.log("In func")
        if(this.phonenumber.length!=10){
           document.querySelector("#validateNumber").innerHTML="Enter a valid phone number with length 10"
            console.log("enter valid Number")
        }
        else{
            document.querySelector("#validateNumber").innerHTML="";
        }
        if(this.firstname.length<6){
            document.querySelector("#validateFirstName").innerHTML="Enter a valid first Name with length above 6"
        }
        else{
            document.querySelector("#validateFirstName").innerHTML="";
        }
        if(this.lastname.length<6){
            document.querySelector("#validateSecondName").innerHTML="Enter a valid second Name with length above 6"
        }
        else{
            document.querySelector("#validateSecondName").innerHTML="";
        }
        localStorage.setItem('count',parseInt(localStorage.getItem('count'))+1); 
        document.querySelector("#countNumber").innerHTML= "The number of times the web page is reloaded or button validated  "+localStorage.getItem('count');
      
    }
  }
})