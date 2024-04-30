'use strict';

const ques = document.querySelector('.ques');

const input = ques.getElementsByTagName('input');

const submit = document.querySelector(".submit");

let riasec = { "R": 0, "I": 0, "A": 0, "S": 0, "E": 0, "C": 0 }

let topThree = [[]];

for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('click', function () {
        let count = riasec[this.name]
        if (count < 7 && this.checked) {
            switch (this.name) {
                case "R":
                    riasec.R += 1;
                    document.getElementById("R").innerText = riasec.R;
                    this.setAttribute("disabled", true);
                    break;
                case "I":
                    riasec.I += 1;
                    document.getElementById("I").innerText = riasec.I;
                    this.setAttribute("disabled", true);
                    break;
                case "A":
                    riasec.A += 1
                    document.getElementById("A").innerText = riasec.A;
                    this.setAttribute("disabled", true);
                    break;
                case "S":
                    riasec.S += 1
                    document.getElementById("S").innerText = riasec.S;
                    this.setAttribute("disabled", true);
                    break;
                case "E":
                    riasec.E += 1;
                    document.getElementById("E").innerText = riasec.E;
                    this.setAttribute("disabled", true);
                    break;
                case "C":
                    riasec.C += 1;
                    document.getElementById("C").innerHTML = riasec.C;
                    this.setAttribute("disabled", true);
                    break;
            }
        }
        console.log(riasec)
    })
}

submit.addEventListener('click', function () {
    let entries = Object.entries(riasec);

    entries.sort((a, b) => b[1] - a[1]);
    console.log(entries);

    topThree = entries.slice(0, 3);

    window.location.href = `result.html?topThree=${JSON.stringify(topThree)}`;
});