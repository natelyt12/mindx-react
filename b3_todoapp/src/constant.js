const user_obj = [
  { name: "MindX School" },
  { name: "Nguyễn Văn A" },
  { name: "Trịnh Hồng M" },
  { name: "Trần Văn C" },
  { name: "Raiden Shogun" },
];

export const flag_obj = [
  { color: "oklch(57.7% 0.245 27.325)" },
  { color: "oklch(79.5% 0.184 86.047)" },
  { color: "oklch(72.3% 0.219 149.579)" },
];

export const todo_obj = [
  {
    name: "To do",
    metadata: [
      {
        title: "Mobile Wireframes",
        desc: "Lên bộ khung ứng dụng thích ứng cho Mobile, có thể lên cả Desktop sau khi đã hoàn thiện",
        assign: user_obj[1].name, // User
        attached: 0,
        priority: 1,
        datetime: "2026-01-01",
      },
      {
        title: "Mobile Wireframes",
        desc: "Thực hiện nghiên cứu người dùng để hiểu rõ hơn nhu cầu, thói quen và mong muốn của khách hàng mục tiêu. Từ đó, đưa ra các giải pháp phù hợp nhằm nâng cao trải nghiệm người dùng.",
        assign: user_obj[2].name, // User
        attached: 1,
        priority: 0,
        datetime: "2026-01-01",
      },
    ],
  },
  {
    name: "In progress",
    metadata: [],
  },
  {
    name: "In Review",
    metadata: [],
  },
  {
    name: "Done",
    metadata: [],
  },
];

const item_obj = {
  title: "Mobile Wireframes",
  desc: "Lên bộ khung ứng dụng thích ứng cho Mobile, có thể lên cả Desktop sau khi đã hoàn thiện",
  assign: "", // User
  attached: 0,
  priority: 0,
  datetime: "2026-01-01",
};
