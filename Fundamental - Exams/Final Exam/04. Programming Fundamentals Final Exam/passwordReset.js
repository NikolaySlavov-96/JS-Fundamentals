function passwordReset(array){

    let passwordAfterTakeOdd = array.shift();
    let instruction = array.shift();

    while(instruction !== 'Done'){
        let [comma , ...all] = instruction.split(` `);

        switch(comma){
            case 'TakeOdd': takeodd(); break;
            case 'Cut': cutLetter(all); break;
            case 'Substitute': substitute(all); break;
        }

        instruction = array.shift();
    }

    console.log(`Your password is: ${passwordAfterTakeOdd}`)

    function takeodd(){
        
        let passwordLength = passwordAfterTakeOdd.length;
        let message = '';
        for (let n = 0; n < passwordLength; n++) {
            
            if(n % 2 !== 0){
                message += passwordAfterTakeOdd[n];
            }
        }
        passwordAfterTakeOdd = message;
        console.log(passwordAfterTakeOdd);
    }

    function cutLetter(allParameter){

        let beginIndex = Number(allParameter[0]);
        let sizeCut = Number(allParameter[1]);
        if(passwordAfterTakeOdd[beginIndex] && passwordAfterTakeOdd[sizeCut]){

            let beforCut = passwordAfterTakeOdd.substring(0, beginIndex);
            let afterCut = passwordAfterTakeOdd.substring((beginIndex + sizeCut));
    
            passwordAfterTakeOdd = beforCut.concat(afterCut);
        }

        console.log(passwordAfterTakeOdd)
    }

    function substitute(allParameter){

        let oldParameter = allParameter[0];
        let replaceParameter = allParameter[1];

        if(passwordAfterTakeOdd.includes(oldParameter)){

            while(passwordAfterTakeOdd.includes(oldParameter)){

                passwordAfterTakeOdd = passwordAfterTakeOdd.replace(oldParameter , replaceParameter);
            }
            return console.log(passwordAfterTakeOdd);
        }
        console.log(`Nothing to replace!`);
    }
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"])