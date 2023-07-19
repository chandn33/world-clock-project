setInterval(function () {
  let manchesterElement = document.querySelector("#manchester");
  let manchesterDateElement = manchesterElement.querySelector(".date");
  let manchesterTimeElement = manchesterElement.querySelector(".time");
  let manchesterTime = moment().tz("Europe/London");

  manchesterDateElement.innerHTML = manchesterTime.format("dddd Do MMMM YYYY");
  manchesterTimeElement.innerHTML = manchesterTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let veniceElement = document.querySelector("#venice");
  let veniceDateElement = veniceElement.querySelector(".date");
  let veniceTimeElement = veniceElement.querySelector(".time");
  let veniceTime = moment().tz("Europe/Rome");

  veniceDateElement.innerHTML = veniceTime.format("dddd Do MMMM YYYY");
  veniceTimeElement.innerHTML = veniceTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("dddd Do MMMM YYYY");
  newYorkTimeElement.innerHTML = newYorkTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  function updateCity(event) {
    let cityTimeZone = event.target.value;
if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
}
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `

    <div class="city">
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("dddd Do MMMM YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>
    <br>
<a href ="/">View cities</>
    `;
  }

  let citiesSelectElement = document.querySelector("#city");

  citiesSelectElement.addEventListener("change", updateCity);
}, 1000);