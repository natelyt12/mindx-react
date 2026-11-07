import { createContext, useContext, useState } from "react";

// BƯỚC 1: Tạo cái "kênh" truyền dữ liệu
const ThemeContext = createContext();

// BƯỚC 2: Ô vuông (Component con)
// Con không cần nhận props từ cha, chỉ cần mở kênh ThemeContext ra lấy dữ liệu
function Box() {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        width: 120,
        height: 120,
        marginTop: 15,
        backgroundColor: theme === "light" ? "#facc15" : "#1e293b", // Vàng hoặc Đen
        border: "2px solid #000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme === "light" ? "#000" : "#fff",
        fontWeight: "bold",
      }}
    >
      Ô VUÔNG
    </div>
  );
}

// BƯỚC 3: Component App (Component cha)
export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    // Provider: Đặt giá trị theme vào kênh để tất cả bên trong có thể dùng
    <ThemeContext.Provider value={theme}>
      <div style={{ padding: 30, fontFamily: "sans-serif" }}>
        {/* 1. Label hiển thị */}
        <h2>Chế độ hiện tại: {theme.toUpperCase()}</h2>

        {/* 2. Nút bấm đổi theme */}
        <button onClick={toggleTheme} style={{ padding: "8px 16px", cursor: "pointer" }}>
          Bấm để đổi
        </button>

        {/* 3. Ô vuông */}
        <Box />
      </div>
    </ThemeContext.Provider>
  );
}
