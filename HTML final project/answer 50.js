var totalJP = 12; // Tổng số câu hỏi thuộc JP (J hoặc P)
var totalSN = 14; // Tổng số câu hỏi thuộc SN (S hoặc N)
var totalEI = 10; // Tổng số câu hỏi thuộc EI (E hoặc I)
var totalFT = 14; // Tổng số câu hỏi thuộc FT (F hoặc T)

var correctJP = 7; // Số câu trả lời đúng thuộc JP (J hoặc P)
var correctSN = 9; // Số câu trả lời đúng thuộc SN (S hoặc N)
var correctEI = 6; // Số câu trả lời đúng thuộc EI (E hoặc I)
var correctFT = 10; // Số câu trả lời đúng thuộc FT (F hoặc T)

var percentJP = (correctJP / totalJP) * 100;
var percentSN = (correctSN / totalSN) * 100;
var percentEI = (correctEI / totalEI) * 100;
var percentFT = (correctFT / totalFT) * 100;

var personality = "";

// Xác định loại tính cách dựa trên phần trăm
if (percentJP >= 50) {
  personality += "J";
} else {
  personality += "P";
}

if (percentSN >= 50) {
  personality += "N";
} else {
  personality += "S";
}

if (percentEI >= 50) {
  personality += "I";
} else {
  personality += "E";
}

if (percentFT >= 50) {
  personality += "T";
} else {
  personality += "F";
}

console.log("Bạn thuộc nhóm tính cách: " + personality);
console.log("Hướng nội (I) (" + (percentEI >= 50 ? "I" : "E") + ") (" + percentEI.toFixed(2) + "%) hơn Hướng ngoại (E) (" + (100 - percentEI).toFixed(2) + "%)");
console.log("Trực giác (N) (" + (percentSN >= 50 ? "N" : "S") + ") (" + percentSN.toFixed(2) + "%) hơn Cảm giác (S) (" + (100 - percentSN).toFixed(2) + "%)");
console.log("Lý trí (T) (" + (percentFT >= 50 ? "T" : "F") + ") (" + percentFT.toFixed(2) + "%) hơn Tình cảm (F) (" + (100 - percentFT).toFixed(2) + "%)");
console.log("Linh hoạt (P) (" + (percentJP >= 50 ? "P" : "J") + ") (" + percentJP.toFixed(2) + "%) hơn Nguyên tắc (J) (" + (100 - percentJP).toFixed(2) + "%)");
