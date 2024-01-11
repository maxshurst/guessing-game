const numberBox = document.getElementById('guess');
const feedbackBox = document.getElementById('feedback');

const newNumber = Math.ceil(Math.random()*1000);

numberBox.addEventListener('change',checkNumber);

function checkNumber() {

const guess = numberBox.value;
if (guess < newNumber) {
    feedbackBox.innerText= "Too Low!";

}
else if  ( guess> newNumber ){

    feedbackBox.innerText= "Too high!";
    
}
else {

    feedbackBox.innerText= "Correct! reload page to start again.";

}


}

