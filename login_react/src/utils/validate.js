/**
 * 1. Validate Email:
 * - Chuẩn phổ thông: có ký tự trước @, có domain, có đuôi mở rộng từ 2 ký tự trở lên.
 * - Không cho phép khoảng trắng.
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email.trim());
};

/**
 * 2. Validate Username:
 * - Độ dài: 3 đến 20 ký tự.
 * - Cho phép: chữ cái (a-z, A-Z), chữ số (0-9), gạch dưới (_) và gạch ngang (-).
 * - Không chứa khoảng trắng hoặc ký tự đặc biệt lạ.
 */
export const isValidUsername = (username) => {
  const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
  return usernameRegex.test(username.trim());
};

/**
 * 3. Validate Password (Mức vừa phải):
 * - Tối thiểu 8 ký tự.
 * - Ít nhất 1 chữ cái (hoa hoặc thường).
 * - Ít nhất 1 chữ số.
 * (Không bắt buộc ký tự đặc biệt để tránh gây khó chịu cho người dùng).
 */
export const isValidPassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
};
