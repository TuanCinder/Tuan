document.getElementById('quiz-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Ngăn chặn hành động mặc định của nút submit

  // Lấy tất cả các câu hỏi trong form
  var questions = this.querySelectorAll('input[type="radio"]');

  // Kiểm tra xem có câu hỏi nào không được chọn hay không
  var unansweredQuestions = false;
  questions.forEach(function(question) {
    if (!question.checked) {
      unansweredQuestions = true;
      question.parentNode.style.color = 'red'; // Hiển thị câu hỏi chưa được chọn với màu đỏ
    }
  });

  if (unansweredQuestions) {
    alert('Vui lòng chọn đáp án cho tất cả các câu hỏi trước khi submit!'); // Hiển thị thông báo cho người dùng
    return;
  }

  // Tiếp tục xử lý khi tất cả câu hỏi đã được chọn
  // ... 
  // Gửi dữ liệu đến server hoặc thực hiện các hành động khác
});
