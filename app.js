var dateOfBirth = document.querySelector("#date-of-birth")
var luckyNumber = document.querySelector("#lucky-number")
var checkLuckBtn = document.querySelector("#check-luck-btn")
var outputDiv = document.querySelector("#output")
var gifOneOutput = document.querySelector("#gif1")
var gifTwoOutput = document.querySelector("#gif2")
var imgOne = document.querySelector("#img1")

checkLuckBtn.addEventListener("click", function luckClickHandler() {

    gifOneOutput.style.display = "none"
    gifTwoOutput.style.display = "none"
    imgOne.style.display = "none"
    console.log(dateOfBirth.value, luckyNumber.value)
    var dOBNoHyphen = dateOfBirth.value.replaceAll("-", "")

    sum = 0
    for (var i = 0; i < dOBNoHyphen.length; i++) {
        sum = sum + Number(dOBNoHyphen.charAt(i))
    }


    if (dateOfBirth.value.length !== 0) {
        if (luckyNumber.value.length == "") {
            outputDiv.innerText = "Please enter valid input"
            imgOne.style.display = "block"
        } else {
            if (sum % luckyNumber.value === 0) {
                outputDiv.innerText = "Yayyy! You're lucky!!"
                gifOneOutput.style.display = "block"

            } else {
                outputDiv.innerText = "Oops! Not so lucky!!"
                gifTwoOutput.style.display = "block"
            }
        }

    } else {
        outputDiv.innerText = "Please enter valid input"
        imgOne.style.display = "block"
    }

})