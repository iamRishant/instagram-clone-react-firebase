import {create} from 'zustand'
// creating a store for user we can also create it with redux i will try to do this with redux later

const useAuthStore=create((set)=>({
    // this is the state
    // user:null,//initially user will be null
    // the abover user will not work properly coz whenever the page will will refresh it will make it null so we will use local storage
    user:JSON.parse(localStorage.getItem('user-info'))||null,//when ever we are signing up we are storing it in local storage and while logging out we are clearing the local storage   
    //these are the fxns that will manipulate the state
    login:(user)=>set({user}),
    logout:()=>set({user:null}),
    setUser:(user)=>set({user}),

}))

export default useAuthStore;