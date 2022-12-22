function airPollution(matrix , comm){
    
    for (const line of comm) {
        let [command , index] = line.split(` `);
        index = Number(index);

        switch(command){
            case 'breeze': breezing(index); break;
            case 'gale': galeing(index); break;
            case 'smog': smoging(index); break;
        }
    }

    let polluted = serch();
    if(polluted.length > 0){
        console.log(`Polluted areas: ${polluted}`)
    } else {
        console.log(`No polluted areas`)
    }

    function breezing(indexRow){
        let edit = matrix[indexRow].split(` `);
        let editLength = edit.length;

        for(let n = 0; n < editLength; n++){
            if(edit[n] - 15 >= 0){
                edit[n] -= 15;
            } else {
                edit[n] -= edit[n];
            }
        }
        matrix[indexRow] = edit.join(` `);
    }

    function galeing(index){

        for(let n = 0; n < 5; n++){
            let newS = matrix[n].split(` `)
            let givenNumber = newS[index];
            if(givenNumber - 20 >= 0){
                givenNumber -= 20;
            } else {
                givenNumber -= givenNumber;
            }
            newS[index] = givenNumber;
            matrix[n] = newS.join(` `);
        }
    }

    function smoging(quantity){
        for(let n = 0; n < 5; n++){
            let temporary = matrix[n].split(` `)
            for(let q = 0; q < 5; q++){
                temporary[q] = Number(temporary[q])
                temporary[q] += quantity;
            }
            matrix[n] = temporary.join(` `);
        }
    }

    function serch(){
        let safe = '';
        for(let n = 0; n < 5; n++){
            let tempor = matrix[n].split(` `);
            for(let z = 0; z < 5; z++){
                if(tempor[z] >= 50){
                    safe += `[${n}-${z}], `
                }
            }
        }
        let print = trim(safe);
        return print;
    }

    function trim(string){
        let edinString = '';
        let editResult = (string.length - 2);
        for(let n = 0; n < editResult; n++){
            edinString += string[n];
        }
        return edinString;
    }
}

airPollution(['5 7 2 14 4',
'21 14 2 5 3',
'3 16 7 42 12',
'2 20 8 39 14',
'7 34 1 10 24'],
['breeze 1', 'gale 2', 'smog 35'])


// test za 0 la ta --> da izvadq da ostane 0 la 