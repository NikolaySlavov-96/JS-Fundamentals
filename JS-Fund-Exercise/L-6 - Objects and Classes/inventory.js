function inventory(arrayAll){

    let gamers = [];

    for (const hero of arrayAll) {
        let [name , level , item] = hero.split(` / `)

        // let objectHero = {
        //     name, 
        //     level,
        //     item,
        // }
        // gamers.push(objectHero);

        gamers.push({Hero: name, level: level, item: item})
    }

    gamers.sort((a , b) => a.level - b.level);

    gamers.forEach(game => {
        console.log(`Hero: ${game.Hero}`);
        console.log(`level => ${game.level}`);
        console.log(`items => ${game.item}`);

    })

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )