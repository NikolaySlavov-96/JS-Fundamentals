function inventory(input){

    let swords = input.shift().split(`, `);

    let command = input.shift();

    while(command !== 'Craft!'){

        let [name , item] = command.split(` - `)
        let [items , newItem] = item.split(`:`);

        switch(name){
            case 'Collect': collects(swords , item); break;
            case 'Drop': drops(swords , item); break;
            case 'Combine Items': combineItem(swords , items , newItem); break;
            case 'Renew': renews(swords , item); break;
        }

        command = input.shift();
    }

    function search(sword , item){
        // search already;
        return sword.includes(item);
    }

    function collects(sword , item){
        // after check if exists notAdd. otherwise (в противен случай) add 
        let answers = search(sword , item)

        if(answers === false){
            sword.push(item);
        }

    }

    function drops(sword , item){
        // if exists remove item 
        let answers = search(sword , item);

        if(answers === true){
            let index = sword.indexOf(item);

            sword.splice(index, 1);
        }
    }

    function combineItem(sword , item , newItem){
        // old - true ; add newItem after old ; 
        let answers = search(sword , item);

        if(answers === true){
            let index = sword.indexOf(item);

            sword.splice((index + 1) , 0 , newItem);
        }
    }

    function renews(sword , item){
        // if exists (съществува) items remove current position and add end position
        let answers =  search(sword , item);

        if(answers === true){
            let index = sword.indexOf(item);

            let temporary = sword[index];
            sword.splice(index, 1);
            sword.push(temporary);
        }
    }

    console.log(swords.join`, `)
}

// inventory([
//     'Iron, Wood, Sword', 
//     'Collect - Gold', 
//     'Drop - Wood', 
//     'Craft!'
//   ]);

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  );