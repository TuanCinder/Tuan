let questions = [
    {
        numb: 1,
        question:"Bạn thích nơi yên tĩnh để nghỉ ngơi và sẽ cảm thấy mệt mỏi khi tham gia vào nhiều hoạt động xã hội.",
        answer:[1, -1, -1, -1],
        options:[
            "A. Đúng",
            "B. Sai",
            "C. Một chút đúng, một chút sai",
            "D. Không chắc chắn",
        ],
    },
    {
        numb: 2,
        question:"Khi đối diện với vấn đề lớn, bạn thường:",
        answer: [-1, 1, 1, 1],
        options:[
            "A. Tìm cách giải quyết nhanh chóng",
            "B. Tìm hiểu và tìm hiểu thông tin cẩn thận trước khi ra quyết định",
            "C. Thả lỏng và để cho mọi thứ diễn ra tự nhiên",
            "D. Nhờ sự giúp đỡ và ý kiến từ người khác",

        ],
    },
    {
        numb: 3,
        question: "Khi làm việc nhóm, bạn thích:",
        answers: [1, 1, 1, -1], 
        options: [
            "A. Đảm đương và lãnh đạo nhóm",
            "B. Đóng vai trò chủ yếu trong công việc nhóm",
            "C. Đóng vai trò bình đẳng và đóng góp ý kiến",
            "D. Đóng vai trò dễ dàng tuân thủ và hỗ trợ nhóm",

        ],
    },
    {
        numb: 4,
        question: "Khi bạn cảm thấy căng thẳng, bạn thường:",
        answers: [-1, -1, 1, -1], 
        options: [
            "A. Cô lập bản thân và tự giải quyết vấn đề",
            "B. Tìm sự hỗ trợ từ bạn bè hoặc gia đình",
            "C. Tìm cách giải quyết tình huống và tìm kiếm các hoạt động giải trí",
            "D. Tìm nguyên nhân của căng thẳng và tìm hiểu cách giải quyết tốt hơn",
        ],
    },
    {
        numb: 5,
        question: "Trong cuộc sống hàng ngày, bạn thích:",
        answers: [1, 1, 1, 1], 
        options: [
            "A. Có kế hoạch và tuân thủ theo lịch trình cụ thể",
            "B. Linh hoạt và ứng biến theo tình hình",
            "C. Dựa vào cảm xúc và trực giác để quyết định",
            "D. Làm theo lúc có hứng và không đặt quá nhiều kế hoạch",
        ],
    },
    {
        numb: 6,
        question: "Khi gặp vấn đề khó khăn, bạn thường:",
        answers: [1, 1, -1, 1],
        options: [
            "A. Tập trung vào giải pháp thực tế và cách giải quyết nhanh chóng",
            "B. Xem xét tất cả các khả năng và lựa chọn giải pháp tốt nhất",
            "C. Dựa vào trực giác và cảm xúc để đưa ra quyết định",
            "D. Tìm ý kiến ​​từ người khác và nhờ họ giúp đỡ",

        ],
    },
    {
        numb: 7,
        question: "Khi gặp một nhóm người lạ, bạn thích:",
        answers: [-1, 1, -1, 1],
        options: [
            "A. Để họ tiến tới và nói chuyện với bạn trước",
            "B. Tự giới thiệu và tạo sự thoải mái cho bản thân và họ",
            "C. Tìm cách gắn kết với một số người quen thuộc trong nhóm",
            "D. Tham gia vào hoạt động chung để giảm thiểu sự cô đơn",

        ],
    },
    {
        numb: 8,
        question: "Khi đối mặt với sự thay đổi đột ngột, bạn thích:",
        answers: [-1, 1, -1, -1],
        options: [
            "A. Cố gắng thích nghi và tìm cách tận dụng lợi ích từ thay đổi",
            "B. Cẩn thận xem xét sự thay đổi và nhận định trước các hậu quả",
            "C. Dựa vào trực giác và cảm xúc để xác định cách đối mặt với thay đổi",
            "D. Cần thời gian để thích nghi và cảm nhận thay đổi",

        ],
    },
    {
        numb: 9,
        question: "Trong cuộc sống, bạn thích:",
        answers: [1, -1, -1, -1], 
        options: [
            "A. Làm việc cùng một nhóm người thân quen và ổn định",
            "B. Gặp gỡ và làm việc với nhiều người khác nhau",
            "C. Dựa vào cảm xúc và trực giác để chọn người bạn gần gũi",
            "D. Lựa chọn mối quan hệ một một và chăm sóc cẩn thận mối quan hệ đó",

        ],
    },
    {
        numb: 10,
        question: "Khi đối diện với vấn đề phức tạp, bạn thích:",
        answers: [1, -1, 1, -1], 
        options: [
            "A. Phân chia nó thành các phần nhỏ hơn và giải quyết từng phần một cách chi tiết",
            "B> Tìm cách giải quyết nhanh chóng và hiệu quả nhất",
            "C. Dựa vào trực giác và cảm xúc để tìm ra giải pháp",
            "D. Thả lỏng và để thời gian trả lời tự nhiên đến với bạn",

        ],
    },
    {
        numb: 11,
        question: "Khi tham gia vào một cuộc tranh luận, bạn thường:",
        answers: [-1, 1, -1, -1],
        options: [
            "A. Trình bày logic và dùng bằng chứng để thuyết phục",
            "B. Lắng nghe và hiểu quan điểm của người khác trước khi đưa ra ý kiến",
            "C. Dựa vào cảm xúc và trực giác để đưa ra quan điểm",
            "D. Tránh tranh luận và giữ ý kiến cho riêng mình",

        ],
    },
    {
        numb: 12,
        question: "Khi thư giãn, bạn thích:",
        answers: [1, 1, -1, -1], 
        options: [
            "A. Xem phim, đọc sách hoặc tham gia các hoạt động nghệ thuật",
            "B. Tham gia vào các hoạt động thể thao hoặc đi dạo chơi ngoài trời",
            "C. Tìm cách gắn kết và gặp gỡ bạn bè hoặc gia đình",
            "D. Thư giãn một mình và tận hưởng thời gian riêng tư",

        ],
    },
];
