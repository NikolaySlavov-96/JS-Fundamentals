function postOffice(input){

    let text = input.shift();
    let [words , length , char] = text.split(`|`);
    let patternWords = /([#|$|%|*|&])(?<word>[A-Z]+)\1/g;
    let patternLength = /(?<length>\d{2}:\d{2})/g;
    let patternChar = /(?<char>\b[A-Z][^\s]*)/g;

    let matchWords = words.matchAll(patternWords);
    let mattchLength = length.match(patternLength);
    let mattchChart = char.match(patternChar);

    let temporary = '';
    let characterObjects = {};

    for (const char of matchWords) {

        if(char.groups.word !== undefined){
            temporary = char.groups.word;
        }
    }

    for (const line of mattchLength) {

        let character = line.split(`:`);
        let fisrt = Number(character[0])
        let transform = String.fromCharCode(fisrt);
        if(temporary.includes(transform)&& character[1] <= 20){
            let second = Number(character[1]);
            characterObjects[transform] = second;
        }
    }

    for(let f = 0; f < temporary.length; f++){

        let word = temporary[f];
        for (const words of mattchChart) {
    
            if(word === words[0]){
                let chech = Number(characterObjects[words[0]]);
                if((chech + 1) === words.length){
    
                    console.log(words)
                }
            }
        }
    }
}

// postOffice([`sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos`])

postOffice([`Urgent"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig`])