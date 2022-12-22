function bookShelf(inputAll){

    let bookShelvsNumber = {};
    let booksName = {};

    inputAll.forEach(element => {
        if(element.includes(` -> `)){
            let [number , name] = element.split(` -> `);
            if(!bookShelvsNumber.hasOwnProperty(number)){
                bookShelvsNumber[`${number}`] = name;
                booksName[name] = [0 ,];
            }
        } else if(element.includes(`:`)){
            let [books , genre] = element.split(`, `);
            let [nameBook , authorBook] = books.split(`: `);
            if(booksName.hasOwnProperty(genre)){
                booksName[genre][0]++;
                booksName[genre].push([nameBook , authorBook]);
            }
        }
    });

    let sortedBooks = Object.entries(booksName).sort((a , b) => b[1][0] - a[1][0]);

    sortedBooks.forEach(el => {

        let [name , arr] = el;
        let quantityBook = arr.shift();
        for (const keys in bookShelvsNumber) {
            if(bookShelvsNumber[keys] === name){
                name = (`${keys} ${name}`);
            }
        }
        console.log(`${name}: ${quantityBook}`)
        arr.sort((a , b) => a[0].localeCompare(b[0]))
        arr.forEach(el => console.log(`--> ${el[0]}: ${el[1]}`))
    });
}

bookShelf(['1 -> history', 
'1 -> action', 
'Death in Time: Criss Bell, mystery', 
'2 -> mystery', '3 -> sci-fi', 
'Child of Silver: Bruce Rich, mystery', 
'Hurting Secrets: Dustin Bolt, action', 
'Future of Dawn: Aiden Rose, sci-fi', 
'Lions and Rats: Gabe Roads, history',
'2 -> romance', 
'Effect of the Void: Shay B, romance', 
'Losing Dreams: Gail Starr, sci-fi', 
'Name of Earth: Jo Bell, sci-fi', 
'Pilots of Stone: Brook Jay, history'])