function netherRealms(parm){

    let petternInputEdit = /[ ]*[,| ]+[ ]*/g;
    let patternHealth = /(?<health>[^0-9\+\-\*\/\.]+)/g;
    let patternDamage = /(?<damage>[+|-]?[\d]+(\.?[\d]*)?)/g;
    let finalOperant = /[\*|\/]+/g;

    let saveCharacter = {};

    let characters = parm.split(petternInputEdit);

    for (const character of characters) {

        if(!saveCharacter.hasOwnProperty(character)){
            saveCharacter[character] = {health: 0 , damage: 0};
        }

        let temporaryHealt = saveCharacter[character].health;
        let temporaryDamage = saveCharacter[character].damage;

        let healthSymbol = character.match(patternHealth).join(``);
        let damageSymbol = character.matchAll(patternDamage);
        let operants = character.match(finalOperant);

        if(healthSymbol !== null){
            for(const name of healthSymbol){
                let sumHeal = name.charCodeAt();
                temporaryHealt += sumHeal;
            }
        }

        if(damageSymbol !== null) {

            for(const damage of damageSymbol){
                let currentDamage = damage.groups.damage;

                if(currentDamage.includes('-')){
                    let currentDmg = currentDamage.split(`-`)[1];
                    temporaryDamage -= currentDmg;
                    continue;
                }
                temporaryDamage += Number(currentDamage);
            }
        }

        if(operants !== null){
            operants = operants.join(``)
            for(let n = 0; n < operants.length; n++){
                let operations = operants[n];

                switch(operations){
                    case '*': temporaryDamage *= 2; break;
                    case '/': temporaryDamage /= 2; break;
                }
            }
        }

        saveCharacter[character].health += temporaryHealt;
        saveCharacter[character].damage += temporaryDamage;
    }

    let sorterObjects = Object.entries(saveCharacter).sort((a , b) => a[0].localeCompare(b[0]));

    sorterObjects.forEach(nameCharacter => {

        console.log(`${nameCharacter[0]} - ${nameCharacter[1].health} health, ${(nameCharacter[1].damage).toFixed(2)} damage`)
    })
}

// netherRealms('M3ph1st0**, Azazel')
// netherRealms('M3ph-0.5s-0.5t0.0**')
netherRealms('S/1M0.0***  , G3.3*6.66A*  , P360***/')


// При вход: S/1M0.0***  , G3.3*6.66A*  , P360***/
// Трябва да върне: G3.3*6.66A* - 136 health, 39.84 damage