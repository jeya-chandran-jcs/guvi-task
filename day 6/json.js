
let xhr
xhr.open("GET","json obj.json",true)
xhr.send()
xhr.onload = function(){
    let data=JSON.parse(this.response)
    console.log("name",xhr)
}
