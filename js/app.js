'use strict';
  let userName = prompt('what is yuor name ??');
       console.log(userName);
  alert(` wellcome ${userName} to my web site let us  start  a game !!!!`);
    
  

  let favColor =prompt('Is my favorite color black??');
    favColor= favColor.toLowerCase();

  if (favColor==='yes'|| favColor==='y'){
         console.log('that is right ' +favColor)
      alert('that is right');
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
} else if (favFruit === 'no' || favFruit=='n') {
   // console.log('wrong '+ favFruit)
    alert('wrong try to guess again');
 }
  else{
  alert('enter yes or y or no or n');
 }

 alert('I hope you injoy with this guessing game, thank you ' +  userName);