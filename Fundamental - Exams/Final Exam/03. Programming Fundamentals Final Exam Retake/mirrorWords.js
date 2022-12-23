function mirrorWords(arrInput){

    let editString = arrInput.shift();
    let serchPattern = /([@|#])(?<matchOne>[A-Za-z]{3,})\1{2}(?<matchTwo>[A-Za-z]{3,})\1/g;
    let counterMatch = 0;
    let mirrorTwo = [];

    let allMatchs = editString.matchAll(serchPattern);

    for (const line of allMatchs) {
        counterMatch++;
        let reverse = line.groups.matchTwo.split(``).reverse().join(``);
        
        if(line.groups.matchOne === reverse){
            mirrorTwo.push([`${line.groups.matchOne} <=> ${line.groups.matchTwo}`])
        }
    }

    if(counterMatch > 0 && mirrorTwo.length !== 0){
        console.log(`${counterMatch} word pairs found!`);
        console.log(`The mirror words are:`);
        console.log(mirrorTwo.join(`, `));
    } else if(counterMatch > 0) {
        console.log(`${counterMatch} word pairs found!`);
        console.log(`No mirror words!`);
    } else {
        console.log(`No word pairs found!`);
        console.log(`No mirror words!`);
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
   ])

// mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])// --> waiting final row 



// mirrorWords([ '#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#' ]) --> finito