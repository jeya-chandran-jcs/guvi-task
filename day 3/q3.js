let xhr = new XMLHttpRequest();

xhr.open("GET",'https://restcountries.com/v3.1/all',true)

xhr.onload=function(){
    if(xhr.status===200){
        let response = JSON.parse(xhr.responseText);
        console.log(response)
        let countryname = [];
        for(let i=0;i<response.length;i++){
            let element = response[i]
            if(element.category==="countryname"){
                countryname.push(element)
            }
            console.log("countryname",countryname)
        }
        }
    }
    else{
        console.log("Error")
    }
    let population=[]
    for(let j=0;j<response.length;i++){
        let populationLength = response[j];
        if(populationLength.category==="population"){
            population.push(populationLength)
        }
        else{
            console.log("Error");
        }
        let region=[]
        for(let k=0;k<response.length;k++){
        let regionmax=responeP[i]
        if(regionmax.category==="region"){
            region.push(regionmax)
        }
    }
    else{
        console.log("error")
    }


xhr.send()