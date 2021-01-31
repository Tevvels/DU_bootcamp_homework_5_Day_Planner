


// moment Today, hours 

// a function that loads the page's html before the code triggers.

$(document).ready(function(){


    //moment.js displaying the current date
  $("#currentDay").text(moment().format("dddd,MMM Do"));

//   //needed varibles
//   two different variables holding the value of 9. one to changes back to one once it hits 13
//   the other is to count to 24 
  var countToThirteen = 9; 
  var countToTwentyFour = 9;
  var amPm = "am";
  var theHour = moment().hour();

  function textBox(){
    var form = $("<form>");
    var label = $("<label>");
    var textbox = $("<textArea>");
    var save = $("<button>");
    var saveIcon = $("<i>");


    form.attr("id", countToTwentyFour);
    form.addClass("time-block row col-12 ");
   
    label.text(countToThirteen + ":00" + amPm)
    label.addClass("hour row col-1")

    textbox.attr("data-time", countToTwentyFour);
    textbox.addClass("description textarea col-10");

    save.addClass( "col-1 saveBtn i ")
    save.on("click",function(){
        event.preventDefault();
        $(this).siblings('.description').val()
     var time = $(this).parent().attr('id');
     var value = $(this).siblings('.description').val();
        localStorage.setItem(time,value);
    });
    saveIcon.addClass("fas fa-save");


    $(form).append(label)
    $(form).append(textbox)
    $(form).append(save)
    $(save).append(saveIcon)

    $('.container').append(form);

    countToThirteen++;
    countToTwentyFour++;
    if(countToThirteen == 13){
        countToThirteen = 1;
    }
    if(countToThirteen == 12){
        amPm = "pm";
        
    }

    if(countToTwentyFour == 24){
        countToTwentyFour = 0
    }
    if(theHour >= 13){
        c = 12;
    } else {
        c = 0;
    }
    


  }


  for(i=0;i< 9;i++){
    textBox();
    
}
$('.time-block').each(function timeColor(){
    var textboxid = $(this).attr("id")
    console.log('[data-time="'+ textboxid + '"]');

    $('[data-time="'+ textboxid + '"]').val(localStorage.getItem(textboxid));

    if(textboxid < theHour){
      $(this).removeClass("present future")
      $(this).addClass("past")
    }else if(textboxid == theHour){
      $(this).removeClass("past future")
      $(this).addClass("present")
    } else {
      $(this).removeClass("past present")
      $(this).addClass("future")
    }
    

    });

});
    // start today's date
        // i can see the label date being something that is staticish can just an attribute that applies come business day. 

    
    // build 9 time blocks

        //blocks should have    

        // a label thats the time 
        // a textbox to store what we are doing 
        // a submit button or save button to keep the text there 
            // localstorage 
            // does this save on date specific times so its cleared come the next day? we can shift you dates to save?


            // maybe in n place holder hint hint????
            // or text content be serious 
    


// }

// var textboxid = $(this).attr(id)


/*$(this).addRemove*/
// $(this).removeClass 