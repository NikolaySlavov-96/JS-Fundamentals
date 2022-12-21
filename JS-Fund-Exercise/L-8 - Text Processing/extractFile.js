function extractFile(path){

    let fileDirectory = path.split(`\\`);

    let nameAndExtension = fileDirectory.pop();
    let middlePointIndex = nameAndExtension.lastIndexOf(`.`);

    let nameFile = nameAndExtension.substring(0 , middlePointIndex);
    let nameExtension = nameAndExtension.substring(middlePointIndex + 1);

    console.log(`File name: ${nameFile}`)
    console.log(`File extension: ${nameExtension}`)
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')