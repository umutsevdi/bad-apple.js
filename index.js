const chalk = require('chalk');
const fs = require('fs');
const width = 36;
const height = 28;
const frames = 4382;
const fps = 24;
display();

async function display() {
    var badApple = JSON.parse(fs.readFileSync("data.json").toString());

    for (let frameIndex = 0; frameIndex < frames; frameIndex++) {
        var frameMatrix = badApple[frameIndex];
        for (let i = 0; i < height; i++)
            renderRow(frameMatrix[i]);
        await new Promise(resolve => setTimeout(resolve, 1000 / fps));
        console.clear();
    }

}

function renderRow(row) {
    let text = "";
    // for ascii based
    // for (i = 0; i < width; i++) {
    //     text += (row[i] == 0 ? "  " : "* ");
    // }
    for (i = 0; i < width; i++) {
        if (row[i])
            text += chalk.white.inverse("  ");
        else
            text += "  ";
    }
    console.log(text);
}


