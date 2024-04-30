'use strict';

const urlParams = new URLSearchParams(window.location.search);
const top = urlParams.get('topThree');
const topThree = JSON.parse(top);

console.log(topThree.length);

const content = ['R', 'I', 'A', 'S', 'E', 'C'];

for (let i = 0; i < topThree.length; i++) {
    if (!content.includes(topThree[i])) {
        document.querySelector(`.${topThree[i][0]}`).classList.toggle(`hide`);
    }
}

