function armies(allInforArr) { 

    let storeArmy = {};
    
    for (const line of allInforArr) {

        if(line.includes('arrives')){
            let [leaderArmy] = line.split(` arrives`)
            if(!storeArmy.hasOwnProperty(leaderArmy)){
              storeArmy[leaderArmy] = [0 ,];
            }
        } else if(line.includes(`defeated`)) {
            let [leaderArmy] = line.split(` defeated`);
            if(storeArmy.hasOwnProperty(leaderArmy)){
                delete storeArmy[leaderArmy];
            }
        } else if(line.includes(`:`)){
            let [leaderName , arr] = line.split(`: `)
            if(storeArmy.hasOwnProperty(leaderName)){
                let [nameArmy , counter] = arr.split(`, `);
                counter = Number(counter);
                storeArmy[leaderName].push([nameArmy , counter] );
            }
        } else if(line.includes(`+`)){
            let [name , counArm] = line.split(` + `);
            counArm = Number(counArm);
            
            for (const line in storeArmy) {
                storeArmy[line].forEach(el => {

                    if(el[0] === name){
                        let temporary = el[1];
                        let sum = temporary + counArm;
                        el[1] = sum;
                    }
                });
                
            }
        }
    }

    for (const keys in storeArmy) {
        let term = storeArmy[keys].shift();
        storeArmy[keys].forEach(el => {

            term += el[1];
        });
        storeArmy[keys].unshift(term)
    }

    let sortedObj = Object.entries(storeArmy).sort((a , b) => b[1][0] - a[1][0]);

    sortedObj.forEach(el => {
        let [name , arr] = el;
        let firstNumber = arr.shift()
        console.log(`${name}: ${firstNumber}`);

        let sortSmallArr = arr.sort((a , b) => b[1] - a[1]);

        sortSmallArr.forEach(second => console.log(`>>> ${second[0]} - ${second[1]}`))
    });
}

armies(['Rick Burr arrives',//
'Findlay arrives',//
'Rick Burr: Juard, 1500',//
'Wexamp arrives',//
'Findlay: Wexamp, 34540',//
'Wexamp + 340', 
'Wexamp: Britox, 1155', 
'Wexamp: Juard, 43423'])
// armies(['Rick Burr arrives',//
// 'Rick Burr: Juard, 1500',//
// 'Juard + 340'
// ])
// armies(['Rick Burr arrives', 
// 'Rick Burr: Juard, 50000', 
// 'Juard + 1350', 
// 'Britox + 4500', 'Porter arrives', 
// 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 
// 'Porter: Retix, 3205'])
