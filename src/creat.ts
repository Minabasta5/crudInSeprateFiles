import { onFetchUserClick } from "./api";
let lastUserCreated:number |null=null;


 export async function onCreateUserClick(){
    document.getElementById("crebtn")!.addEventListener("click"  ,onCreateUserClick)
 
   // const testUser={title:"vero", userId:2,email:"veroniadimyan21@gmail.com",emailId:2}/////its wronge
    let newUserName = (document.getElementById("name")as HTMLInputElement|null)?.value;
    let newUserEmail = (document.getElementById("email")as HTMLInputElement|null)?.value
    let newUserNmber=(document.getElementById("phoneNum")as HTMLInputElement |null)?.value
    let newUser = {
        "title": newUserName ,
        "email": newUserEmail,
        "phoneNum":newUserNmber,
    }
    const response= await fetch('http://localhost:3000/users/',{
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newUser)
    });
    const newlyCreatedUser= await response.json();
    lastUserCreated = newlyCreatedUser;
    onFetchUserClick();
}


(window as any).onCreateUserClick= onCreateUserClick;
