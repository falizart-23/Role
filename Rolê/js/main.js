const btn = document.getElementById('btn')
const ans = document.getElementById('ans')
const attempts = document.getElementById('attempts')
const fdp = document.getElementById('fdp')
const roleList = ['Ringada, Vapo 🍕', 'Don Pastelo ☠️☠️', 'Sabores do (Norte invertido = Sul) 🖕🏼', 'Bikezada monstra 🚴', 'Fut, apenas ⚽', 'Basketzada 🏀', 'Shopping 🛍️ 🎀', 'filme qlqr spa (Shrek 5 🧌)', 'Andar e conversar, FDS 🧟',]
let i = 0

btn.addEventListener('click', function () {
    i += 1
    let size = roleList.length - 1
    let finalSize = Math.floor(Math.random() * (size - 0 + 1)) + 0
    console.log(finalSize)
    let finalAns = roleList[finalSize]
    ans.innerHTML = finalAns
    attempts.innerHTML = i
    if (i >= 10) {
        attempts.style.color = 'orange'
        fdp.innerHTML = 'porra, o cara já passou de 10 tentativas ☠️☠️☠️☠️'
        fdp.style.padding = '10px'
    }
    if (i >= 15) {
        attempts.style.color = 'red'
        fdp.innerHTML = ' Deu né??? 15 já tá bom 🖕🖕🖕'
        btn.style.display = 'none'
        fdp.style.backgroundColor = 'red'
        fdp.style.color = '#fff'
        fdp.style.padding = '16px'
    }
})