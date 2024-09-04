
// Generate a random number
const generation = document.querySelector('button');
const RandomNumber = document.querySelector('.showNumber');

generation.addEventListener("click", function (e){
    e.preventDefault();

    const generation = Math.trunc(Math.random() * 20) + 1;
    RandomNumber.textContent = generation;
    console.log(RandomNumber);    

});


// generate names of the president
let newArray = ["Atiku","Peter-Obi","buhari","Tinubu","Ambode","Fashola","Sowore","Sanwo-olu","Wysome wike"];

const generateName = document.querySelector(".generateName");
const showName = document.querySelector(".showName");

generateName.addEventListener("click", function(e){
    e.preventDefault();

    let generateName = newArray[Math.floor(Math.random() * newArray.length)];
    showName.textContent = generateName;
    console.log(showName);
});


// country array

const CountryArr = ["South Africa","United States","Nigeria","Italy","Gabon","Switzerland","Montenegro","Barbados","United Kingdom"];

const countrydisplay = document.querySelector(".showCountry");
const CountryGeneration = document.querySelector(".generateCountry");

CountryGeneration.addEventListener("click", function (e) {
    e.preventDefault();
    
    const CountryGeneration = CountryArr[Math.floor(Math.random() * CountryArr.length)];
    countrydisplay.textContent = CountryGeneration;
    console.log(countrydisplay);

});

// Display anonymous strings like the captcha.

const captcharArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const generatedDisplay = document.querySelector(".showCaptcha");
const captchaGeneration = document.querySelector(".generateCaptcha");

captchaGeneration.addEventListener("click", function (e){
    e.preventDefault();

generatedDisplay.textContent = getRandomString(10);

});  

function  getRandomString(string){

        let result = "";
      for(let i = 0; i<string; i++){

    result +=captcharArr.charAt(Math.floor(Math.random() * captcharArr.length));
      }
        
   return result;   
}