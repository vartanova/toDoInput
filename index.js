
let dropDown = document.getElementById('dropDown')
let inputText = document.getElementById('inputText')
let saveBtn = document.getElementById('saveText')
let clearBtn = document.getElementById('clearText')

function saveInputValue (value) {
    if (inputText.value != "") {
        let flag = false
        for (let i = 0; i < dropDown.options.length; i++) {
            if (dropDown.options[i].value === value) {
                flag = true
                break
            }
        }
        if (!flag) {
            let newElem = document.createElement('option')
            newElem.value = value
            newElem.textContent = value
            dropDown.prepend(newElem)
        } else {inputText.value = 'Вы уже это вводили'
        inputText.style.color = 'red'
        }
    }
}
  

function clearText () {
    inputText.value = ""
}
clearBtn.onclick = clearText
saveBtn.onclick = function () {saveInputValue(inputText.value)}