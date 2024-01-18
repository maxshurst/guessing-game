const numberBox = document.getElementById('guess');
const feedbackBox = document.getElementById('feedback');
const closeBox = document.getElementById('closeb');
const close2Box = document.getElementById('closeb2');


const newNumber = Math.ceil(Math.random()*1000);

numberBox.addEventListener('change',checkNumber);

function checkNumber() {
    const guess = numberBox.value;
    const closel = newNumber - guess; 
    const closeh = guess - newNumber;
    const closen = 20;
   
    
    

if (guess < newNumber) {
    feedbackBox.innerText= "Too Low!";

    

     
        if (closel < closen){
        closeBox.innerText = "you are pretty close though...";
    }

    }
    

else if  ( guess > newNumber ){

    feedbackBox.innerText= "Too high!";
       
       if (closeh < closen){
      closeBox.innerText = "you are pretty close though...";
    
    }
    }
    


else {

    feedbackBox.innerText= "Correct! reload page to start again.";
    closeBox.innerText = "your as close as you can get";
   

}


}





const inputBox = document.getElementById('input');
const outputBox = document.getElementById('output');


inputBox.addEventListener('change',mathfunc);

function mathfunc() {

const input = inputBox.value;


outputBox.innerText = input**2;



}