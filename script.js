


// moment Today, hours 

// a function that loads the page's html before the code triggers.

$(document).ready(function(){

  $("#currentDay").text( moment().format("[Today is] dddd"));

  var a = 9;
  var b = 16;
  var amPm = "am";
  var theHour =  12 //moment().hour();

  console.log(theHour);
  function textBox(){
    var form = $("<form>");
    var label = $("<label>");
    var textbox = $("<textArea>");
    var save = $("<button>");


    
    form.addClass("time-block row description col-12 ")
    textbox.attr("data-time", a);
    form.attr("id", a);
    
    label.text(a + ":00" + amPm)
    label.addClass("hour col-2")
    textbox.addClass(" textarea  col-8");

    save.addClass( "col-2 saveBtn i ")
    save.text("💾")

    $(form).append(label)
    $(form).append(textbox)
    $(form).append(save)
    $('.container').append(form);

    a++;
    b++;
    if(a == 13){
        a = 1;
    }
    if(a == 12){
        amPm = "pm";
        
    }

    if(b == 24){
        b = 0
    }
    if(theHour >= 13){
        c = 12;
    } else {
        c = 0;
    }
    
 
    timeColor()

  
        // console.log(this);
//     var textboxes = $('[data-time="' + (theHour - c) +'"]');;
//     var textfutureboxes = $('[data-time="' + (theHour - c + 1) +'"]');;
//     textboxes.addClass("present");
//     textfutureboxes.addClass("future");
  }

  function timeColor(){
  var textboxid = $(this).attr("id")
  console.log(textboxid);
  if(textboxid < theHour){
    $(this).removeClass("present future")
    $(this).addClass("past")
  }else if(textboxid === theHour){
    $(this).removeClass("past future")
    $(this).addClass("present")
    } else {
        $(this).removeClass("past present");
        $(this).addClass("future")
    }
  

  }


  for(i=0;i< 9;i++){
      textBox();
      
  }

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