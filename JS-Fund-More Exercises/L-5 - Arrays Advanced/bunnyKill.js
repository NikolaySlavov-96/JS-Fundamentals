function bunnyKill(array){
    
    let bomb = array.pop().split(` `);
    let arraySplit = [];

    array.forEach(element => {
        let line = element.split(` `).map(el => Number(el));
        arraySplit.push(line);
    });

    let explodeBunies = 0;
    let allDalage = 0;

    for(let n = 0; n < bomb.length; n++){
        let [x , y] = bomb[n].split(`,`)
        x = Number(x);
        y = Number(y);

        let damageValue = arraySplit[x][y];
        if(damageValue <= 0){
            continue;
        }
        editArr(x , y , damageValue);
    }

    function editArr(x , y , damages){

        let begRow = Math.max(0, x - 1);
        let endRow = Math.min(x + 1, arraySplit.length - 1)

        for(let row = begRow; row <= endRow; row++){

        let begCol = Math.max(0 , y - 1);
        let endCol = Math.min(y + 1 , arraySplit[row].length - 1);

            for(let colum = begCol; colum <= endCol; colum++){
                let damage = damages;
                let xS = arraySplit[row];
                let columS = xS[colum];
                if(columS - damage < 0){
                    damage = columS;
                }
                columS -= damage;
                xS[colum] = columS;
                arraySplit[row] = xS;

                if(row === x && colum === y){
                    explodeBunies++;
                    allDalage += Number(damages);
                }
                damage = damages;
            }
        }
    }
    arraySplit.forEach(element => {
        element.forEach(el => {

            if(el !== 0){
                explodeBunies++;
                allDalage += Number(el);
            }
        })
    })
    console.log(allDalage)
    console.log(explodeBunies)
}

bunnyKill(['10 10 10',
'10 10 10', 
'10 10 10',
'0,0']);