const api = "https://jsonplaceholder.typicode.com/todos";

async function createTodo() {
  try {
    const newTodo = {
      title: "Mindx School",
      completed: false,
      userId: 1,
    };
    const response = await fetch(api, {
      // Phương thức POST\
      method: "POST",
      headers: {
        //  định nghĩa dữ liệu gửi lên
        "content-type": "application/json",
      },
      // Chuyển dữ liệu sang JSON
      body: JSON.stringify(newTodo),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Tạo todo thành công", data);
  } catch (error) {
    console.error("Lỗi khi tạo todo: ", error);
  }
}

createTodo();
