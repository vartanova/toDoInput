const dropDown = document.getElementById('dropDown')
const inputText = document.getElementById('inputText')
const saveBtn = document.getElementById('saveText')
const clearBtn = document.getElementById('clearText')
const selectOption = document.getElementById("idOption")
const deleteBtn = document.getElementById('deleteText')
const changeBtn = document.getElementById('changeText')


function clearText () {
    inputText.value = ""
}

const listsFilm = ['Harry Potter', 'Charmed']

function addFilm (film) { //вынесла в отдельную функцию создание нового фильма
    const option = document.createElement('option')
    option.value = film
    option.textContent = film
    dropDown.appendChild(option)
    dropDown.value = film // чтоб при создании элемента в дропдауне автоматически выбирался новый созданный фильм
    inputText.value = option.value // меняю значение в инпуте на новое
}
listsFilm.forEach(addFilm) //добавляю в дропдаун все элементы списка

function addNewFilm () {
    let currInput = inputText.value // значение инпута
    if (currInput === '') { //если инпут пустой
        alert('Введите название фильма')
        return
    }
    let filmIncludes = listsFilm.includes(currInput) //вынесла в отдельную переменную проверку значения инпута в списке фильмов
    if (!filmIncludes) { //если введенного фильма не нашлось, то добавляю новый
        listsFilm.push(currInput)
        addFilm(currInput)
        dropDown.value = currInput // меняю значение дропдауна на новый созданный фильм
    } else { //если такой фильм нашелся в списке, то 
        alert('Вы это уже вводили')
    }
}
  
function selectValue () {
    let indexOption = dropDown.selectedIndex
    if (indexOption !== -1) {
        inputText.value = dropDown.options[indexOption].value //здесь соединяю инпут с конкретным элементом в дропдауне и применяю на кнопку onchange,
    } //чтоб когда мы изменяли выбор в дропдауне, изменялся текст и в инпуте
}
function deleteValue () {
    const dropDownElemSelected = dropDown.value
    if (!dropDownElemSelected) {
        alert('Выберите фильм для удаления')
    }

    for (let i = 0; i < listsFilm.length; i++) {
        if (dropDown.options[i].value === dropDownElemSelected) {
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
    for (let i = 0; i < listsFilm.length; i++) {
        if (dropDown.options[i].value === oldInputValue ) { //смотрю, если такой элемент уже существует, то его обновляю
            dropDown.options[i].value = currInputValue
            dropDown.options[i].textContent = currInputValue
        }
    }
}



dropDown.onchange = selectValue
saveBtn.addEventListener('click', addNewFilm)
clearBtn.addEventListener('click', clearText)
deleteBtn.addEventListener('click', deleteValue)
changeBtn.addEventListener('click', changeValue)
