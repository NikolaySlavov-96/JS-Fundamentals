function softUniReception(arrayOfWorkAndQuestions){

    let efficiencyStaff = Number(arrayOfWorkAndQuestions[0]) + Number(arrayOfWorkAndQuestions[1]) + Number(arrayOfWorkAndQuestions[2])
    let studentQuestions = Number(arrayOfWorkAndQuestions[arrayOfWorkAndQuestions.length - 1]);
    
    let hoursNeedToAnswer = 0;

    let isAllAnswerQuestion = true;
    if(studentQuestions === 0){
        isAllAnswerQuestion = false;
    }

    while(isAllAnswerQuestion){

        hoursNeedToAnswer++;
        if(hoursNeedToAnswer % 4 !== 0){
            studentQuestions -= efficiencyStaff;
        }

        if(studentQuestions <= 0){
            isAllAnswerQuestion = false;
            break;
        }
    }
    // console.log(studentQuestions)
    console.log(`Time needed: ${hoursNeedToAnswer}h.`)
}

// softUniReception(['5','6','4','59'])
// softUniReception(['1','2','3','45'])
// softUniReception(['3','2','5','29'])
// softUniReception(['3','2','5','1'])
// softUniReception(['1','1','1','9'])
// softUniReception(['1','1','1','10'])
softUniReception(['1','1','1','0'])