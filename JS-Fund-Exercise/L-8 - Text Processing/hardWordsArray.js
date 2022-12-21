function hardWords (array){

    let text = array[0].split(` `);
    let wordsChange = array[1];
    let counterRow = 0;

    for (const line of text) {
        if(line.includes('_')){
            let punctuatinFirst = false;
            let punctuatinSecond = false;
            let counterLine = line.length;
            
            if(line.includes(',')){
                punctuatinFirst = true;
                counterLine--;
            } else if(line.includes('.')){
                punctuatinSecond = true;
                counterLine--;
            }
            

            for (const repeat of wordsChange) {
                if(counterLine === repeat.length){
                    text[counterRow] = repeat;
                    break;
                }
            }

            if(punctuatinFirst){
                text[counterRow] += (',');
            } else if(punctuatinSecond){
                text[counterRow] += ('.');
            }
        }
        counterRow++;
    }
    
    console.log(text.join(` `))
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])