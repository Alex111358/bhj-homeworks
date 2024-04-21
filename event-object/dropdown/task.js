function clickMenu (){
    document.querySelector('.dropdown__list').classList.toggle('dropdown__list_active')  
}
function closeMenu (){
    document.querySelector('.dropdown__list').classList.remove('dropdown__list_active')  
}
const value = document.querySelector('.dropdown__value')
value.addEventListener('click',clickMenu )
var machineCode = Array.from(document.querySelectorAll('.dropdown__item'))
machineCode.forEach((item, index) =>{
    item.onclick = () => {
        closeMenu()
        value.textContent = machineCode[index].textContent
        return false
}
})