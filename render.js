const display = (array)=> {
    let result = ``
    for (let ele of array) {
        result += `<strong>${ele.title}</strong><br>${ele.content}<br>` 
    }
    return result
}






module.exports = { display }