(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
       answer.innerHTML="Loading...";   fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = "";
        array.forEach(post => answer.innerHTML +=
          `
          <div>
          <ul type="none">
            <li type="circle">User ID: ${post.userId}</li>
            <li>ID: ${post.id}</li>
            <li>Title: ${post.title}</li>
            <li>Body: ${post.body}</li>
          <hr color="red">
          </ul>
          </div>
          `
        );
      })
  })

  cw2.addEventListener("click", function () {
       answer.innerHTML="Loading...";   fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(post => answer.innerHTML =
          `
          <div>
          <ul type="none">
            <li type="circle">User ID: ${post.userId}             </li>
            <li>ID: ${post.id}</li>
            <li>Title: ${post.title}</li>
            <li>Body: ${post.body}</li>
          <hr color="red">
          </ul>
          </div>
          `
        );
      })

  cw3.addEventListener("click", function () {
    //TODO implement it
  })

})();
