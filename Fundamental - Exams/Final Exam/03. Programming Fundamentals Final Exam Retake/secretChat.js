function secretChat(arrInput){
    
    let messageEdit = arrInput.shift();
    let command = arrInput.shift();

    while(command !== 'Reveal'){
        let [comm , info , replace] = command.split(`:|:`);

        switch(comm){
            case 'ChangeAll': changeAll(info , replace); break;
            case 'Reverse': reverseOne(info); break;
            case 'InsertSpace': insertSpace(info); break;
        }

        command = arrInput.shift();
    }

    function changeAll(oldIndex , newIndex){

        while(messageEdit.includes(oldIndex)){
            messageEdit = messageEdit.replace(oldIndex , newIndex);
        }
        console.log(messageEdit)
    }

    function reverseOne(substring){

        if(messageEdit.includes(substring)){
            
            let reverseString = substring.split(``).reverse().join(``);
            let indexOf = messageEdit.indexOf(substring);
            let lengthWord = substring.length; 
            
            let beforRemove = messageEdit.substring(0 , indexOf);
            let afterRemoe = messageEdit.substring(indexOf + lengthWord);

            messageEdit = beforRemove.concat(afterRemoe).concat(reverseString);
            console.log(messageEdit)
            return;
        }

        console.log(`error`);
    }

    function insertSpace(index){

        let beforSpace = messageEdit.substring(0 , index);
        let afterSpace = messageEdit.substring(index);

        messageEdit = beforSpace.concat(` `).concat(afterSpace);
        console.log(messageEdit)
    }

    console.log(`You have a new text message: ${messageEdit}`)
}

secretChat([
    'heVVodar!gniV!gnil',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ])