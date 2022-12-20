function towns(arrayCity){

    let cityObject = {};

    arrayCity.forEach(element => {
        let [city , latitude , longitude] = element.split(` | `);
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);

        cityObject.town = city;
        cityObject.latitude = latitude;
        cityObject.longitude = longitude;

        prints();
    });

    function prints(){
        console.log(cityObject)
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])