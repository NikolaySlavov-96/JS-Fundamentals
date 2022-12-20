function charactersInRange(begin , end){

    let beginNumber = begin.charCodeAt(0);
    let endNumber = end.charCodeAt(0);

    let asciiConvert = '';

    if(beginNumber > endNumber){
        asciiConvert = convertWordToNumber(endNumber , beginNumber)
    } else {
        asciiConvert = convertWordToNumber(beginNumber , endNumber)
    }
    

    function convertWordToNumber(begin , end){

        let result = '';
        for(let n = begin + 1; n < end; n++){
            if(n !== end){
                result += (`${String.fromCharCode(n)} `)
            } else {
                result += (`${String.fromCharCode(n)}`)
            }
        }

        return result;
    }

    return asciiConvert

}

// let prints = charactersInRange('a','d')
let prints = charactersInRange('C','#')
// let prints = charactersInRange(30 , 50)

console.log(prints)