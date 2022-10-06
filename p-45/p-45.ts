var make_car = (manufacture , model , options) => {

    const car_dict = {
        'manufacturer': manufacture.title,
        'model': model.title,
    }
    let obj = { manufacture, model };
 
    Object.entries(options).map((idx) => (obj[idx[0]] = idx[1]));
    console.log(obj)
    return car_dict
}

make_car('subaru', 'outback', {color : 'blue', tow_package : 'yes' });
make_car('honda', 'accord', {year : 1991, color :'white', headlights : 'popup'});



