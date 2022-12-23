function shoppingList(array){

    let shopList = array.shift().split(`!`);
    let currentName = array.slice(0);


    for (const edit of currentName) {

        if(edit === 'Go Shopping!".'){
            break;
        }
        
        let [commandName , itemName , newName] = edit.split(` `);
       
        switch(commandName){
            case 'Urgent': 
                urgent(shopList , itemName); 
            break;
            case 'Unnecessary': 
                unnecessary(shopList , itemName); 
            break;
            case 'Correct': 
                correct(shopList , itemName , newName); 
            break;
            case 'Rearrange': 
                rearrange(shopList , itemName); 
            break;
            default: break;
        }
    }

    function search(list , itemName){

        let searchS = list.includes(itemName);

        return searchS;
    
    }


    function urgent(list , itemName){
        
        let work = search(list , itemName);

        if(!work){
            list.unshift(itemName);
        }

    }


    function unnecessary(list , itemName){

        let work = search(list , itemName);

        if(work){
            let index = list.indexOf(itemName);

            list.splice(index , 1);
        }

    }


    function correct(list , oldName , newName){

        let work = search(list , oldName);

        if(work){
            let index = list.indexOf(oldName);

            list[index] = newName;
        }
    }


    function rearrange(list , itemName){

        let work = search(list , itemName);

        if(work){
            let index = list.indexOf(itemName);

            list.splice(index , 1);
            list.push(itemName);
        }

    }
    
    console.log(shopList.join(`, `))
}

shoppingList(["Tomatoes!Potatoes!Bread","Unnecessary Milk","Urgent Tomatoes","Go Shopping!"]);

shoppingList((["Milk!Pepper!Salt!Water!Banana","Urgent Salt","Unnecessary Grape","Correct Pepper Onion","Rearrange Grapes","Correct Tomatoes Potatoes","Go Shopping!"]));