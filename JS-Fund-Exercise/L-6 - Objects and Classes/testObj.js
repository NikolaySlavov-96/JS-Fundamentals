function solve(input){

    let obj = {};

    let print = [];

    for(let n = 0; n < input.length; n+= 3){

        const currentName = input[n];

        obj['name'] = currentName

        print.push(obj)

    }
    for (const row of print) {
        
        console.log(row)
    }
}

solve(['Nikolay' , 'Slavov' , '26' , 'Alaula' , 'aluals' , '50']);