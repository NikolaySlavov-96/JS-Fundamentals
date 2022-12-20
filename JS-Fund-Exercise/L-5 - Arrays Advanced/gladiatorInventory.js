function gladiatorInventory(arr){

    let peterInventory = arr.shift().split(` `);

    for (const commands of arr) {
        
        let [tag , article] = commands.split(` `) 

        switch(tag){
            case 'Buy': buyArticle(peterInventory , article); break;
            case 'Trash': trashArticle(peterInventory , article); break;
            case 'Repair': repairArticle(peterInventory , article); break;
            case 'Upgrade': upgradeArticle(peterInventory , article); break;
        }
    }

    function buyArticle(arrInventory , equipmentAdd){
        
        if(!arrInventory.includes(equipmentAdd)){
            arrInventory.push(equipmentAdd);
        }
    }

    function trashArticle(arrInventory , equipmentAdd){

        if(arrInventory.includes(equipmentAdd)){
            let index = arrInventory.indexOf(equipmentAdd);

            arrInventory.splice(index , 1);
        }
    }

    function repairArticle(arrInventory , equipmentAdd){
        
        if(arrInventory.includes(equipmentAdd)){
            let index = arrInventory.indexOf(equipmentAdd);

            let temporary = arrInventory[index];
            arrInventory.splice(index , 1);
            arrInventory.push(temporary);
        }
    }

    function upgradeArticle(arrInventory , equipmentAdd){
        
        let [beforeUpgrade , afterUpgrade] = equipmentAdd.split(`-`);

        if(arrInventory.includes(beforeUpgrade)){
            let index = arrInventory.indexOf(beforeUpgrade);
            index += 1;
            let temporaryName = (`${beforeUpgrade}:${afterUpgrade}`);

            arrInventory.splice(index , 0 , temporaryName);
        }

    }
    peterInventory = peterInventory.join(` `)
    console.log(peterInventory)

}

gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])