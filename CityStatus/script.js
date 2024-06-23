 const button=  document.querySelector('button')

  //to creating new div element in js 
let resultdiv=document.createElement('div')//we created div element
//where we should join that created element to the html  we have to say it clearly
resultdiv.id='result'

 //they had checked the button  and also we have to know whether the button is checked or not

button.addEventListener('click',displaystats)
function displaystats()
{
    
    const input = document.getElementById("input")
    //to select which option is selecting
   const city= input.options[input.selectedIndex].value
   let population=0, literacyRate=0,language={}
   switch(city)
   {
    case 'Bengaluru':
        population=897999
        literacyRate=90.89
        language='kanada'
        break

   case 'Hyderabad':
    population=89999
    literacyRate=91.89
    language='kanada'
    break
    case 'Madhurai':
     population=897999
        literacyRate=90.89
        language='kanada'
        break
    case 'kedarnadh':
        population=897999
        literacyRate=90.89
        language='HINDI'
        break

   }
let text=`The indian city of ${city} has a population.language spoken is ${language} and literacy rate is ${literacyRate}.`
     
//console.log(text)
  //to creating new div element in js 
/*let resultdiv=document.createElement('div')//we created div element
//where we should join that created element to the html  we have to say it clearly
resultdiv.id='result'
//from js also we can give style resultdiv.style.background*/
document.getElementById('wrapper').appendChild(resultdiv)
document.getElementById('result').innerHTML=text


}