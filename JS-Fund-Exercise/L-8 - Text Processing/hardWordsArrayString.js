function hardWords (array){

    let wordsCommand = array.pop();
    wordsCommand.sort((a , b) => b.length - a.length)
    let text = array.toString();
    let secondText = array.toString().split(' ');


    for (const word of wordsCommand) {
        for(const hole of secondText){
            if(hole.startsWith('_') && hole.endsWith('_')){
                if(hole.length === word.length){
                    text = text.replace(hole , word);
                }
            }
            if(hole.startsWith('_') && !hole.endsWith('_')){
                let NewHole = hole.slice(0 , hole.length - 1);
                if(NewHole.length === word.length){
                    text = text.replace(NewHole , word)
                }
            }
        }
    }
    console.log(text)
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])