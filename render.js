const edit = document.getElementById('edit')
const remove = document.getElementById('remove')


const display = (array)=> {
    let result = ``
    for (let ele of array) {
        
        result += `<div><strong data-id="${ele.id}">${ele.title}</strong><br><p data-id=${ele.id}>${ele.content}</p><br> 
        <input class="button-is-small update"  type="submit" value="edit" data-id="${ele.id}">
        <input class="button-is-smal remove"  type="submit" value="delete" data-id="${ele.id}"><br></div>`
    }
    return result
}






module.exports = { display }