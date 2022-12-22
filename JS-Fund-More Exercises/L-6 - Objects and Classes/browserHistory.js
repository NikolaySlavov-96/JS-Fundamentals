function browserHistory(objInf , arrInfo){
    
    let nameBrowser = objInf['Browser Name'];
    let openTabs = objInf['Open Tabs'];
    let recentlyClosed = objInf['Recently Closed'];
    let browserLog = objInf['Browser Logs'];

    // console.log(openTabs)
    // console.log(recentlyClosed)
    // console.log(browserLog)

    arrInfo.forEach(element => {
        let [command , name] = element.split(` `);
        
        if(openTabs.includes(name) && command === 'Close') {
            let index = openTabs.indexOf(name);

            openTabs.splice(index, 1);
            recentlyClosed.push(name);
            browserLog.push(element);
        }

        if(command === 'Open') {

            openTabs.push(name);
            browserLog.push(element)
        }

        if(element === 'Clear History and Cache') {
            openTabs = [];
            recentlyClosed = [];
            browserLog = [];
        }
    });
    
    console.log(nameBrowser);
    console.log(`Open Tabs: ${openTabs.join(`, `)}`)
    console.log(`Recently Closed: ${recentlyClosed.join(`, `)}`)
    console.log(`Browser Logs: ${browserLog.join(`, `)}`)

}

browserHistory({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)