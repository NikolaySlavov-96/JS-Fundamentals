function comments(array){

    let storeUsers = {};
    let articleNames = {};

    array.forEach(element => {

        if(element.includes(`user`)){
            let [text , users] = element.split(` `);
            storeUsers[users] = [];
        } else if(element.includes(`article`)){
            let [text , articleName] = element.split(` `);
            articleNames[articleName] = [];
        } else if(element.includes(`posts on`)){
            let [user , allComment] = element.split(` posts on `);
            let [articleName , comment] = allComment.split(`: `);

            if(storeUsers.hasOwnProperty(user) && articleNames.hasOwnProperty(articleName)){
                let [titleComment , contentComment] = comment.split(`, `)
                articleNames[articleName].push([user , titleComment , contentComment]);
            }
        }
    });

    let sortObject = Object.entries(articleNames).sort((a , b) => b[1].length - a[1].length)

    for (const line of sortObject) {
        console.log(`Comments on ${line[0]}`)
        let sortUsers = line[1].sort((a , b) => a[0].localeCompare(b[0]));
        sortUsers.forEach(el => console.log(`--- From user ${el[0]}: ${el[1]} - ${el[2]}`))
    }
}

comments(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 
'article Bobby', 'article Steven', 'user Liam', 'user Henry', 
'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run'
, 'someUser posts on Movies: Like'])