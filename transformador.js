let celsius 
let fahren 

function transformar(celsius, fahren){
    let celsiusFinal
    let fahrenFinal   
    switch(fahren){
        case fahren:
        fahrenFinal = (Number(celsius) * 9 / 5) + 32
        console.log(fahrenFinal)
        break
        default:
            console.log("erro")
        break
    }
    switch (celsius) {
        case celsius:
            celsiusFinal = (Number(fahren) -32) * 5 / 9 
            console.log(celsiusFinal)
            break;
            
            default:
            console.log("erro")
            break;
    }
   
}

transformar("10", "50")







