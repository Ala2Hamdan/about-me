'use strict';
  let userName = prompt('what is yuor name ??');
       console.log(userName);
  alert(` wellcome ${userName} to my web site let us  start  a game !!!!`);
    
   let score=0;

  function color (){

  

  let favColor =prompt('Is my favorite color black??');
    favColor= favColor.toLowerCase();

  if (favColor==='yes'|| favColor==='y'){
      alert('that is right');
      score=score+1;
  } else if(favColor==='no'|| favColor==='n'){
     
      alert('wrong try to guess again');
  }
     else{
       alert('enter yes or y or no or n');
     }
    }
    color();


    function subject (){
 
    let favSub =prompt('Is my favorite subject biology??');
    favSub= favSub.toLowerCase();

  if (favSub==='no'|| favSub==='n'){
          
      alert('that is right');
      score=score+1;
  } else if (favSub==='yes'||favSub==='y'){
   
      alert('wrong try to guess again');
  }
  
  else{
    alert('enter yes or y or no or n');
  }
    }
    subject();

    function juice(){
  let favD =prompt('Is my favorite drink juice??');
  favD= favD.toLowerCase();

  if (favD==='no'|| favD==='n'){
     
    alert('that is right');
    score=score+1;
 } else if (favD==='yes' || favD=== 'y'){
       
    alert('wrong try to guess again');

  }
  
  else{
    alert('enter yes or y or no or n');
  }
    }
    juice();

    function game (){
 let favGame =prompt('Is my favorite game Clash Royale??');
    favGame= favGame.toLowerCase();

  if (favGame==='no'|| favGame==='n'){
        
      alert('that is right');
      score=score+1;
  } else if (favGame === 'yes'|| favGame==='y'){
      
      alert('wrong try to guess again');
  }
  else{
    alert('enter yes or y or no or n');
  }
    }
    game();

    function fruit (){
  let favFruit =prompt('Is my favorite fruit green apple ??');
  favFruit= favFruit.toLowerCase();

if (favFruit==='yes'|| favFruit==='y'){
    
    alert('that is right');
    score=score+1;
} else if (favFruit === 'no' || favFruit=='n') {
   
    alert('wrong try to guess again');
 }
  else{
  alert('enter yes or y or no or n');
 }
    }
    fruit ();
 alert('I hope you injoy with this guessing game, thank you ' +  userName);




 
    function guess (){
    for (let i=0; i<4 ; i++){
      let age = prompt('guess my age ,I will help you , you have 4  attempts ');

      if (parseInt(age)===29){
       
        alert('that is correct');
        score=score+1;
        break;
      }
        else if (parseInt(age)<29){
         
          alert('too low');
        }
        else  if (parseInt(age)> 29){
        
          alert('too hight'); 
        }
        else 
      {
        alert('try again');
      }
     
    }alert(' my age is 29');
  }
  guess();


    function arry (){ 
   let arrayA=['action','comedy','adventure','fition'];
   let check = false;
   for (let x=0; x<6; x++){
     let userg = prompt('guess what kind of movies I like ??')
     for (let j=0; j<arrayA.length;j++){
       if (userg===arrayA[j]){
        
         alert('that is correct');
         check=true;
         score=score+1;
         break;  
       }
     }
     if (check == true){break;}
   }
  }
  arry();
 
   alert(`you get ${score} from 7 `);



   