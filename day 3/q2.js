let xhr = new XMLHttpRequest();

xhr.open("GET",'https://restcountries.com/v3.1/all',true)

xhr.onload=function(){
    if(xhr.status===200){
        let response = JSON.parse(xhr.responseText);
        console.log(response)
        let flagname = [];
        for(let i=0;i<response.length;i++){
            let element = response[i]
            if(element.category==="name"){
                flagname.push(element)
            }
            console.log("flagame",flagname)
        }
        }
    }
    else{
        console.log("Error")
    }


xhr.send()