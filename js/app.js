'use strict';
  let userName = prompt('what is yuor name ??');
       console.log(userName);
  alert(` wellcome ${userName} to my web site let us  start  a game !!!!`);
    
  let score=0;

  let favColor =prompt('Is my favorite color black??');
    favColor= favColor.toLowerCase();

  if (favColor==='yes'|| favColor==='y'){
         //console.log('that is right ' +favColor)
      alert('that is right');
      score=score+1;
  } else if(favColor==='no'|| favColor==='n'){
         //console.log('wrong ' + favColor)
      alert('wrong try to guess again');
  }
     else{
       alert('enter yes or y or no or n');
     }
  
  let favSub =prompt('Is my favorite subject biology??');
    favSub= favSub.toLowerCase();

  if (favSub==='no'|| favSub==='n'){
           //console.log('that is right ' + favSub)
      alert('that is right');
      score=score+1;
  } else if (favSub==='yes'||favSub==='y'){
           //console.log('wrong '+ favSub)
      alert('wrong try to guess again');
  }
  
  else{
    alert('enter yes or y or no or n');
  }

  let favD =prompt('Is my favorite drink juice??');
  favD= favD.toLowerCase();

  if (favD==='no'|| favD==='n'){
        // console.log('that is right ' + favD);
    alert('that is right');
    score=score+1;
 } else if (favD==='yes' || favD=== 'y'){
       // console.log('wrong ' + favD)
    alert('wrong try to guess again');

  }
  
  else{
    alert('enter yes or y or no or n');
  }

 let favGame =prompt('Is my favorite game Clash Royale??');
    favGame= favGame.toLowerCase();

  if (favGame==='no'|| favColor==='n'){
         // console.log('that is right ' + favGame );
      alert('that is right');
      score=score+1;
  } else if (favGame === 'yes'|| favGame==='y'){
       // console.log('wrong '+ favGame);
      alert('wrong try to guess again');
  }
  else{
    alert('enter yes or y or no or n');
  }


  let favFruit =prompt('Is my favorite fruit green apple ??');
  favFruit= favFruit.toLowerCase();

if (favFruit==='yes'|| favFruit==='y'){
    // console.log('that is right ' + favFruit );
    alert('that is right');
    score=score+1;
} else if (favFruit === 'no' || favFruit=='n') {
   // console.log('wrong '+ favFruit)
    alert('wrong try to guess again');
 }
  else{
  alert('enter yes or y or no or n');
 }

 alert('I hope you injoy with this guessing game, thank you ' +  userName);

 
 
    for (let i=0; i<4 ; i++){
      let age = prompt('guess my age ,I will help you , you have 4  attempts ');

      if (parseInt(age)===29){
       // console.log('true');
        alert('that is correct');
        score=score+1;
        break;
      }
        else if (parseInt(age)<29){
          //console.log('false');
          alert('too low');
        }
        else  if (parseInt(age)> 29){
          //console.log('false');
          alert('too hight'); 
        }
        else 
      {
        alert('try again');
      }
     
    }alert(' my age is 29');

   let arrayA=['action','comedy','adventure','fition'];
   let check = false;
   for (let x=0; x<6; x++){
     let userg = prompt('guess what kind of movies I like ??')
     for (let j=0; j<arrayA.length;j++){
       if (userg===arrayA[j]){
         //console.log('true');
         alert('that is correct');
         check=true;
         score=score+1;
         break;  
       }
     }
     if (check == true){break;}
   }

  // console.log( 'your score is : ' + score);
   alert(`you get ${score} from 7 `);