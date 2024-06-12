//1 metric2 = 3.281 metric
//1 liter = 0.264 gallon
//1 kilogram = 2.204 pound

const inputEl = document.querySelector("#input-el")
const convertEl = document.querySelector("#convert-el")
const LengthPara = document.querySelector("#Length-para")
const VolumePara = document.querySelector("#Volume-para")
const MassPara = document.querySelector("#Mass-para")
let values 


convertEl.addEventListener("click", function()
{ 
    values = []
    LengthPara.innerHTML= ""
    VolumePara.innerHTML= ""
    MassPara.innerHTML= ""
    for(let i = 0 ; i < 3 ; i++){
    if( LengthPara.innerHTML=== "")
        {
    LengthPara.innerHTML=  convert(inputEl.value)[0]
        }
    else if(VolumePara.innerHTML === "") {
        VolumePara.innerHTML=  convert(inputEl.value)[1]
    }
    else if(MassPara.innerHTML=== ""){
        MassPara.innerHTML=  convert(inputEl.value)[2]
    }
   } 
})


function convert(unit){
    let metric
    let metric2
    let paragraph =[]
    for(let i =0 ; i < 3 ; i++)
        {
          if(i === 0 ){
            metric= unit* 3.281
            metric2= unit / 3.281
            values.push( metric.toFixed(3))
            values.push(metric2.toFixed(3))
             paragraph.push( `${unit} meters = ${values[0]} metric | ${unit} metric = ${values[1]} meters `)
           
          }
         else if(i === 1)
            {
                metric= unit* 0.264
                metric2= unit / 0.264
                values.push( metric.toFixed(3))
                values.push(metric2.toFixed(3))
               paragraph.push(`${unit} Liters = ${values[2]} Gallons | ${unit} Gallons = ${values[3]} Liters `)
           
               
            }
         else if(i === 2){
            metric= unit* 2.204
            metric2= unit / 2.204
            values.push( metric.toFixed(3))
            values.push(metric2.toFixed(3))
             paragraph.push(`${unit} Kilograms = ${values[4]} Pounds | ${unit} Pounds = ${values[5]} Kilograms `)
           
            
         }
         
         
        }
    return paragraph

}