function extractEmails(textEdit){

    let patternEmeil = /\s[a-z0-9]+[.\-_]?[a-z0-9]+@[a-z]+[\.|-]?[a-z]+\.[a-z]+[\.]?[a-z]+/g;

    let results = textEdit.match(patternEmeil);

    for(const result of results){
        console.log(result)
    }
}

// extractEmails('Please contact us at: support@github.com.')
