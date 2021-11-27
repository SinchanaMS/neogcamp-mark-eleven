var dateOfBirth = document.querySelector("#date-of-birth")
var luckyNumber = document.querySelector("#lucky-number")
var checkLuckBtn = document.querySelector("#check-luck-btn")
var outputDiv = document.querySelector("#output")
var x = document.createElement("img");
var y = document.createElement("img");

checkLuckBtn.addEventListener("click", function luckClickHandler() {
    x.style.display="none"
    y.style.display="none"
    console.log(dateOfBirth.value, luckyNumber.value)
    var dOBNoHyphen = dateOfBirth.value.replaceAll("-", "")


    sum = 0
    for (var i = 0; i < dOBNoHyphen.length; i++) {
        sum = sum + Number(dOBNoHyphen.charAt(i))
    }

    console.log(sum)


    if (sum % luckyNumber.value === 0) {
        outputDiv.innerText = "Yayyy! You're lucky!!"
        
        x.setAttribute("src", "/images/celebrate-happy.gif");
        document.body.appendChild(x);
        x.style.display="block"

    } else {
        outputDiv.innerText = "Oops! Not so lucky!!"
        
        y.setAttribute("src", "/images/sad.gif");
        document.body.appendChild(y);
        y.style.display="block"
    }

   })