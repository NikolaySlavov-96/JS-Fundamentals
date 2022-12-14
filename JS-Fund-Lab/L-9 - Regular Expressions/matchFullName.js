function matchFullName(text){

    let patternLetter = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let resultPrint = text.match(patternLetter);

    console.log(resultPrint.join(` `))
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")