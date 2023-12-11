$(document).ready(() => {
    function updateTime() {
      var now = new Date();
      var hour = now.getHours();
      var minute = now.getMinutes();
      var second = now.getSeconds();

      $(".hour h2").text(hour <= 9 ? `0${hour}` : hour);
      $(".minute h2").text(minute <= 9 ? `0${minute}` : minute);
      $(".second h2").text(second <= 9 ? `0${second}` : second);
      $(".period h2").text(hour < 12 ? "AM" : "PM");
    }

    setInterval(updateTime, 1000);
    updateTime();
  });