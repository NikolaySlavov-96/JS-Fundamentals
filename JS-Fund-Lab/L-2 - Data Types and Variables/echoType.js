function echoType(nameSt){
    
    console.log(typeof(nameSt));
    
    let resultSum = nameSt ? nameSt : "Parameter is not suitable for printing";
    console.log(resultSum)
}

echoType(18)