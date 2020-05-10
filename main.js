$(document).ready(function () {
  const paceGetter = (m, s, d) => {
    let minute = Math.floor(m / d);
    let minRe = Math.floor((m % d) * 60);
    let second = Math.floor((parseInt(s) + minRe) / d);
    console.log(second);
    if (second === 0) {
      let pace = `Your mile pace was ${minute}:${second}0!`;
      $('#output').append(pace);
    } else {
      let pace = `Your mile pace was ${minute}:${second}!`;
      $('#output').text(pace);
    }
  };
  $('#submit').click(function () {
    paceGetter($('#minutes').val(), $('#seconds').val(), $('#distance').val());
    event.preventDefault();
  });
});
