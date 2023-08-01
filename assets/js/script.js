const addBtnEl = document.getElementById('addBtn')
const userListEl = document.getElementById('userList')
const liEl = document.createElement('li')
const addToListEl = document.getElementById('addToList')
document.title = 'list'
let username = []
// username.push('admin04')
// username.pop() 
// username.unshift('admin00')
// username.shift()
// console.log(username)
addBtnEl.addEventListener('click', function(){
    username = []
    let newInput = addToListEl.value
        username.push(newInput)
    for (let i in username){
        userListEl.innerHTML += 
        `<li style="margin-left:20px">${username[i]}</li>`
    }
    addToListEl.value = ''
    console.log(username)
})