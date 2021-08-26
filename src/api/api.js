const apikey = "bb3e1ce7cf7e8ccce50e78768b2db176d1f1d50b";
const preURL = "https://calendarific.com/api/v2/holidays?api_key=";
let fullURL = "";
const fetchData = async (country, year) => {
  fullURL = preURL + apikey + "&country=" + country + "&year=" + year;
  console.log(fullURL);
  let data = await fetch(fullURL)
    .then((response) => response.json())
    .then((json) => json.response.holidays);
  return data;
};

export default fetchData;
