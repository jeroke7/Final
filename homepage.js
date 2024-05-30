const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const nav = document.querySelector('.nav')
const angleClose = document.getElementById('0')
const angleOpen = document.getElementById('1')
const angle2Close = document.getElementById('2')
const angle2Open = document.getElementById('3')
const dropItemList = document.querySelector('.dropitms')
const dropItem2List = document.querySelector('.dropitms2')

//small screen open/close menu
openBtn.addEventListener('click', () => {
    nav.style.display = 'flex'
    openBtn.style.display = 'none'
    closeBtn.style.display = 'flex'
})

closeBtn.addEventListener('click', () => {
    nav.style.display = 'none'
    openBtn.style.display = 'block'
})

//small screen dropdowns 1
angleOpen.addEventListener('click', () => {
    angleClose.style.display = 'flex'
    dropItemList.style.display = 'flex'
    angleOpen.style.display = 'none'
})
angleClose.addEventListener('click', () => {
    angleClose.style.display = 'none'
    dropItemList.style.display = 'none'
    angleOpen.style.display = 'flex'
})

//small screen dropdowns 2
angle2Open.addEventListener('click', () => {
    angle2Close.style.display = 'flex'
    dropItem2List.style.display = 'flex'
    angle2Open.style.display = 'none'
})
angle2Close.addEventListener('click', () => {
    angle2Close.style.display = 'none'
    dropItem2List.style.display = 'none'
    angle2Open.style.display = 'flex'
})