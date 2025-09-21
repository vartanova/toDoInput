let dropDown = document.getElementById('dropDown')
let inputText = document.getElementById('inputText')
let saveBtn = document.getElementById('saveText')
let clearBtn = document.getElementById('clearText')
let selectOption = document.getElementById("idOption")

function clearText () {
    inputText.value = ""
}

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
            newElem.id = 'idOption'

        } else {inputText.value = 'Вы уже это вводили'}
    }
}
  
function selectValue () {
    let indexOption = dropDown.selectedIndex
    if (indexOption !== -1) {
        inputText.value = dropDown.options[indexOption].value
    }
}

saveBtn.onclick = function () {saveInputValue(inputText.value)}
dropDown.onchange = selectValue
clearBtn.onclick = clearText
