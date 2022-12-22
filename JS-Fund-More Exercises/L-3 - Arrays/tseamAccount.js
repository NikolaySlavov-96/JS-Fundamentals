function tseamAccount(array){

    let startGame = array.shift().split(` `);
    let command = array.shift();

    while(command !== 'Play!'){

        let [nameCommand , games] = command.split(` `)

        switch(nameCommand) {
            case 'Install': installs(startGame , games) ; break;
            case 'Uninstall': uninstalls(startGame , games) ; break;
            case 'Update': updating(startGame , games) ; break;
            case 'Expansion': expansions(startGame , games) ; break;
        }

        command = array.shift();
    }

    function installs(arrayGame , game){
        
        if(!arrayGame.includes(game)){
            arrayGame.push(game);
        }
    }

    function uninstalls(arrayGame , game){
        
        if(arrayGame.includes(game)){
            
            let index = arrayGame.indexOf(game);

            arrayGame.splice(index , 1);
        }
    }

    function updating(arrayGame , game){

        if(arrayGame.includes(game)){

            let index = arrayGame.indexOf(game);

            let temporary = arrayGame[index];

            arrayGame.splice(index , 1);
            arrayGame.push(temporary);
            
        }
    }

    function expansions(arrayGame , game){

        let [oldGame , newGame] = game.split(`-`);

        if(arrayGame.includes(oldGame)){

            let index = arrayGame.indexOf(oldGame);
            let games = (`${oldGame}:${newGame}`);

            arrayGame.splice(index + 1 , 0 , games)
        }
    }

    console.log(startGame.join(` `))
}

tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']
)