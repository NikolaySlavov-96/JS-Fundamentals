function heroesOfCodeAndLogicVII(array){

    let numberHeroes = Number(array.shift());

    let heroesArray = [];
    
    for(let n = 0; n < numberHeroes; n++){

        let [name , hp , mp] = array.shift().split(` `);
        hp = Number(hp);
        mp = Number(mp)
        let object = {name , hp , mp};
        heroesArray.push(object);
    }

    let instruction = array.shift();

    while(instruction !== 'End'){

        let [command , nameHeroe , ...oth] = instruction.split(` - `);

        switch(command){
            case 'CastSpell': castSpell(nameHeroe , oth); break;
            case 'TakeDamage': takeDamage(nameHeroe , oth); break;
            case 'Recharge': recharge(nameHeroe , oth); break;
            case 'Heal': heal(nameHeroe , oth); break;
            }

        instruction = array.shift();
    }

    for(const line of heroesArray){

        console.log(`${line.name}`)
        console.log(`  HP: ${line.hp}`)
        console.log(`  MP: ${line.mp}`)
    }

    function castSpell(nameHeroe , oth){

        let mpT = Number(oth[0]);
        let spellName = oth[1];

        let result = heroesArray.find((nH) => nH.name === nameHeroe);
        let index = heroesArray.indexOf(result);

        let currentMpHeroes = Number(heroesArray[index].mp);

        if(mpT <= currentMpHeroes){
            heroesArray[index].mp -= mpT;
            console.log(`${nameHeroe} has successfully cast ${spellName} and now has ${heroesArray[index].mp} MP!`)
        } else {
            console.log(`${nameHeroe} does not have enough MP to cast ${spellName}!`)
        }

    }

    function takeDamage(nameHeroe , oth){

        let hpT = Number(oth[0]);
        let attacker = oth[1];

        let result = heroesArray.find((nH) => nH.name === nameHeroe);
        let index = heroesArray.indexOf(result);

        let currentHpHeroes = Number(heroesArray[index].hp);

        if((currentHpHeroes - hpT) > 0){
            heroesArray[index].hp -= hpT;
            console.log(`${nameHeroe} was hit for ${hpT} HP by ${attacker} and now has ${(heroesArray[index].hp)} HP left!`)
        } else {
            heroesArray.splice(index , 1);
            console.log(`${nameHeroe} has been killed by ${attacker}!`)
        }

    }

    function recharge(nameHeroe , oth){

        let mpT = Number(oth[0]);
        
        let result = heroesArray.find((nH) => nH.name === nameHeroe);
        let index = heroesArray.indexOf(result);

        let currentMp = heroesArray[index].mp;

        if((currentMp + mpT) > 200){
            mpT = 200 - currentMp;
        }
        heroesArray[index].mp += mpT;
        
        console.log(`${nameHeroe} recharged for ${mpT} MP!`)
    }

    function heal(nameHeroe , oth){

        let hpT = Number(oth[0]);

        let result = heroesArray.find((nH) => nH.name === nameHeroe);
        let index = heroesArray.indexOf(result);

        let currentHp = heroesArray[index].hp;

        if((currentHp + hpT) > 100){
            hpT = 100 - currentHp;
        }

        heroesArray[index].hp += hpT;
        console.log(`${nameHeroe} healed for ${hpT} HP!`)
    }
}

heroesOfCodeAndLogicVII(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End']);