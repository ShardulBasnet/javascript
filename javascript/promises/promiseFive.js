// The fetch API itself returns a Promise, so you can use then and
//  catch directly on the result of the fetch call. 
// In the case of fetch, the then method is used to handle the 
// successful response, and the catch method is used to handle errors.
fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))
