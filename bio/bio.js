




try {

    const questions = document.querySelectorAll(".ques");
    questions.forEach(function (question) {
        question.addEventListener("click", () => {
            const item = question.parentElement;
            const isOpen = item.classList.contains("open");
            document.querySelectorAll(".item").forEach(i => {
                i.classList.remove("open");
            })
            if (!isOpen) item.classList.add("open");

        });

    });

} catch (error) {
    console.error(error);

}


// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "first");

// })


// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(reject, 2000, "second");

// })

// let promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "third");

// })



// let allPromises = Promise.all([promise1, promise2 ,promise3]);

// allPromises.then((values)=>{
//     console.log(values);
// })
// .catch((error)=>{
//     console.log("the error : " +  error);
// })






async function getData() {

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const getEmojis = "https://icon-sets.iconify.design/streamline-emojis/"
    const response = await fetch( proxyUrl+ getEmojis);
    const data = await response;
    console.log(data);


}





async function postData() {

    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const option = {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            userId: 1,
            title: 'i updated this post  ',
            body: 'bar',

        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    }

    const myPost = await fetch(url, option);

    const myPostD = await myPost.json();

    console.log(myPostD);



}



async function delPost() {

    const url1 = "https://jsonplaceholder.typicode.com/posts/";


    const deletePost = await fetch(url1);
    const deletedPost = await deletePost.json();
    console.log(deletedPost[0]);



}




delPost();


postData();



getData();
