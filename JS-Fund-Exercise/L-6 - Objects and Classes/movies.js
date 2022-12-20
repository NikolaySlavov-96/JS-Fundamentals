function movies(arrMovie){

    let movies = [];

    for(let n = 0; n < arrMovie.length; n++){
        let current = arrMovie[n];

        if(current.includes('addMovie')){
            let [command , name] = current.split(`addMovie `)
            movies.push({name});
        } else if(current.includes('directedBy')){
            let [name , director] = current.split(` directedBy `)
            let movie = movies.find(el => el.name === name);

            if(movie){
                movie.director = director
            }
        } else if(current.includes('onDate')){
            let [name , date] = current.split(` onDate `);
            let movie = movies.find(el => el.name === name);

            if(movie){
                movie.date = date;
            }
        }

    }
    movies.forEach(nameFilm =>{
        if(nameFilm.name && nameFilm.director && nameFilm.date){
            console.log(JSON.stringify(nameFilm));
        }
    });
}

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    )