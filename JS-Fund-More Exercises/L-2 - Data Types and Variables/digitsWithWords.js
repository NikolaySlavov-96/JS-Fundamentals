function digitsWithWords(letter){

    let prints = 0;

    switch(letter){
        case 'one': prints = 1; break;
        case 'two': prints = 2; break;
        case 'three': prints = 3; break;
        case 'four': prints = 4; break;
        case 'five': prints = 5; break;
        case 'six': prints = 6; break;
        case 'seven': prints = 7; break;
        case 'eight': prints = 8; break;
        case 'nine': prints = 9; break;
        case 'zero': prints = 0; break;
    }
    console.log(prints)
}

digitsWithWords('nine')