
// write your code here
document.addEventListener('DOMContentLoaded',()=> {
    return fetch("http://localhost:3000/ramens")
    .then(response =>{
        return response.json()}).then(data=>{
            menuDetails(data[Math.ceil(Math.random()*10000000) % data.length])
            return updateMenu(data)
          })
        }
        )

function updateMenu(menuLists){
   // const menu = document.getElementById('ramen-menu')
    for(let menuList of menuLists){
        addImage(menuList)
        // console.log(menuList.image)
    }
}
function addImage(item){
    const menu = document.getElementById('ramen-menu')
    let img = document.createElement('img')
        img.addEventListener('click',e=>{
            menuDetails(item)

        })
        img.setAttribute('src',item.image)
        menu.appendChild(img)
}

function menuDetails(menuList){
            document.querySelector('.detail-image').setAttribute('src',menuList.image)
            document.querySelector('.name').textContent = menuList.name
            document.querySelector('.restaurant').textContent = menuList.restaurant
            document.querySelector('#rating-display').textContent = menuList.rating
            document.querySelector('#comment-display').textContent = menuList.comment
}

document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault()
    let formData = {
        name : e.target.name.value,
        restaurant : e.target.restaurant.value,
        image : e.target.image.value,
        rating : e.target.rating.value,
        comment : e.target.newComment.value
    }
    const fetchConfigure = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        },
        body : JSON.stringify(formData)   
    }
    // console.log(JSON.stringify(formData))
    fetch(" http://localhost:3000/ramens", fetchConfigure)
    .then(response=>{
        return response.json()
    }).then(data=>{
           addImage(data)    
        // console.log(data)
    })
    e.target.reset()
})

