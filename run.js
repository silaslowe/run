$( document ).ready(function() {
    $("#submit").click(function(){
        let min = $("#minutes").val()
        $("#output").text($(min));
        // console.log("hmmmm");
    })
  });
  
  // $("#submit").click(function(){    
  // pace = ( $("#minutes").val(), $("#seconds").val(), $("#distance".val()) => {
  //   let pacer = "";
  //   paceMin = (min/dist)
  //   paceSec = Math.round(sec/dist)
  //   pacer = `${paceMin}.${paceSec}`
  //   $("#output").text(pacer)
  // } 
  // })