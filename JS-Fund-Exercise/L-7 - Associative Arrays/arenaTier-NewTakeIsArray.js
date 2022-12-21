function arenaTier(input){

    let command = input.shift();

    let skillObject = {};

    while(command !== 'Ave Cesar'){

        if(command.includes(`->`)){
            let [nameGladiatror , skill ,skillPoint] = command.split(` -> `);

            if(!skillObject.hasOwnProperty(nameGladiatror)){
                skillObject[nameGladiatror] = {};
            }
            if(!skillObject[nameGladiatror].hasOwnProperty(skill)){
                skillObject[nameGladiatror][skill] = skillPoint;
            }
            
            let oldPoint = skillObject[nameGladiatror][skill];

            if(oldPoint < skillPoint){
                skillObject[nameGladiatror][skill] = skillPoint;
            }
        } else if(command.includes(`vs`)){
            let [firstGladiator , secondGladiator] = command.split(` vs `);

            if(skillObject.hasOwnProperty(firstGladiator) && skillObject.hasOwnProperty(secondGladiator)){
                for (const skills in skillObject[firstGladiator]) {
                    if(skillObject[secondGladiator].hasOwnProperty(skills)){
                        let skillA = skillObject[firstGladiator][skills];
                        let skillB = skillObject[secondGladiator][skills];

                        if(skillA < skillB){
                            delete skillObject[firstGladiator];
                        } else if(skillA > skillB) {
                            delete skillObject[secondGladiator];
                            // delete skillObject[secondGladiator][skills]; - delete in second Objects
                        }

                    }
                }
            }
        }
        command = input.shift();
    }
    
    let createSum = Object.entries(skillObject);
    let newArr = [];
    createSum.forEach(el => {
        let [name , skillAndSkore] = el;
        let skore = Object.values(skillAndSkore).map(a => Number(a)).reduce((a , b) => a + b);
        newArr.push([name , skore]);
    })
    newArr.sort((a , b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    newArr.forEach(el => {
        [nameGladiator , maxPoint] = el;
        
        console.log(`${nameGladiator}: ${maxPoint} skill`)
        printOther(nameGladiator)
    });
    
    function printOther(name){

        createSum.forEach(el => {
    
            let [nameGladiator , skill] = el;

            if(name === nameGladiator){
                let sortSkill = Object.entries(skill).sort((a , b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        
                sortSkill.forEach(el => {
                    let [skill , point] = el;
                    console.log(`- ${skill} <!> ${point}`);
                });
            };
        });
    }
}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ])

// arenaTier([
//     'Peter -> Duck -> 400',
//     'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200',
//     'Gladius -> Support -> 250',
//     'Gladius -> Shield -> 250',
//     'Peter vs Gladius',
//     'Gladius vs Julius',
//     'Gladius vs Maximilian',
//     'Ave Cesar'
//     ])