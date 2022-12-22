function deserializeString(arr){

    let comm = arr.shift();
    let finalArr = [];

    while(comm !== 'end'){
        let [word , edit] = comm.split(`:`);
        let number = edit.split(`/`)
        
        for(let n = 0; n < number.length; n++){

            let currentSet = Number(number[n]);
            finalArr[currentSet] = (word);

        }
        comm = arr.shift();
    }
    console.log(finalArr.join(``))
}

deserializeString(['a:0/3/5/11',
'v:1/4',
'j:2',
'm:6/9/15',
's:7/13',
'd:8/14',
'c:10',
'l:12',
'end'])