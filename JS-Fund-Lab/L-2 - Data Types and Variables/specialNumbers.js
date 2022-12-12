function specialNumbers(limitNumber){

    for(let n = 1; n <= limitNumber; n++){
        let counter = 0;
        let isAnswer = '';
        if(n >= 10){
            let using = n.toString()
            for(let q = 0; q < using.length; q++){
                counter += Number(using[q]);
            }
        } else {
            counter = n;
        }

        isAnswer = counter == "5" || counter == "7" || counter == "11";

        console.log(`${n} -> ${isAnswer ? 'True' : 'False'}`);

        // if(counter == "5" || counter == "7" || counter == "11"){
        //     console.log(`${n} -> True`)
        // } else {
        //     console.log(`${n} -> False`)
        // }

    }
}

specialNumbers(20)