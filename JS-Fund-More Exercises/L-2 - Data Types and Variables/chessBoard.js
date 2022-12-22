function chessBoard(counter){

    let numberCounter = counter;
    
    let counterWhite = 0;

    console.log(`<div class="chessboard">`)
    for(let n = 1; n <= numberCounter; n++){

        console.log(`  <div>`)

        for(let q = 1; q <= numberCounter; q++){

            if(counter % 2 === 0 && q === 1 && n !== 1){

            } else {
                counterWhite++;
            }

            if(counterWhite % 2 === 0){
                console.log(`    <span class="white"></span>`)
            } else if(counterWhite % 2 !== 0) {
                console.log(`    <span class="black"></span>`)
            }
        }

        console.log(`  </div>`)
    }
    console.log(`</div>`)
}

chessBoard(6)