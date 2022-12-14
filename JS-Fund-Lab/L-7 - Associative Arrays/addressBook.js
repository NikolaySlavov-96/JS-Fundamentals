function addressBook(arrayNameAddres){

    let sortObj = {};

    arrayNameAddres.forEach(element => {
        let [name , addres] = element.split(`:`);
        
        sortObj[name] = addres;
    });

    let addressBookSort = Object.entries(sortObj);

    addressBookSort.sort(([keyA , valueA] , [keyB , valueB]) => keyA.localeCompare(keyB));

    addressBookSort.forEach(element => {
        let [name , addres] = element;

        console.log(`${name} -> ${addres}`)
    })
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])