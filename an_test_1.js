
var m;

 
 function sayHello() {
var p;
var n;
var inta;

p=document.getElementById('Princ1').value;
r=document.getElementById('No_of_Years').value;

n=parseFloat(p)+ parseFloat(inta);
inta=(p*m*r/100);

var oneYr = new Date().getFullYear();
/*alert(oneYr);*/

const showScore=document.querySelector('#res1');

showScore.innerHTML=`<h3> If you deposit ${p},</br> at an interest rate of ${i} %, </br> you will receive 
an amount of  ${n  } </h3> 
`;
}


 