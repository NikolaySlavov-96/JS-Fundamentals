function commonElements(arrayFirst , arraySecond){

    let counterFirst = arrayFirst.length;
    let counterSecond = arraySecond.length;

    for(let arrays = 0; arrays < counterFirst; arrays++){
        let sum = '';
        for(let second = 0; second < counterSecond; second++){
            if(arrayFirst[arrays] === arraySecond[second]){
                console.log(arrayFirst[arrays]);
                break;
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)