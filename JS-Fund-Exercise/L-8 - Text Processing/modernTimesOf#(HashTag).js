function modernTimesOf(text){

    let arrText = text.split(` `);

    for (const word of arrText) {
        if(word.startsWith('#') && word.length > 1){
            let printWords = '';
            let isPrint = true;
            for (let n = 1; n < word.length; n++) {
                if(!isNaN(word[n]) || word[n] === '#'){
                    isPrint = false;
                    break;
                }
                printWords += word[n];
            }
            if(isPrint){
                console.log(printWords)
            }
        }
    }
}

modernTimesOf('Nowadays everyone uses # to tag a #spec#ial word in #socialMedia')

//ще гръмна при наличние на # в средата на думата -- оправено. Но пак има шанс ако има друг симвул различен от буква да гръмне