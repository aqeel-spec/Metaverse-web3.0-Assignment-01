var describe_city = function (city, country) {
    if (city === void 0) { city = 'Lahore'; }
    if (country === void 0) { country = 'Pakistan'; }
    var message = "".concat(city, " is in ").concat(country);
    console.log(message);
};
describe_city();
describe_city('Karachi');
describe_city('canada', 'England');
//////////////     Exercise 39    ///////////////
console.log("\n\n\t ********** Exercise 39 **************\n");
var city_country = function (city1, country1) {
    return ("\"".concat(city1, " , ").concat(country1, "\""));
};
var cityToVisit1 = city_country('Karachi', 'Pakistan');
var cityToVisit2 = city_country('Multan', 'Pakistan');
var cityToVisit3 = city_country('Canada', 'England');
console.log(cityToVisit1);
console.log(cityToVisit2);
console.log(cityToVisit3);
