const api = "https://jsonplaceholder.typicode.com/todos";

async function fetchData() {
  try {
    const response = await fetch(api);
    console.log(response);
    if (!response.ok) {
      throw new error(`Lỗi: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(`Lỗi: ${error.message}`);
  }
}

fetchData();
