
const form = document.getElementById('form')
const axios = require('axios')
const blogArea = document.querySelector('#blog-area')
const render = require('./render.js')



axios.get('https://powerful-castle-44228.herokuapp.com/blogs')
    .then(function (data) {
        let result = data.data.result
        blogArea.innerHTML = render.display(result)

    })


form.addEventListener('submit', (e) => {
    e.preventDefault()
    axios.post('https://powerful-castle-44228.herokuapp.com/blogs', {
        title: e.target.title.value,
        content: e.target.content.value
    })
        .then(function (data) {
            let result = data.data.result
            blogArea.innerHTML = render.display(result)

        })

})