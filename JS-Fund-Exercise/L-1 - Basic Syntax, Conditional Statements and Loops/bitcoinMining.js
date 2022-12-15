function bitcoinMining(input){

    let index = 0;
    let miningGold = input[index++];

    let priceByeBitCoin = 11949.16;
    let priceSellGold = 67.51;

    let counterByeBitCoin = 0;
    let firstDayBye = 0;
    let counterDay = 0;
    let counterByeFirstBitCoin = 0;
    let counterFirstByeBitcoin = false;
    
    let isStopBoole = false;
    
    let collectMoney = 0;
    
    while(!isStopBoole){
        let bueToDay = 0
        counterDay++;
        
        if(counterDay % 3 == 0){
            miningGold *= 0.70;
        }
        collectMoney += miningGold * priceSellGold;
        
        if((collectMoney - priceByeBitCoin) >= 0){
            counterByeFirstBitCoin++;
            for(let n = priceByeBitCoin; n <= collectMoney; n+=priceByeBitCoin){
                bueToDay++;
            }
            collectMoney -=  bueToDay * priceByeBitCoin;
            counterByeBitCoin += bueToDay;
        }
        
        if(counterByeFirstBitCoin <= 1 && counterByeFirstBitCoin !== 0){
            firstDayBye = counterDay;
            counterFirstByeBitcoin = true;
        }
        miningGold = input[index++];

        if(miningGold === undefined){
            isStopBoole = true;
        }
    }
    console.log(`Bought bitcoins: ${counterByeBitCoin}`)
    if(counterFirstByeBitcoin){
        console.log(`Day of the first purchased bitcoin: ${firstDayBye}`)
    }
    console.log(`Left money: ${(collectMoney).toFixed(2)} lv.`)

}

// bitcoinMining([100, 200, 300])
// bitcoinMining([50, 100])
// bitcoinMining([76.998371, 100])
// bitcoinMining([3124.15, 504.212, 2511.124 , 100, 200, 300 , 50, 100])