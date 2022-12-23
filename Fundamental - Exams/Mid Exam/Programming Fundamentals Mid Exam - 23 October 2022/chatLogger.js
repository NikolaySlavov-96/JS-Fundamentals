function chatLogger(message){

    let command = message.shift();

    let result = [];

    while(command !== 'end'){

        let [firstComma , messages , newMessages] = command.split(` `);

        switch(firstComma){
            case 'Chat': chats(messages) ; break;
            case 'Delete': deletes(messages) ; break;
            case 'Edit': editing(messages , newMessages) ; break;
            case 'Pin': pins(messages) ; break;
            case 'Spam': spams(command) ; break;
            case 'end': break;
        }
        command = message.shift();
    }

    function chats(message){

        result.push(message)
    }

    function deletes(message){

        if(result.includes(message)){
            let index = result.indexOf(message);

            result.splice(index , 1);
        }
    }

    function editing(oldMessage , newMesseges){

        if(result.includes(oldMessage)){
            let index = result.indexOf(oldMessage);

            result.splice(index , 1 , newMesseges);
        }

    }

    function pins(message){

        if(result.includes(message)){
            let index = result.indexOf(message);

            let temporary = result[index];

            result.splice(index , 1);
            result.push(temporary);
        }

    }

    function spams(spamMessage){

        let newEdit = spamMessage.split(` `);
        let spamMessageLength = newEdit.length;

        for(let n = 1; n < spamMessageLength; n++){

            result.push(newEdit[n]);
        }
    }

    console.log(result.join(` \n`))
}

chatLogger(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"])


