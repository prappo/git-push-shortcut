#!/usr/bin/env node
const { exec } = require('child_process');
var date = new Date();
var command = 'git add . && git commit -m "Pushed at : '+date+'" && git push -u origin master';
// console.log(command);
exec(command, (err, stdout, stderr) => {
    if (err) {
        // node couldn't execute the command
        console.error(`Error: ${stderr}`);
        return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`Output : ${stdout} \n`);
    // console.log(`stderr: ${stderr}`);
});
