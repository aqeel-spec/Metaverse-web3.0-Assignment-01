var describe_city: any  = ( city: string = 'Lahore' , country:string = 'Pakistan' ) => {
    const message: string = `${city} is in ${country}`
    console.log(message) 
}
describe_city()
describe_city('Karachi')
describe_city('canada','England')


//////////////     Exercise 39    ///////////////
console.log(`\n\n\t ********** Exercise 39 **************\n`)
const city_country = (city1: string , country1: string) => {
    return (`"${city1} , ${country1}"`)
}
const cityToVisit1: string = city_country('Karachi', 'Pakistan');
const cityToVisit2: string = city_country('Multan', 'Pakistan');
const cityToVisit3: string = city_country('Canada', 'England');

console.log(cityToVisit1);
console.log(cityToVisit2);
console.log(cityToVisit3);


