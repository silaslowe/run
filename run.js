$(document).ready(function () {
  const paceGetter = (m, s, d) => {
    let minute = Math.floor(m / d);
    console.log(minute);
    let minRe = Math.floor((m % d) * 60);
    console.log(minRe);
    let second = Math.floor((parseInt(s) + minRe) / d);
    console.log(second);
    let pace = `Your mile pace was ${minute}.${second}!`;
    $('#output').append(pace);
  };
  $('#submit').click(function () {
    paceGetter($('#minutes').val(), $('#seconds').val(), $('#distance').val());
    event.preventDefault();
  });
});

// $(document).ready(function () {
//   const paceGetter = (min, sec, dist) => {
//     let minute = Math.floor(min / dist);
//     console.log(minute);
//     let minRe = Math.floor((min % dist) * 60);
//     console.log(minRe);
//     let second = Math.floor((parceInt(sec) + minRe) / dist);
//     console.log(second);
//     let pace = `Your pace was a ${minute}.${second} mile!`;
//     return pace;
//   };
//   $('#submit').click(function () {
//     paceGetter($('#minutes').val(), $('#seconds').val(), $('#distance').val());
//     console.log(pace);
//     // $('#output').text(pace);
//     // // event.preventDefault();
//   });
// });

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
