function emojiDetector(array){

    const emojiPattern = /([:]{2}|[*]{2})(?<name>[A-Z][a-z]{2,})\1/g;
    let allInfor = array.shift();
    let counterThreshold = 1;
    let counterFindEmoji = 0;
    const resultEmoji = [];

    for (const symbol of allInfor) {

        if(!symbol.search(/[0-9]/)){
            counterThreshold *= Number(symbol);
        }
    }

    const matchAll = allInfor.matchAll(emojiPattern);

    for (const line of matchAll) {

        counterFindEmoji++;
        const namesEmoji = line.groups.name;
        let symOfLetter = 0;

        for(const sym of namesEmoji){
            let number = sym.charCodeAt();
            symOfLetter += number;
        }
        if(symOfLetter > counterThreshold){
            resultEmoji.push(line[0]);
        }
    }
    console.log(`Cool threshold: ${counterThreshold}`);
    console.log(`${counterFindEmoji} emojis found in the text. The cool ones are:`);
    resultEmoji.forEach(x => console.log(x))
}

emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])