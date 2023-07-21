setInterval(function () {
  let leedsElement = document.querySelector("#leeds");
  let leedsDateElement = leedsElement.querySelector(".date");
  let leedsTimeElement = leedsElement.querySelector(".time");
  let leedsTime = moment().tz("Europe/London");

  leedsDateElement.innerHTML = leedsTime.format("ddd Do MMMM yyyy");
  leedsTimeElement.innerHTML = leedsTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let veniceElement = document.querySelector("#venice");
  let veniceDateElement = veniceElement.querySelector(".date");
  let veniceTimeElement = veniceElement.querySelector(".time");
  let veniceTime = moment().tz("Europe/Rome");

  veniceDateElement.innerHTML = veniceTime.format("ddd Do MMMM yyyy");
  veniceTimeElement.innerHTML = veniceTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkTime.format("ddd Do MMMM yyyy");
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
    <div class="date">${cityTime.format("ddd Do MMMM YYYY")}</div>
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
