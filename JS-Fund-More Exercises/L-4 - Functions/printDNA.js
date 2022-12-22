function printDNA(length){

    let symbols = 'ATCGTTAGGG'

    let quantity = 0;

    for(let n = 0; n < length; n++){
        let temporary = '';

        if(n % 4 === 0){

            temporary += `**${symbols[quantity]}${symbols[quantity + 1]}**`

        } else if(n % 2 === 0){

            temporary += `${symbols[quantity]}----${symbols[quantity + 1]}`

        } else if(n % 1 === 0) {

            temporary += `*${symbols[quantity]}--${symbols[quantity + 1]}*`

        }
        if((n + 1) % 5 === 0 && n !== 0){
            quantity = 0;
        } else {
            quantity += 2;
        }

        console.log(temporary);
    }
}

printDNA(10)
