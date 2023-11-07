
export async function getServerUser(){
    const response = await fetch("https://randomuser.me/api/");
    const user = await response.json();
    return user.results[0];
}


