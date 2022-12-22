function winningTicket(text){


    // let arr = input.split(/\s*\s*/).join('').split(',').join(' ');
    // let newArr = arr.split(' ');


    let patternEditText = /[\s]*[\s]*/g
    let patternCheckSymbol = /[@]{6,10}|[#]{6,10}|[$]{6,10}|[\^]{6,10}/g; // all side = 20; ?(\^ or ^);

    let arr = text.split(patternEditText).join(``).split(`,`).join(` `);
    let newTicketCheck = arr.split(` `);


    newTicketCheck.forEach(ticket => {

        if(ticket.length !== 20) return console.log((`invalid ticket`));
        
        let leftHand = ticket.substring(0,10).match(patternCheckSymbol);
        let secondHand = ticket.substring(10).match(patternCheckSymbol);

        if(leftHand === null || secondHand === null) return console.log(`ticket "${ticket}" - no match`);

        if(leftHand !== null && secondHand !== null){

            leftHand = leftHand.toString();
            secondHand = secondHand.toString();
            
            if(leftHand.length === 10 && secondHand.length === 10) return console.log(`ticket "${ticket}" - ${leftHand.length}${leftHand[0]} Jackpot!`)
            
            if(leftHand[0] === secondHand[0]){

                if(leftHand.length < secondHand.length){
                console.log(`ticket "${ticket}" - ${leftHand.length}${leftHand[0]}`)
                }
                if(secondHand.length < leftHand.length){
                    console.log(`ticket "${ticket}" - ${secondHand.length}${secondHand[0]}`)
                }
                if(secondHand.length == leftHand.length){
                    console.log(`ticket "${ticket}" - ${leftHand.length}${leftHand[0]}`)

                }
            }
        }
    });
}

// winningTicket(`Cash$$$$$$Ca$$$$$$sh`)
winningTicket(`$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey`)
// winningTicket(`^^^^^^^^^^^^^^^^^^^@`)
// winningTicket(`validticketnomatch:(`)
// winningTicket(`^^^^^^^^^^^^^^^^^^^@`)
// winningTicket(`validticketnomatch:(`)
// winningTicket(`^^^^^^Ca^^^^^^shCash`)
// winningTicket(`$$$$$$$$$$ $$$$$$$$$$`)
// winningTicket(`$$$$$$$$$$ $$$$$$$$$$`)