$(document).ready(function () {
  $('#submit').click(function () {
    let min = $('#minutes').val();
    let sec = $('#seconds').val();
    let dist = $('#distance').val();
    div = (min, sec, dist) => {
      let minute = Math.floor(min / dist);
      let minRe = Math.floor((min % dist) * 60);
      let second = Math.floor((sec + minRe) / dist);
      let pace = `${minute}.${second}`;
      alert(pace);
    };
    event.preventDefault();
  });
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

//   div = (min, sec, dist) => {
//     let minute = Math.floor(min/dist);
//     let minRe = Math.floor((min % dist)*60);
//     let second = Math.floor((sec + minRe)/dist);
//     let pace = `${minute}.${second}`
//     alert(pace)
//     }
// $("#submit").click(function(){
//     let min = $("#minutes").val();
//     let sec = $("#seconds").val();
//     let dist = $("#distance").val();
//     $("#output").text(min);
//     alert(min);
//     event.preventDefault()
// });
// });
// $("#submit").click(function(){
//     let min = $("#minutes").val();
//     let sec = $("#seconds").val();
//     let dist = $("#distance").val();
//     div = (min, sec, dist) => {
//         let minute = Math.floor(min/dist);
//         let minRe = Math.floor((min % dist)*60);
//         let second = Math.floor((sec + minRe)/dist);
//         let pace = `${minute}.${second}`
//         alert(pace)
//         }
//     event.preventDefault()
