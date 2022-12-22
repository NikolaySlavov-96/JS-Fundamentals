function softUniStudents(array){

    let coursesObj = {};
    let usersObject = {};

    array.forEach(courses => {

        if(courses.includes(`:`)){
            let [course , places] = courses.split(`: `);
            places = Number(places)
            if(!coursesObj.hasOwnProperty(course)){
                coursesObj[course] = {places: 0 , counter: 0};
            }
            coursesObj[course].places += places;
        }
    });

    array.forEach(users => {
        if(users.includes(`with`)){
            let [name , all] = users.split(` with email `);
            let [user , credits] = name.split(`[`);
            credits = Number(credits.split(`]`)[0]);
            let [email , cours] = all.split(` joins `);

            if(coursesObj.hasOwnProperty(cours)){
                if(coursesObj[cours].places > 0){
                    coursesObj[cours].places--; 
                    coursesObj[cours].counter++;
                    if(usersObject.hasOwnProperty(user)){
                        let oldUserData = usersObject[user].cours1 = cours;
                        // cours = (`${oldUserData} , ${cours}`);
                    } else {
                        usersObject[user] = {credits , email , cours};
                    }
                }
            }
        }
    });
    let sortsLanguage = Object.entries(coursesObj).sort((a , b) => b[1].counter - a[1].counter);
    let sortUsers = Object.entries(usersObject).sort((a , b) => b[1].credits - a[1].credits)
    // JSCore: 0 places left
    // --- 105: user45, user45@user.com
    
    for (const line of sortsLanguage) {
        console.log((`${line[0]}: ${line[1].places} places left`));
        sortUsers.forEach(users => {
            let userFile = users[1];
            
            if(line[0] === userFile.cours || line[0] === userFile.cours1){
                console.log(`--- ${userFile.credits}: ${users[0]}, ${userFile.email}`)
            }
        })
    }
}

// softUniStudents(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 
//     'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 
//     'user13[50] with email user13@user.com joins JSCore', 
//     'user1[25] with email user1@user.com joins JSCore', 
//     'user8[18] with email user8@user.com joins C#Advanced', 
//     'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 
//     'user11[3] with email user11@user.com joins JavaBasics',
//     'user45[105] with email user45@user.com joins JSCore', 
//     'user007[20] with email user007@user.com joins JSCore', 
//     'user700[29] with email user700@user.com joins JSCore', 
//     'user900[88] with email user900@user.com joins JSCore'])

softUniStudents(['JavaBasics: 15',
'user1[26] with email user1@user.com joins JavaBasics',
'user2[36] with email user11@user.com joins JavaBasics',
'JavaBasics: 5',
'C#Advanced: 5',
'user1[26] with email user1@user.com joins C#Advanced',
'user2[36] with email user11@user.com joins C#Advanced',
'user3[6] with email user3@user.com joins C#Advanced',
'C#Advanced: 1',
'JSCore: 8',
'user23[62] with email user23@user.com joins JSCore'])