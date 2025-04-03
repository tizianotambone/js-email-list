// richiamo tutti gli elementi del dom
const firstList=document.getElementById("email-list");
const specifcList= document.getElementById("list");
const itemlist= document.getElementById("first-email")
// dichiaro le variabili

const eMail= "https://flynn.boolean.careers/exercises/api/random/mail";
let user ;


// chiamata ajax per l'interrogazione delle eMail

  

 for (let index = 0; index < 10; index++) {
    axios.get(eMail).then(generic =>{
        user = generic.data.response;
        console.log(user)
        specifcList.innerHTML +=`<li id="first-email">${user}</li>`;
    })
}

    
            
            
   
  
    
   
