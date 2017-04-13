/* global $ */

$(document).ready(function () {

  // roll all stats, randomizing between 6 and 18;  
  $("#roll-all").click(function(){
    let stats = $(".stat-roll");
    for (let i = 0; i < stats.length; i++){
      let roll = Math.floor((Math.random() * 18) + 3);
      // ensure that stats are between 6 and 18
      while (roll < 6 || roll > 18){
        roll = Math.floor((Math.random() * 18) + 3);
      }
      stats[i].innerHTML = roll;
    }
  });
    


      
 
});

       
