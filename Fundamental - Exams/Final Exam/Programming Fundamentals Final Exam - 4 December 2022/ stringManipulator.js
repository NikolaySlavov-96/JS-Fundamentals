function stringManipulator(array){

    let manupylationWord = array.shift();

    let instruction = array.shift();

    while(instruction !== 'End'){

        const [command , ...other] = instruction.split(` `);

        switch(command){
            case 'Translate': translate(other); break;
            case 'Includes': includes(other); break;
            case 'Start': start(other); break;
            case 'Lowercase': lowercase(); break;
            case 'FindIndex': findIndex(other); break;
            case 'Remove': remove(other); break;
        }

        instruction = array.shift();
    }

    function translate(array){

        const [oldLetter , newLetter] = array;

        while(manupylationWord.includes(oldLetter)){
            manupylationWord = manupylationWord.replace(oldLetter , newLetter);
        }
        console.log(manupylationWord);
    }

    function includes(array){

        const searchLetter = array[0];
        let printResult = '';

        if(manupylationWord.includes(searchLetter)){
            printResult = 'True';
        } else {
            printResult = 'False';
        }

        console.log(printResult);
    }

    function start(array){

        const startLetter = array[0];
        let printResult = '';

        if(manupylationWord.startsWith(startLetter)){
            printResult = 'True';
        } else {
            printResult = 'False';
        }

        console.log(printResult)
    }

    function lowercase(){

        manupylationWord = manupylationWord.toLowerCase();

        console.log(manupylationWord)
    }

    function findIndex(array){

        const endLetter = array[0];

        let indexOfLetter = manupylationWord.lastIndexOf(endLetter);

        console.log(indexOfLetter)
    }

    function remove(array){

        let [beginIndex , endIndex] = array;
        beginIndex = Number(beginIndex);
        endIndex = Number(endIndex)

        let beforEdit = manupylationWord.substring(beginIndex , beginIndex + endIndex);
        manupylationWord = manupylationWord.replace(beforEdit , "")

        console.log(manupylationWord)
    }
}

stringManipulator(["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])