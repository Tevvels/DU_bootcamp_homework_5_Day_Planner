


// moment Today, hours 

// a function that loads the page's html before the code triggers.

$(document).ready(function(){


    //moment.js displaying the current date
  $("#currentDay").text(moment().format("dddd,MMM Do"));

  // var that counts to 13
  var countToThirteen = 9; 
  // var that counts to 24 
  var countToTwentyFour = 9;
  // var that holds the value for am and pm 
  var amPm = "am";
  // var holds the hour current hour 
  var theHour = moment().hour();

  // the text box function that creates the rows 
  function textBox(){
    // the needed elements 
    var form = $("<form>");
    var label = $("<label>");
    var textbox = $("<textArea>");
    var save = $("<button>");
    var saveIcon = $("<i>");


    // the attributes and class for those elements 
    form.attr("id", countToTwentyFour);
    form.addClass("time-block row col-12 ");
   
    label.text(countToThirteen + ":00" + amPm)
    label.addClass("hour row col-1")

    textbox.attr("data-time", countToTwentyFour);
    textbox.addClass("description textarea col-10");

    save.addClass( "col-1 saveBtn i ")
    // the event listener for the rows save button 
    save.on("click",function(){
      // to prevent the browsers defualt actions 
        event.preventDefault();
      // collecting the attribute for the id of the rows parent         
     var time = $(this).parent().attr('id');
    //  this var saves the value of the forms sibling named with a class of description's value 
     var value = $(this).siblings('.description').val();
        // saves the froms value and id 
        localStorage.setItem(time,value);
    });
    // addes a class to save icon for the little floppy disk image 
    saveIcon.addClass("fas fa-save");

    // appending the elements to the form 
    $(form).append(label)
    $(form).append(textbox)
    $(form).append(save)
    // adding the icon the save button 
    $(save).append(saveIcon)

    $('.container').append(form);

    // starts the counter for both of these values 
    countToThirteen++;
    countToTwentyFour++;

    // to change the value of count to thirteen dependin gon the time 
    if(countToThirteen == 13){
        countToThirteen = 1;
    }
    if(countToThirteen == 12){
        amPm = "pm";
        
    }
    // resets teh counter to 0 once a day
    if(countToTwentyFour == 24){
        countToTwentyFour = 0
    }
    if(theHour >= 13){
        c = 12;
    } else {
        c = 0;
    }
    


  }

  //  a for loop to be able to make the row 9 times 
  for(i=0;i< 9;i++){
    textBox();
    
}
//  a for each loop tha added a function to the rows 
$('.time-block').each(function timeColor(){
    // graps the id for this id 
    var textboxid = $(this).attr("id")

    // grapping the element by the data type data-time and stores the value of that element 
    $('[data-time="'+ textboxid + '"]').val(localStorage.getItem(textboxid));

    // the if else statement to change the color of the
    // background depending on the time and its relation with the elements id 
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
