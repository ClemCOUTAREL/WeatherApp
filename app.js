const app = function () {
    //menu
    const sideIcon = document.querySelector("header img")
    const sideNav = document.querySelector(".side-menu")

    //city
    const cityInput = document.querySelector("#city-input")
    let cityName = cityInput.value
    const countryInput= document.querySelector("#country-input")
    let countryName = countryInput.value
    const callButton = document.querySelector("#city-submit")
    let location = `${cityName},${countryName}`

  let weatherDescription = document.querySelector("#weather-description")
  let temperatureSection = document.querySelector("#temperature-section")

    const apiKey="83c403b29e079b0552d135d8d5cbfd4c"
  

    //Navbar display management
    const listen = sideIcon.addEventListener("click", () => {
        if (sideNav.classList.contains("hidden")){
          revealSidebar()
        } else {
            hideSidebar()
        }
    })

    function revealSidebar() {
    sideNav.classList.add("revealed");
    sideNav.classList.remove("hidden");
    }
    function hideSidebar() {
        sideNav.classList.add("hidden");
        sideNav.classList.remove("revealed");
    }

// API call on page loading
    
    function callAPI() {
      const call = fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`,
        {
          method: "POST",
        },
        {
          body: JSON.stringify(),
        }
      )
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          let description = result.weather[0].description;
          let temperature = Math.floor(result.main.temp - 273.15) + "°C";

          capitalize(description);

          function capitalize(string) {
            if (typeof s !== "string") {
              string = string.charAt(0).toUpperCase() + string.slice(1);
            }
          }

          weatherDescription.textContent = description;
          temperatureSection.textContent = temperature;
            
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

//callAPI()

// API Call on city submit

    callButton.addEventListener("click", e => {
        e.preventDefault()
      location = `${cityName},${countryName}`;
      console.log(location)
        callAPI()
        hideSidebar()
  })    
}

app();

