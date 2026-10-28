import { MINDX_API_KEY } from "./env.js";

const domain = "https://mindx-mockup-server.vercel.app";

// 1. CÁC ELEMENT LẤY TỪ HTML (Đã có sẵn trong index.html)
const btnAddUser = document.getElementById("btn-add-user");
const btnAddTask = document.getElementById("btn-add-task");
const btnDeleteFirstTask = document.getElementById("btn-delete-first-task");
const usersInfo = document.getElementById("users-info");
const statusInfo = document.getElementById("status-info");
const flagsInfo = document.getElementById("flags-info");
const tasksHeading = document.getElementById("tasks-heading");
const tasksList = document.getElementById("tasks-list");

// 2. HÀM GỌI API LẤY DỮ LIỆU
async function getTodo() {
  try {
    const response = await fetch(
      `${domain}/api/resources/mindx_resource?apiKey=${MINDX_API_KEY}`,
    );
    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }
    return await response.json();
  } catch (error) {
    console.error("Lỗi khi fetch:", error);
  }
}

// 3. HÀM LỌC TASKS THEO CÁC ĐIỀU KIỆN
function filterTasks(tasks, { flagId, statusId, assignedTo } = {}) {
  return tasks.filter((task) => {
    const matchFlag = flagId ? task.flagId === Number(flagId) : true;
    const matchStatus = statusId ? task.statusId === Number(statusId) : true;
    const matchAssignee = assignedTo
      ? task.assignedTo === Number(assignedTo)
      : true;
    return matchFlag && matchStatus && matchAssignee;
  });
}

// 4. HÀM HIỂN THỊ DANH SÁCH TASKS
function renderTasks(tasks, users = [], taskStatus = [], flags = []) {
  tasksHeading.innerText = `Danh sách công việc (${tasks.length} tasks):`;

  tasksList.innerHTML = tasks
    .map((task) => {
      const user = users.find((u) => u.userId === task.assignedTo);
      const status = taskStatus.find((s) => s.statusId === task.statusId);
      const flag = flags.find((f) => f.flagId === task.flagId);

      return `
        <li>
          <strong>${task.title}</strong> - <em>${task.description}</em><br/>
          Người phụ trách: ${user ? user.name : task.assignedTo} | 
          Trạng thái: ${status ? status.name : task.statusId} | 
          Mức độ: ${flag ? flag.name : task.flagId} | 
          Hạn chót: ${task.deadline}
          <hr style="border-color: #222;" />
        </li>
      `;
    })
    .join("");
}

// 5. HÀM THÊM USER MẪU
async function addUser() {
  try {
    const raw_data = await getTodo();
    if (!raw_data) return;
    const short_path = raw_data.data.data[0];

    const newUser = {
      userId: short_path.users.length + 1,
      name: `Đoàn thị D ${short_path.users.length + 1}`,
    };

    const updatedUsers = [...short_path.users, newUser];

    const response = await fetch(
      `${domain}/api/resources/mindx_resource/${short_path._id}?apiKey=${MINDX_API_KEY}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ users: updatedUsers }),
      },
    );

    if (response.ok) {
      console.log("Đã thêm user mới:", newUser);
      ui();
    }
  } catch (error) {
    console.error("Lỗi khi thêm user:", error);
  }
}

// 6. HÀM THÊM TASK MẪU
async function addTask() {
  try {
    const raw_data = await getTodo();
    if (!raw_data) return;
    const short_path = raw_data.data.data[0];

    const newTask = {
      taskId: short_path.tasks.length + 1,
      title: `Lorem ipsum dolor sit amet ${short_path.tasks.length + 1}`,
      description: "Đây là description của task này",
      statusId: 1, // 1: To Do
      flagId: 2, // 2: Medium
      assignedTo: 1,
      deadline: "2026-12-31",
    };

    const updatedTasks = [...short_path.tasks, newTask];

    const response = await fetch(
      `${domain}/api/resources/mindx_resource/${short_path._id}?apiKey=${MINDX_API_KEY}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tasks: updatedTasks }),
      },
    );

    if (response.ok) {
      console.log("Đã thêm task mới:", newTask);
      ui(); // Cập nhật lại giao diện
    }
  } catch (error) {
    console.error("Lỗi khi thêm task:", error);
  }
}

// 7. HÀM XÓA TASK ĐẦU TIÊN
async function deleteFirstTask() {
  try {
    const raw_data = await getTodo();
    if (!raw_data) return;
    const short_path = raw_data.data.data[0];

    // Kiểm tra nếu danh sách rỗng thì không xóa
    if (!short_path.tasks || short_path.tasks.length === 0) {
      alert("Không còn task nào để xóa!");
      return;
    }

    // Dùng slice(1) để lấy toàn bộ các task từ vị trí index số 1 trở đi (bỏ task đầu tiên ở index 0)
    const updatedTasks = short_path.tasks.slice(1);

    const response = await fetch(
      `${domain}/api/resources/mindx_resource/${short_path._id}?apiKey=${MINDX_API_KEY}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tasks: updatedTasks }),
      },
    );

    if (response.ok) {
      console.log("Đã xóa task đầu tiên thành công");
      ui(); // Cập nhật lại giao diện
    }
  } catch (error) {
    console.error("Lỗi khi xóa task:", error);
  }
}

// 8. GẮN SỰ KIỆN CHO CÁC NÚT BẤM
btnAddUser.addEventListener("click", addUser);
btnAddTask.addEventListener("click", addTask);
btnDeleteFirstTask.addEventListener("click", deleteFirstTask);

// 9. HÀM RENDER UI
async function ui() {
  const raw_data = await getTodo();
  if (!raw_data) return;

  const short_path = raw_data.data.data[0];
  console.log("Full data:", short_path);

  const { tasks, users, taskStatus, flags } = short_path;

  usersInfo.innerText = `Danh sách user: ${users.map((u) => u.name).join(", ")}`;
  statusInfo.innerText = `Danh sách task status: ${taskStatus.map((s) => s.name).join(", ")}`;
  flagsInfo.innerText = `Danh sách flags:\n${flags.map((f) => `Tên: ${f.name}, Màu: ${f.color}`).join("\n")}`;

  renderTasks(tasks, users, taskStatus, flags);
}

// init
ui();
