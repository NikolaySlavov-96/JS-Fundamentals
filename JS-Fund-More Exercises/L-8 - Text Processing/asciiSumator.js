function asciiSumator(arr){

    let firstBorded = arr.shift().charCodeAt();
    let lastBorder = arr.shift().charCodeAt();
    
    if(firstBorded > lastBorder){
        let compares = Math.min(firstBorded , lastBorder);
        let temporary = firstBorded;
        firstBorded = lastBorder;
        lastBorder = temporary;
    }

    let line = arr.shift();
    let lengthsLine = line.length;

    let finalPrintSum = 0;

    for(let n = 0; n < lengthsLine; n++){

        let serch = line[n].charCodeAt();

        if(serch < lastBorder && serch > firstBorded){
            finalPrintSum += serch;
        }
    }

    console.log(finalPrintSum)
}

asciiSumator(['a' ,
'1',
'jfe392$#@j24ui9ne#@$'])