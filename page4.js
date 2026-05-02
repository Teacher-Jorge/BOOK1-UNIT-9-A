const play = document.getElementById('play')

const word4 = document.getElementById('word4')

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')

play.addEventListener('click', function() {
    const video = document.getElementById('video').play()

})

input1.addEventListener('keyup', (e) => {
    if(input1.value === "Can") {
        input1.style.color = 'green'
        const audio = document.getElementById('right')
        audio.play()
        document.getElementById('input2').focus()
    }
})

input2.addEventListener('keyup', (e) => {
    if(input2.value === "see" || input2.value === "visit") {
        word4.style.backgroundColor = 'lime'
        word4.style.color = 'red'
        word4.style.boxShadow = 'none'
        input2.style.color = 'green'
        const audio = document.getElementById('right')
        audio.play()
        document.getElementById('input3').focus()
    }
})

input3.addEventListener('keyup', (e) => {
    if(input3.value === "cant" || input3.value === "can't") {
        input3.style.color = 'green'
        const audio = document.getElementById('right')
        audio.play()
        const next = document.getElementById('next')
        next.style.visibility = 'visible'
    }
})








