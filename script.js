let numOfButtons = document.querySelectorAll(".btn").length;
let string = "";
var switchBtn;
let a = 1;


document.querySelector(".on").addEventListener("click", function () {

    if (this.innerHTML == "ON") {
        switchBtn = true;
    }
    else {
        switchBtn = false;
    }

    if (a == 1) {
        calOnOff();
        a++;
    }

})


function calOnOff() {
    if (switchBtn == true) {

        for (let i = 0; i < numOfButtons; i++) {
            document.querySelectorAll(".btn")[i].addEventListener("click", buttonClick);

        }

        function buttonClick(e) {
            if (e.target.innerHTML == "=") {
                string = eval(string);
                document.querySelector(".input-screen").value = string;
            }
            else {
                string = string + e.target.innerHTML;
                document.querySelector(".input-screen").value = string;
            }

        }

        document.querySelector(".clear").addEventListener("click", function () {
            string = "";
            document.querySelector(".input-screen").value = string;
        })

        document.querySelector(".delete").addEventListener("click", function () {
            string = string.slice(0, -1);
            document.querySelector(".input-screen").value = string;
        })

    }
}







