const api = "https://jsonplaceholder.typicode.com/todos";

fetch(api)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

// Làm bài tập: code easy và code intensive
