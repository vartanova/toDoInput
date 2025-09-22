let dropDown = document.getElementById('dropDown')
let inputText = document.getElementById('inputText')
let saveBtn = document.getElementById('saveText')
let clearBtn = document.getElementById('clearText')
let selectOption = document.getElementById("idOption")
let deleteBtn = document.getElementById('deleteText')
let changeBtn = document.getElementById('changeText')


function clearText () {
    inputText.value = ""
}

function saveInputValue (value) {
    if (inputText.value !== "") {
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
    for (let i = 0; i < dropDown.options.length; i++) {
        if (dropDown.options[i].value === 'Вы уже это вводили') {
            dropDown.remove(i)
            inputText.value = ""
        }
    }
}
  
function selectValue () {
    let indexOption = dropDown.selectedIndex
    if (indexOption !== -1) {
        inputText.value = dropDown.options[indexOption].value
    }
}
function deleteValue () {
    let inputValue = inputText.value

    for (let i = 0; i < dropDown.options.length; i++) {
        if (dropDown.options[i].value === inputValue) {
            dropDown.remove(i)
            inputText.value = ""
        }
    }
}


let oldInputValue = ''
inputText.onfocus = function () {
    oldInputValue = this.value //храним (страое значение) значение при фокусе, те когда поместили в него значение из дропдауна
}

function changeValue () {
    let currInputValue = inputText.value //здесь у нас новое значение
    for (let i = 0; i < dropDown.options.length; i++) {
        if (dropDown.options[i].value === oldInputValue ) { //смотрю, если такой элемент уже существует, то его обновляю
            dropDown.options[i].value = currInputValue
            dropDown.options[i].textContent = currInputValue
        }
    }

}


saveBtn.onclick = function () {saveInputValue(inputText.value)}
dropDown.onchange = selectValue
clearBtn.onclick = clearText
deleteBtn.onclick = deleteValue
changeBtn.onclick = changeValue
