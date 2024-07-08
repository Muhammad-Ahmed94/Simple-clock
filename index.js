function clock() {
  const date = new Date(); //* date object

  let hours = date.getHours(); //Getting hours
  hours = hours % 12; //* formatting the hours
  hours = hours < 10 ? "0" + hours : hours;

  let md = hours > 12 ? "PM" : "AM";

  let minutes = date.getMinutes(); //* getting and formatting minutes
  minutes = minutes < 10 ? "0" + minutes : minutes;

  let seconds = date.getSeconds(); //* getting and formatting seconds
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = `${hours}:${minutes}:${seconds} ${md}`; //* Final time string
  document.querySelector(".clock").textContent = time;
}

clock();
setInterval(clock, 1000);
console.log(clock);
