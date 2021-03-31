/*  Weather Widget JavaScript File     */
/*  For Stackup Digital                */
/*  © 2021 Ian Curtis                  */
/*  Author: Ian Curtis                 */

/*  State 1 */
window.onload = function() {
    let weatherWidget = document.getElementById("weather");
    weatherWidget.innerHTML = "";
    let state1 = "<div id='searching'><div class='heading-1'><h1>What&#146;s&nbsp;the&nbsp;Weather&#063;</h1></div><div class='heading-2'><h2><a href='holidayweather.com'>holidayweather.com</a></h2></div><hr><div class='heading-3'><h2>Enter&nbsp;City&nbsp;/&nbsp;Town</h2></div><div class='search-component'><input id='place' type='text' value='' placeholder='e.g. London' /><button id='search-button' onclick='getResults();' type='button'>Search</button></div></div>";
    let state2 = "<div id='result' class='result'><span class='result-title'>Select a Result&#058;</span><span id='result-buttons' class='result-buttons'></span></div>";
    let state3 = "<div id='weather-report' class='weather-report'></div>";
    weatherWidget.innerHTML += state1 + state2 + state3;
};

/*  Get JSON File From API  */
function getInfoFromAPI (url, callback) {
    var obj;
    fetch(url).then(res => res.json()).then(data => obj = data).then(() => callback(obj))
}

/*  Format Ordinal Date Number  */
function ordinal(n) {
    var s = ["th", "st", "nd", "rd"];
    var v = n%100;
    return n + (s[(v-20)%10] || s[v] || s[0]);
}

/*  Get Location Results From API   */
function getResults() {
    document.getElementById("result").style.visibility = "hidden";
    document.getElementById("weather-report").style.visibility = "hidden";
    let query = document.getElementById("place").value.slice(0, 3);
    const fetchURL1 = "https://xenodochial-edison-a2f234.netlify.app/.netlify/functions/search?query=";
    let fetchQuery = fetchURL1+query;

    getInfoFromAPI(fetchQuery, buildPlaceData);
    
    /*  Build State 2 - Results DIV   */
    function buildPlaceData(arrayOfObjects1) {
        let placeResults = "";
        if (arrayOfObjects1.length == 0) {
        placeResults += "<p class='result-not-found'>Sorry, place not found. Please try again.</p>";
        } else {
            arrayOfObjects1.forEach( (x) => {
                placeResults += "<button class='results-button' value='" + x.woeid + "' onclick='getWeather(this.value);'>" + x.title + "</button>";
            })
        }
    displayResults = document.getElementById("result-buttons");
    displayResults.innerHTML = "";
    displayResults.innerHTML += placeResults;
    document.getElementById("result").style.visibility = "visible";
    }
}

    /*  Get Weather Forecast Results For Selected Location From API */  
    function getWeather(chosenPlace) {
const fetchURL2 = "https://xenodochial-edison-a2f234.netlify.app/.netlify/functions/get-location?id=";
let fetchQuery2 = fetchURL2 + chosenPlace;

    getInfoFromAPI(fetchQuery2, buildWeatherData);
    
    /*  Build State 3 - Weather DIV   */
    function buildWeatherData (arrayOfObjects2) {
        let weatherResults = "";
        let weatherInformation = arrayOfObjects2.consolidated_weather.slice(0, 5);
        if (weatherInformation.length == 0) {
            placeResults += "Sorry, results not found. Please select another option.";
            } else {
                weatherInformation.forEach( (y) => {
                    let dateCode = new Date(y.applicable_date);
                    let dayString = dateCode.toLocaleDateString('default', {weekday: 'long' });
                    let dayNumber = ordinal(dateCode.getDate());
                    let monthString = dateCode.toLocaleDateString('default', {month: 'long' });
                    let weatherImage = y.weather_state_abbr;
                    let weatherImageFull = y.weather_state_name;
                    let currentTemp = y.the_temp.toFixed(1);
                    let maxTemp = y.max_temp.toFixed(1);
                    weatherResults += "<div class='weather-daily'><div class='weather-day'>" + dayString + "</div><div class='weather-date'>" + dayNumber + "&nbsp;" + monthString + "</div><div class='weather-image'><img src='https://www.metaweather.com/static/img/weather/" + weatherImage + ".svg' alt='" + weatherImageFull + "' title='" + weatherImageFull + "' /></div><div class='weather-current-temp'>Current&nbsp;Temp&#058;&nbsp;" + currentTemp + "&#176;C</div><div class='weather-max-temp'>Max Temp&#058;&nbsp;<strong>" + maxTemp + "&#176;C</strong></div></div>";
                });
            }
        displayWeather = document.getElementById('weather-report');
        displayWeather.innerHTML = "";
        displayWeather.innerHTML += weatherResults;
        displayWeather.style.visibility = "visible";
    }
}

/*  END OF FILE */