function cutAndReverse(words){

    let cutHalf = (words.length / 2);

    let firstHalf = words.substring(0, cutHalf).split('').reverse().join(``);
    let lastHalf = words.substring(cutHalf).split('').reverse().join(``);


    console.log(firstHalf)
    console.log(lastHalf)
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')