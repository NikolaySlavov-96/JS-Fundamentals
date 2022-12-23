function activationKeys([rawKey, ...instruction]) {

    let command = instruction.shift();

    while(command !== 'Generate'){

        let [commandLeter , ...othInfo] = command.split(`>>>`);

        // console.log(othInfo);

        switch(commandLeter){
            case 'Slice': slice(othInfo); break;
            case 'Flip': flip(othInfo); break;
            case 'Contains': contains(othInfo); break;
        }

        command = instruction.shift()
    }

    // print info 

    console.log(`Your activation key is: ${rawKey}`)

    // help function 

    function slice(indexs){

        const beginIndex = Number(indexs[0]);
        const endIndex = Number(indexs[1]);

        let beginParts = rawKey.substring(0 , beginIndex);
        let endParts = rawKey.substring(endIndex);

        rawKey = beginParts.concat(endParts);
        console.log(rawKey);
    }

    function flip(instructions){

        const type = instructions[0];
        const beginIndex = Number(instructions[1]);
        const endIndex = Number(instructions[2]);

        const wordEdint = rawKey.substring(beginIndex , endIndex);

        switch(type){
            case 'Upper': rawKey = rawKey.replace(wordEdint , wordEdint.toUpperCase()); break;
            case 'Lower': rawKey = rawKey.replace(wordEdint , wordEdint.toLowerCase()); break;
        }

        console.log(rawKey)
    }

    function contains(array){

        const words = array[0];

        if(rawKey.includes(words)){
            console.log(`${rawKey} contains ${words}`)
        } else {
            console.log(`Substring not found!`)
        }
    }
}

activationKeys([
  "abcdefghijklmnopqrstuvwxyz",
  "Slice>>>2>>>6",
  "Flip>>>Upper>>>3>>>14",
  "Flip>>>Lower>>>5>>>7",
  "Contains>>>def",
  "Contains>>>deF",
  "Generate",
]);
//abghijklmnopqrstuvwxyz

// abgHIJKLMNOPQRstuvwxyz
// abgHIjkLMNOPQRstuvwxyz



//abgHIjkLMNOPQRstuvwxyz