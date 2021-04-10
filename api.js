export const getData = () => {
    return fetch(`https://jsonplaceholder.typicode.com/todos `, {
        method :"GET",
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => {
        console.log(err)
    })
}