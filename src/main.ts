import { onFetchUserClick } from "./api";
import { onCreateUserClick } from "./creat";
import {onDeleteUserClick } from "./delete";

 import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
 

  
type User ={
    id:number,
    title:string,
    email:string,
    phonNum:string,
    
}

    




    // //   ....State...
let userList : User[]=[]
let userToEdit:null | number =null;
    let lastUserCreatedId:number |null =null;


async function onUpdateUserClick() {

  try {
     const response = await fetch('http://localhost:3000/users');
     const users = await response.json();
     lastUserCreatedId = users[users.length -1].id;
     console.log ('usertoedit',userToEdit)
  } catch (error) {
    
  }
  const newUserEmail = (document.getElementById("email") as HTMLInputElement | null)?.value;

  if (!newUserEmail) {
    console.log('Email input is empty or not found.');
    return;
  }

  if (lastUserCreatedId === null) {
    console.log('No item created yet to update');
    return;
  }

  try {
    const response = await fetch(`http://localhost:3000/users/${lastUserCreatedId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "test updated",
        genrId: 2,
        email: newUserEmail, 
        phoneNum: ""
      })
    });

    if (!response.ok) {
      throw new Error("Failed to update user");
    }

    const userToEdit = await response.json();
    console.log('User updated successfully:', userToEdit);

    // Optionally update userList
    userList = userList.map(user =>
      user.id === lastUserCreatedId ?userToEdit : user
    );

  } catch (error) {
    console.error('Error updating user:', error);
  }
}

   


(window as any).onFetchUserClick = onFetchUserClick;
(window as any).onUpdateUserClick = onUpdateUserClick;
(window as any).onCreateUserClick= onCreateUserClick;
(window as any).onDeleteUserClick = onDeleteUserClick;



