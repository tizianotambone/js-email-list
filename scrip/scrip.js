// richiamo tutti gli elementi del dom
const firstList=document.getElementById("email-list");
const specifcList= document.getElementById("list");
const itemlist= document.getElementById("first-email")
// dichiaro le variabili

const eMail= "https://flynn.boolean.careers/exercises/api/random/mail";
const ten =[];

// chiamata ajax per l'interrogazione dell'endpoint

axios.get(eMail).then(generic =>{
    const user = generic.data.response;
    console.log(user)
  
    
   
})