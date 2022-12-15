function login(input){

    let index = 0;
    let loginName = input[index++];
    let password = input[index++];

    let counter = 0;

    
    for(let n = 1; n <= 4; n++){
        let splitString = password.split("");
        let reverse = splitString.reverse()
        let join = reverse.join("")
        
        if(loginName === join){
            console.log(`User ${loginName} logged in.`)
            counter = 0;
            break;

        } else if(counter < 3) {
            console.log(`Incorrect password. Try again.`)
            counter++;
        }
        if(n === 4){
            console.log(`User ${loginName} blocked!`)
        }
        password = input[index++];
    }
}

login(['sunny','rainy','cloudy','sunny','not sunny'])
login(['Acer','login','go','let me in','recA'])
login(['momo','omom'])