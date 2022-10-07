var make_car = function (manufacture, model, options) {
    var car_dict = {
        'manufacturer': manufacture.title,
        'model': model.title
    };
    var obj = { manufacture: manufacture, model: model };
    Object.entries(options).map(function (idx) { return (obj[idx[0]] = idx[1]); });
    console.log(obj);
    return car_dict;
};
make_car('subaru', 'outback', { color: 'blue', tow_package: 'yes' });
make_car('honda', 'accord', { year: 1991, color: 'white', headlights: 'popup' });
