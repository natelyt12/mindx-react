// const birth_year = 2008;
// birth_year = 2007;

// let score = 0;
// score = 10; 
// score = score + 5;
// console.log(score);

// const school_name = "MindX";
// function welcome() {
//     console.log(`Chào mừng đến ${school_name}`);
// }

// welcome()

// const name = "Phúc Thanh"
// const time = 10

// const text = "Kính mời anh/chị " + name + " đến dự tiệc lúc " + time + "h";
// console.log(text);

// const product_name = "Kem dưỡng da";
// const product_price = Number(360000).toLocaleString("vi-VN");
// const stock = Number(125).toLocaleString("vi-VN");

// const text = `Tên sản phẩm: ${product_name} | giá: ${product_price} | số lượng tồn kho: ${stock} chiếc`
// console.log(text);

// const hello = name => "Hello, " + name;
// console.log(hello("Thanh"));

// // -> function
// const dien_tich = (val1, val2) => val1 * val2;

// // normal function
// function dien_tich_norm(val1,val2) {
//     return val1 * val2
// }

// console.log(`Diện tích hình chữ nhật là ${dien_tich(6,4)}`);
// console.log(`Diện tích hình chữ nhật là ${dien_tich_norm(2,8)}`);

// function showFriends(...names) {
//     return `bạn có ${names.length} người bạn: ${names.join(", ")}`
// }

// const showFriendsArrow = (...names) => `bạn có ${names.length} người bạn: ${names.join(", ")}`
// const showFriendsTeams = (leader, ...names) => `Leader: ${leader} | Member: ${names.join(", ")}`

// console.log(showFriendsTeams("Bình", "Thanh", "Phong", "Trúc"));

import getUser from "./module.js"

console.log(getUser(1));

// Câu 9, 10,  k đụng, k typescript