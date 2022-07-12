//global
const overview = document.querySelector(".overview");
const username= "KelliBre";//github user name

//async function to fetch github profile
const getGithubUser = async function(){
    const myInfo = await fetch(`https://api.github.com/users/${username}`);
    const data = await myInfo.json();
    console.log(data);
    displayMyInfo(data);
}

getGithubUser();

//function to display retrieved github info
const displayMyInfo = function(data){
    const div = document.createElement("div");//create div
    div.classList.add("user-info");//add class to div
    div.innerHTML = `
    <figure>
      <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>
  `;
  overview.append(div);
};
