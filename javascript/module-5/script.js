// let a = {};
// a = { socks : 2,
//     shirt : 10,
//     tshirt : 20,
//     add : (function (a,b) {
//         return a + b
//     })
// };

// способи достучатися до об'єкта, значення
//
// a.socks = 2;
// a['shirt'] = 10;
// a.add (5,10) = 15;

let dog = {
  name: 'jack',
  legs: 5,
  color: 'black'
};
dog.age = 10;
console.table(dog);

dog.age = 20;

console.log(dog);
Object.freeze(dog);
console.log(Object.isFrozen(dog));

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// let names = [];

// for (let i = 0; i < inventors.length; i ++){
//     names.push(inventors[i].first);
// }

// console.log(names);

// let names = inventors.map(function (item) {
//     return item.year;
// })
//
// console.log(names);


// let age = inventors.filter(function(item){
//     return item['year'] > 1500 && item.year <1600;
// });
//
// console.log(age);

// console.log(age.length);
//
// let sort = inventors.sort(function (item1, item2) {
//    return item1.first > item2.first ? 1: -1;
// });
//
// console.log(sort);

// let one = inventors.map(function (item) {
//     return item + year;
// });
// console.log(one);
//
//
// let years = inventors.reduce((acum, next)=> acum + next);
// console.log(years);

//
// let crypto = [
//     {
//         "id": "bitcoin",
//         "name": "Bitcoin",
//         "symbol": "BTC",
//         "rank": "1",
//         "price_usd": "10033.7",
//         "price_btc": "1.0",
//         "24h_volume_usd": "9678670000.0",
//         "market_cap_usd": "168939784887",
//         "available_supply": "16837237.0",
//         "total_supply": "16837237.0",
//         "max_supply": "21000000.0",
//         "percent_change_1h": "-1.23",
//         "percent_change_24h": "-4.99",
//         "percent_change_7d": "-10.61",
//         "last_updated": "1517412569",
//         "price_eur": "8063.1114211",
//         "24h_volume_eur": "7777808248.01",
//         "market_cap_eur": "135760517954"
//     },
//     {
//         "id": "ethereum",
//         "name": "Ethereum",
//         "symbol": "ETH",
//         "rank": "2",
//         "price_usd": "1104.04",
//         "price_btc": "0.110798",
//         "24h_volume_usd": "4494890000.0",
//         "market_cap_usd": "107451537175",
//         "available_supply": "97325765.0",
//         "total_supply": "97325765.0",
//         "max_supply": null,
//         "percent_change_1h": "-0.68",
//         "percent_change_24h": "-2.67",
//         "percent_change_7d": "7.35",
//         "last_updated": "1517412553",
//         "price_eur": "887.20985612",
//         "24h_volume_eur": "3612107088.67",
//         "market_cap_eur": "86348377629.0"
//     },
//     {
//         "id": "ripple",
//         "name": "Ripple",
//         "symbol": "XRP",
//         "rank": "3",
//         "price_usd": "1.12924",
//         "price_btc": "0.00011333",
//         "24h_volume_usd": "1554730000.0",
//         "market_cap_usd": "43745789628.0",
//         "available_supply": "38739142811.0",
//         "total_supply": "99993093880.0",
//         "max_supply": "100000000000",
//         "percent_change_1h": "-0.89",
//         "percent_change_24h": "-7.66",
//         "percent_change_7d": "-17.46",
//         "last_updated": "1517412541",
//         "price_eur": "0.9074606517",
//         "24h_volume_eur": "1249385692.19",
//         "market_cap_eur": "35154247782.0"
//     },
//     {
//         "id": "bitcoin-cash",
//         "name": "Bitcoin Cash",
//         "symbol": "BCH",
//         "rank": "4",
//         "price_usd": "1487.83",
//         "price_btc": "0.149315",
//         "24h_volume_usd": "842371000.0",
//         "market_cap_usd": "25206518294.0",
//         "available_supply": "16941800.0",
//         "total_supply": "16941800.0",
//         "max_supply": "21000000.0",
//         "percent_change_1h": "-0.42",
//         "percent_change_24h": "-5.36",
//         "percent_change_7d": "-9.24",
//         "last_updated": "1517412557",
//         "price_eur": "1195.62465149",
//         "24h_volume_eur": "676931862.713",
//         "market_cap_eur": "20256033721.0"
//     },
//     {
//         "id": "cardano",
//         "name": "Cardano",
//         "symbol": "ADA",
//         "rank": "5",
//         "price_usd": "0.505419",
//         "price_btc": "0.00005072",
//         "24h_volume_usd": "597154000.0",
//         "market_cap_usd": "13104034064.0",
//         "available_supply": "25927070538.0",
//         "total_supply": "31112483745.0",
//         "max_supply": "45000000000.0",
//         "percent_change_1h": "-1.23",
//         "percent_change_24h": "-10.47",
//         "percent_change_7d": "-16.64",
//         "last_updated": "1517412559",
//         "price_eur": "0.4061562247",
//         "24h_volume_eur": "479874745.862",
//         "market_cap_eur": "10530441086.0"
//     },
//     {
//         "id": "stellar",
//         "name": "Stellar",
//         "symbol": "XLM",
//         "rank": "6",
//         "price_usd": "0.53434",
//         "price_btc": "0.00005363",
//         "24h_volume_usd": "327765000.0",
//         "market_cap_usd": "9547965379.0",
//         "available_supply": "17868707899.0",
//         "total_supply": "103649583897",
//         "max_supply": null,
//         "percent_change_1h": "-1.42",
//         "percent_change_24h": "2.74",
//         "percent_change_7d": "-4.26",
//         "last_updated": "1517412544",
//         "price_eur": "0.429397227",
//         "24h_volume_eur": "263392937.295",
//         "market_cap_eur": "7672773622.0"
//     },
//     {
//         "id": "neo",
//         "name": "NEO",
//         "symbol": "NEO",
//         "rank": "7",
//         "price_usd": "142.445",
//         "price_btc": "0.0142955",
//         "24h_volume_usd": "494648000.0",
//         "market_cap_usd": "9258925000.0",
//         "available_supply": "65000000.0",
//         "total_supply": "100000000.0",
//         "max_supply": null,
//         "percent_change_1h": "-1.13",
//         "percent_change_24h": "-7.09",
//         "percent_change_7d": "5.61",
//         "last_updated": "1517412550",
//         "price_eur": "114.469229335",
//         "24h_volume_eur": "397500616.744",
//         "market_cap_eur": "7440499907.0"
//     },
//     {
//         "id": "litecoin",
//         "name": "Litecoin",
//         "symbol": "LTC",
//         "rank": "8",
//         "price_usd": "161.029",
//         "price_btc": "0.0161605",
//         "24h_volume_usd": "488125000.0",
//         "market_cap_usd": "8857578590.0",
//         "available_supply": "55006108.0",
//         "total_supply": "55006108.0",
//         "max_supply": "84000000.0",
//         "percent_change_1h": "-1.23",
//         "percent_change_24h": "-6.03",
//         "percent_change_7d": "-10.92",
//         "last_updated": "1517412541",
//         "price_eur": "129.403387487",
//         "24h_volume_eur": "392258714.375",
//         "market_cap_eur": "7117976727.0"
//     },
//     {
//         "id": "eos",
//         "name": "EOS",
//         "symbol": "EOS",
//         "rank": "9",
//         "price_usd": "11.6079",
//         "price_btc": "0.00116494",
//         "24h_volume_usd": "1309950000.0",
//         "market_cap_usd": "7424517298.0",
//         "available_supply": "639608999.0",
//         "total_supply": "900000000.0",
//         "max_supply": "1000000000.0",
//         "percent_change_1h": "-1.54",
//         "percent_change_24h": "-9.13",
//         "percent_change_7d": "-12.95",
//         "last_updated": "1517412556",
//         "price_eur": "9.3281432637",
//         "24h_volume_eur": "1052679749.85",
//         "market_cap_eur": "5966364375.0"
//     },
//     {
//         "id": "nem",
//         "name": "NEM",
//         "symbol": "XEM",
//         "rank": "10",
//         "price_usd": "0.752723",
//         "price_btc": "0.00007554",
//         "24h_volume_usd": "56599700.0",
//         "market_cap_usd": "6774506999.0",
//         "available_supply": "8999999999.0",
//         "total_supply": "8999999999.0",
//         "max_supply": null,
//         "percent_change_1h": "-1.69",
//         "percent_change_24h": "-10.66",
//         "percent_change_7d": "-21.21",
//         "last_updated": "1517412545",
//         "price_eur": "0.604890461",
//         "24h_volume_eur": "45483688.7191",
//         "market_cap_eur": "5444014148.0"
//     }
// ];
// // let list = [];
// // console.log('123', list = crypto.sort((item1, item2) => +item1["price_usd"] < +item2["price_usd"]).map(item => item.name));
// // console.log(crypto);
//
// let name = [];
// let price = [];
//
// // name = crypto.map(function (item) {
// //     return item.name
// // });
// // console.log(name);
//
// price = crypto.map(function (item) {
//     return item.price_usd
// });
// console.log(price);
//
// name = crypto.map(item => item.name);
// console.log(name);
//
// var ctx = document.getElementById("myChart").getContext("2d");
//
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: name,
//         datasets: [{
//             label: '# of Votes',
//             data: price,
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });
//
//
//
//
//
//
//
//
//
//
//
// let dura = {
//     "latitude"
//         :
//         42.3601,
//     "longitude"
//         :
//         -71.0589,
//     "timezone"
//         :
//         "America/New_York",
//     "currently"
//         :
//         {
//             "time"
//                 :
//                 1509993277,
//             "summary"
//                 :
//                 "Drizzle",
//             "icon"
//                 :
//                 "rain",
//             "nearestStormDistance"
//                 :
//                 0,
//             "precipIntensity"
//                 :
//                 0.0089,
//             "precipIntensityError"
//                 :
//                 0.0046,
//             "precipProbability"
//                 :
//                 0.9,
//             "precipType"
//                 :
//                 "rain",
//             "temperature"
//                 :
//                 66.1,
//             "apparentTemperature"
//                 :
//                 66.31,
//             "dewPoint"
//                 :
//                 60.77,
//             "humidity"
//                 :
//                 0.83,
//             "pressure"
//                 :
//                 1010.34,
//             "windSpeed"
//                 :
//                 5.59,
//             "windGust"
//                 :
//                 12.03,
//             "windBearing"
//                 :
//                 246,
//             "cloudCover"
//                 :
//                 0.7,
//             "uvIndex"
//                 :
//                 1,
//             "visibility"
//                 :
//                 9.84,
//             "ozone"
//                 :
//                 267.44
//         }
//     ,
//     "minutely"
//         :
//         {
//             "summary"
//                 :
//                 "Light rain stopping in 13 min., starting again 30 min. later.",
//             "icon"
//                 :
//                 "rain",
//             "data"
//                 :
//                 [{
//                     "time": 1509993240,
//                     "precipIntensity": 0.007,
//                     "precipIntensityError": 0.004,
//                     "precipProbability": 0.84,
//                     "precipType": "rain"
//                 },
//                 ]
//         }
//     ,
//     "hourly"
//         :
//         {
//             "summary"
//                 :
//                 "Rain starting later this afternoon, continuing until this evening.",
//             "icon"
//                 :
//                 "rain",
//             "data"
//                 :
//                 [{
//                     "time": 1509991200,
//                     "summary": "Mostly Cloudy",
//                     "icon": "partly-cloudy-day",
//                     "precipIntensity": 0.0007,
//                     "precipProbability": 0.1,
//                     "precipType": "rain",
//                     "temperature": 65.76,
//                     "apparentTemperature": 66.01,
//                     "dewPoint": 60.99,
//                     "humidity": 0.85,
//                     "pressure": 1010.57,
//                     "windSpeed": 4.23,
//                     "windGust": 9.52,
//                     "windBearing": 230,
//                     "cloudCover": 0.62,
//                     "uvIndex": 1,
//                     "visibility": 9.32,
//                     "ozone": 268.95
//                 },
//                 ]
//         }
//     ,
//     "daily"
//         :
//         {
//             "summary"
//                 :
//                 "Mixed precipitation throughout the week, with temperatures falling to 39°F on Saturday.",
//             "icon"
//                 :
//                 "rain",
//             "data"
//                 :
//                 [{
//                     "time": 1509944400,
//                     "summary": "Rain starting in the afternoon, continuing until evening.",
//                     "icon": "rain",
//                     "sunriseTime": 1509967519,
//                     "sunsetTime": 1510003982,
//                     "moonPhase": 0.59,
//                     "precipIntensity": 0.0088,
//                     "precipIntensityMax": 0.0725,
//                     "precipIntensityMaxTime": 1510002000,
//                     "precipProbability": 0.73,
//                     "precipType": "rain",
//                     "temperatureHigh": 66.35,
//                     "temperatureHighTime": 1509994800,
//                     "temperatureLow": 41.28,
//                     "temperatureLowTime": 1510056000,
//                     "apparentTemperatureHigh": 66.53,
//                     "apparentTemperatureHighTime": 1509994800,
//                     "apparentTemperatureLow": 35.74,
//                     "apparentTemperatureLowTime": 1510056000,
//                     "dewPoint": 57.66,
//                     "humidity": 0.86,
//                     "pressure": 1012.93,
//                     "windSpeed": 3.22,
//                     "windGust": 26.32,
//                     "windGustTime": 1510023600,
//                     "windBearing": 270,
//                     "cloudCover": 0.8,
//                     "uvIndex": 2,
//                     "uvIndexTime": 1509987600,
//                     "visibility": 10,
//                     "ozone": 269.45,
//                     "temperatureMin": 52.08,
//                     "temperatureMinTime": 1510027200,
//                     "temperatureMax": 66.35,
//                     "temperatureMaxTime": 1509994800,
//                     "apparentTemperatureMin": 52.08,
//                     "apparentTemperatureMinTime": 1510027200,
//                     "apparentTemperatureMax": 66.53,
//                     "apparentTemperatureMaxTime": 1509994800
//                 },
//                 ]
//         }
//     ,
//     "alerts"
//         :
//         [
//             {
//                 "title": "Flood Watch for Mason, WA",
//                 "time": 1509993360,
//                 "expires": 1510036680,
//                 "description": "...FLOOD WATCH REMAINS IN EFFECT THROUGH LATE MONDAY NIGHT...\nTHE FLOOD WATCH CONTINUES FOR\n* A PORTION OF NORTHWEST WASHINGTON...INCLUDING THE FOLLOWING\nCOUNTY...MASON.\n* THROUGH LATE FRIDAY NIGHT\n* A STRONG WARM FRONT WILL BRING HEAVY RAIN TO THE OLYMPICS\nTONIGHT THROUGH THURSDAY NIGHT. THE HEAVY RAIN WILL PUSH THE\nSKOKOMISH RIVER ABOVE FLOOD STAGE TODAY...AND MAJOR FLOODING IS\nPOSSIBLE.\n* A FLOOD WARNING IS IN EFFECT FOR THE SKOKOMISH RIVER. THE FLOOD\nWATCH REMAINS IN EFFECT FOR MASON COUNTY FOR THE POSSIBILITY OF\nAREAL FLOODING ASSOCIATED WITH A MAJOR FLOOD.\n",
//                 "uri": "http://alerts.weather.gov/cap/wwacapget.php?x=WA1255E4DB8494.FloodWatch.1255E4DCE35CWA.SEWFFASEW.38e78ec64613478bb70fc6ed9c87f6e6"
//             },
//         ],
//
// };
//
//
// let str = dura.alerts[0].description.slice(0,4) + dura.alerts[0].description.toLocaleLowerCase().slice(4);
// console.log(str);
//
// let num = (function(a, b, c, d){
//    return (a - b - c - d );
// });
// num (10, 2, 3, 2);
//
// console.log(num);

let quotes = [
    {text: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"},
    { text: "I am so clever that sometimes I don't understand a single word of what I am saying.", author: "Oscar Wilde"},
    {text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",author: "Albert Einstein"},
    {text: "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.",author: "Albert Einstein"},
    {text: "It is our choices, Harry, that show what we truly are, far more than our abilities.",author: "J.K. Rowling, Harry Potter and the Chamber of Secrets"},
    {text: "All men who have turned out worth anything have had the chief hand in their own education.",author: "Walter Scott"},
    {text: "Trust yourself. You know more than you think you do.",author: "Benjamin Spock"},
    {text: "No one can make you feel inferior without your consent.",author: "Eleanor Roosevelt, This is My Story"},
    {text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",author: "Ralph Waldo Emerson"},
    {text: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",author: "H. Jackson Brown Jr., P.S. I Love You"}
];

let a = Math.floor(Math.random()*10);
console.log(`${quotes[a].text} \nАвтор ${quotes[a].author}`);








