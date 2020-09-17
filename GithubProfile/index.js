const input = document.querySelector(".form");
const profileInfo = document.querySelector(".profile")
let profileData = {};

input.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("test")
    let inputVal = document.querySelector(".search").value;
    console.log(inputVal)
    Search(inputVal)
    
    async function Search(inputVal){
        await fetch(`https://api.github.com/users/${inputVal}`)
        .then(response => response.json())
        .then(data => {writeData(data)})
    } 
});

const writeData = (user) => {
    console.log(user)
    if(user.message){
        profileInfo.innerHTML = `<p>This user is not found.</p>`
    }else{
        profileInfo.innerHTML =  `
        <img src="${user.avatar_url}">
        <h1>${user.name}</h1>
        <p>${user.bio}</p>
        <a>Look at repos of  ${user.name}</a>`; 
    }
}