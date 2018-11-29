

const axios = require('axios')
const blogArea = document.querySelector('#blog-area')
const render = require('./render.js')
const form = document.getElementById('form')
let currentId

const addEventListeners = () => {
    const removeArray = document.querySelectorAll('.remove')
    const editArray = document.querySelectorAll('.update')

    for (ele of removeArray) {
        ele.addEventListener('click', (e) => {

            console.log("delete event listener triggered")

            axios.delete(`https://powerful-castle-44228.herokuapp.com/blogs/${e.target.getAttribute("data-id")}`)
                .then(function (data) {
                    let result = data.data.result
                    blogArea.innerHTML = render.display(result)

                    addEventListeners()



                })
        })
    }

    for (ele of editArray) {
        ele.addEventListener('click', (e) => {
            currentId = e.target.getAttribute('data-id')

            const title = document.querySelector(`strong[data-id="${e.target.getAttribute('data-id')}"]`)
            const titleArea = document.querySelector('input.title')
            titleArea.value = title.textContent

            const content = document.querySelector(`p[data-id="${e.target.getAttribute('data-id')}"]`)
            const contentArea = document.querySelector('.content')
            contentArea.value = content.textContent

            form.removeEventListener('submit', postBlog)
            form.addEventListener('submit', editBlog)

        })
    }
}


const renderBlogs = () => {
    axios.get('https://powerful-castle-44228.herokuapp.com/blogs')
        .then(function (data) {
            let result = data.data.result
            blogArea.innerHTML = render.display(result)

            addEventListeners()

        })
}

renderBlogs()

const postBlog = (e) => {
    e.preventDefault()
    axios.post('https://powerful-castle-44228.herokuapp.com/blogs', {
        title: e.target.title.value,
        content: e.target.content.value
    })
        .then(function (data) {
            let result = data.data.result
            blogArea.innerHTML = render.display(result)
            addEventListeners()
        })

}

const editBlog = (e) => {
    e.preventDefault()
    axios.put(`https://powerful-castle-44228.herokuapp.com/blogs/${currentId}`, {
        title: e.target.title.value,
        content: e.target.content.value
    })
        .then(function (data) {
            renderBlogs()
            addEventListeners()
            form.removeEventListener('submit', editBlog)
            form.addEventListener('submit', postBlog)

        })

}

form.addEventListener('submit', postBlog)





