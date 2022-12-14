function meetings(meetingArr){

    let meetingObg = {};

    for (const line of meetingArr) {

        let [day , name] = line.split(` `);

        if(meetingObg.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`)
            meetingObg[day] = name;
        }
    }
    for (const line in meetingObg) {

        console.log(`${line} -> ${meetingObg[line]}`);

    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])