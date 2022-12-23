function muOnline(input){

    let definite = input.toString().split(`|`);
    let health = 100;
    let bitcoins = 0;
    let commandLength = definite.length;
    let isKill = false;
    
    let counterRoom = 0;
    
    
    for(let n = 0; n < commandLength; n++){
        counterRoom++;
        let dream = definite[n];

        let [command , quantity] = dream.split(` `);

        switch(command){
            case 'potion': health = potions(health, quantity); break;
            case 'chest': bitcoins = chests(bitcoins, quantity); break;
            default: health = battle(health, command, quantity); break;
        }

        if(isKill){
            break;
        }

    }

    if(!isKill){
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`)
    }


    function potions(heal , counter){
        let healNumber = Number(counter);

        if(heal + healNumber <= 100){
            console.log(`You healed for ${counter} hp.`);
            heal += healNumber;
        } else {
            let temporary = 100 - heal;
            console.log(`You healed for ${temporary} hp.`);
            heal += temporary;
        }

        console.log(`Current health: ${heal} hp.`)

        return heal;
    }

    function chests(coins , counter){
        
        console.log(`You found ${counter} bitcoins.`);
        coins += Number(counter);

        return coins;
    }

    function battle(health , name , damage){
        let attack = Number(damage);
        let temporary = health - attack;

        if(temporary > 0){
            console.log(`You slayed ${name}.`);
            return temporary
        } else if(temporary <= 0) {
            console.log(`You died! Killed by ${name}.`);
            console.log(`Best room: ${counterRoom}`);
            isKill = true;
            return temporary
        }
    }
}

// muOnline(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// muOnline(["potion 10|chest 100|chest 1000"]);
muOnline(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);