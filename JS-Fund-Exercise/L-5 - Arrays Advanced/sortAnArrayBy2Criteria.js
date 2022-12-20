function sortAnArrayBy2Criteria(arr){

    let afterEdit = arr.sort((a , b) => a.length - b.length || a.localeCompare(b))

    for (const printss of afterEdit) {
        console.log(printss)
    }

}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])