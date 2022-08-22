const day = document.querySelector('.day')
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const startBtn = document.querySelector('.start')

const endDate = new Date('2023-01-01 00:00:00') // Создаем конечную дату
let currentDate = new Date() // Создаем текущую дату
let date = Math.floor((endDate.getTime() - currentDate.getTime()) / 1000) // Получаем разницу между датами иделим на 1000, чтобы получить секунды




function timer() {
    let dateLeft = date
    let dateTemp = 0
    dateTemp = Math.floor(dateLeft / (24 * 60 * 60))
    dateLeft -= dateTemp * 24 * 60 * 60
    day.innerHTML = dateTemp

    dateTemp = Math.floor(dateLeft / (60 * 60))
    dateLeft -= dateTemp * 60 * 60
    if (dateTemp < 10) hour.innerHTML = '0' + dateTemp
    else hour.innerHTML = dateTemp

    dateTemp = Math.floor(dateLeft / 60)
    dateLeft -= dateTemp * 60
    if (dateTemp < 10) minute.innerHTML = '0' + dateTemp
    else minute.innerHTML = dateTemp

    dateTemp = Math.floor(dateLeft)
    if (dateTemp < 10) second.innerHTML = '0' + dateTemp
    else second.innerHTML = dateTemp

    date--
}

setInterval(timer, 1000)

// function inputDate(){
//     let dateInput = document.querySelector('.date__end').addEventListener('change', () => {
//         let input = this.value;
//         let dateEntered = new Date(input);
//         console.log(dateEntered)
//     })
// }
// inputDate()



startBtn.addEventListener('click', () => {
    let dateInput = document.querySelector('.date__end').addEventListener('input', () => {
        let input = dateInput.value
        console.log(input)
    })
})
