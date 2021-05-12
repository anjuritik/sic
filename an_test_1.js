function sayHello() {
var p;
var i;
var r;
var n;

var inta;



p=document.getElementById('Princ1').value;
i=document.getElementById('int_per').value;
r=document.getElementById('No_of_Years').value;

inta=(p*i*r/100);

n=parseFloat(p)+ parseFloat(inta);


var oneYr = new Date().getFullYear();
/*alert(oneYr);*/



const showScore=document.querySelector('#res1');

showScore.innerHTML=`<h3> If you deposit ${p},</br> at an interest rate of ${i} %, </br> you will receive 
an amount of  ${n  } </h3> 
`;


}
const prg1 = document.querySelector('progressBar');


//prg1.addEventListener('click', (e) => {

prg1.addEventListener('click', function () {
    alert('Current position: ' + document.getElementById('progressBar').position);
    alert('Current value: ' + document.getElementById('progressBar').value);
}

);




