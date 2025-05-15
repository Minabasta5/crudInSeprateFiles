import { onFetchUserClick } from "./api";








// let lastUserCreated:number |null =null;

let lastUserCreated:{id:number} | null = null;

export  async function onDeleteUserClick(){
     const response =await onFetchUserClick();

    lastUserCreated = response[response.length -1];
    if(lastUserCreated){
        const userId=lastUserCreated.id

        const response= await fetch(`http://localhost:3000/users/${userId}`,{
            method:"DELETE",
            headers:{
                'content-type':'application/json'
            },
        });
        if(response.ok){
            lastUserCreated=null;
            console.log('user deleted successfully');
        }else{
            console.log('no user to delete')
        }
    }
   
}

(window as any).onDeleteUserClick = onDeleteUserClick;
