function theImitationGame(arr){
    
    let textToEdit = arr.shift();
    let command = arr.shift();

    while(command !== 'Decode'){
        let [comm , step , sim] = command.split(`|`);

        switch(comm) {
            case 'ChangeAll': changeAll(step , sim); break;
            case 'Insert': insers(step , sim); break;
            case 'Move':  moves(step); break; // move from 0 to n lette to last; 
        }

        command = arr.shift()
    }

    console.log(`The decrypted message is: ${textToEdit}`);

    function changeAll(befor , after){
        while(textToEdit.includes(befor)){
            textToEdit = textToEdit.replace(befor , after);
        }
    }

    function insers(index , word){
        index = Number(index)

        let partOne = textToEdit.substring(0 , index);
        let partTwo = textToEdit.substring(index);

        textToEdit = partOne.concat(word).concat(partTwo);
    }

    function moves(index){

        let edit = textToEdit.substring(0 , index);
        let odd = textToEdit.substring(index);

        textToEdit = odd + edit;
    }
}

theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'])