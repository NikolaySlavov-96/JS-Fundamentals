function worldTours(input) {
    let tour = input.shift();
    let command = input.shift();
    let travel = [];
 
    while(command !== 'Travel'){
        let commandTour = command.split(':');
        let nameCommand = commandTour[0];
        
    
        if(nameCommand === 'Add Stop'){
            let index = Number(commandTour[1]);
            let newTour = commandTour[2];
            if(index >= 0 && tour.length >= index){
            let firstPart = tour.substring(0,index);
            let secondPart = tour.substring(index);
             tour = firstPart.concat(newTour).concat(secondPart);
            }
            travel.push(tour)
         }else if(nameCommand === 'Remove Stop'){
            let startIndex = Number(commandTour[1]);
            let endIndex = Number(commandTour[2]);
            if(startIndex >= 0 && tour.length > startIndex && endIndex >= 0 &&
            tour.length > endIndex && startIndex <= endIndex){
              let end = Number(endIndex) + 1;
               let first =  tour.slice(0,startIndex);
               let second = tour.slice(end);
              tour = first + second;
            
            }
            travel.push(tour);
         }else if (nameCommand === 'Switch'){
            let oldString = commandTour[1];
            let newString = commandTour[2];
            if(tour.includes(oldString)){
                tour = tour.replace(oldString,newString)
            }
                
            travel.push(tour);
                
            }
            
         
         
        command = input.shift()
}
 
    console.log(travel.join('\n'));
    console.log(`Ready for world tour! Planned stops: ${tour}`);
}

worldTours((["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]))