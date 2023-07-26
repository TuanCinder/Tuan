function calculateMBTI(answers) {
    // Điểm số cho mỗi hướng trả lời: E/I, S/N, T/F, J/P
    let scores = [0, 0, 0, 0];
  
    // Hướng trả lời cho mỗi câu hỏi
    // Điểm +1 nếu là E/S/T/J, điểm -1 nếu là I/N/F/P
    const answerKey = [
      [1, -1, -1, -1], // Câu hỏi 1
      [-1, 1, 1, 1],   // Câu hỏi 2
      [1, 1, 1, -1],   // Câu hỏi 3
      [-1, -1, 1, -1], // Câu hỏi 4
      [1, 1, 1, 1],    // Câu hỏi 5
      [1, 1, -1, 1],   // Câu hỏi 6
      [-1, 1, -1, 1],  // Câu hỏi 7
      [-1, 1, -1, -1], // Câu hỏi 8
      [1, -1, -1, -1], // Câu hỏi 9
      [1, -1, 1, -1],  // Câu hỏi 10
      [-1, -1, 1, 1],  // Câu hỏi 11
      [1, 1, -1, -1]   // Câu hỏi 12
    ];
  
    // Tính tổng điểm cho mỗi hướng trả lời
    for (let i = 0; i < answers.length; i++) {
      for (let j = 0; j < scores.length; j++) {
        scores[j] += answerKey[i][j] * answers[i];
      }
    }
  
    // Xác định nhóm MBTI dựa trên kết quả
    const mbtiTypes = ['E', 'I', 'S', 'N', 'T', 'F', 'J', 'P'];
    let mbtiResult = '';
    for (let i = 0; i < scores.length; i += 2) {
      if (scores[i] > 0) {
        mbtiResult += mbtiTypes[i];
      } else {
        mbtiResult += mbtiTypes[i + 1];
      }
    }
  
    return mbtiResult;
  }
  
  // Mãng chứa câu trả lời của người dùng (1 - Đúng, -1 - Sai)
  const userAnswers = [1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4];
  const mbtiResult = calculateMBTI(userAnswers);
  console.log('Kết quả MBTI của bạn:', mbtiResult);
  