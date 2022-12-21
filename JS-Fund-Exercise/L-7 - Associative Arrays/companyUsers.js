function companyUsers(array){

    let companyInfo = {};

    array.forEach(element => {
        let [companyName , id] = element.split(` -> `);

        if(!companyInfo.hasOwnProperty(companyName)){
            companyInfo[companyName] = [];
        }

        companyInfo[companyName].push(id);
        
    });

    let sortedCompany = Object.entries(companyInfo).sort((a , b) => a[0].localeCompare(b[0]));

    sortedCompany.forEach(els => {
        let [companyName , idPerson] = els;

        console.log(companyName);

        let uniqueIdPerson = new Set(idPerson)

        for (const lines of uniqueIdPerson) {
            
            console.log(`-- ${lines}`);
        }
    })
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])