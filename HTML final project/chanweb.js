// Hàm để thực hiện toàn màn hình
function enableFullscreen() {
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
}

// Gọi hàm để bật toàn màn hình khi trang web được tải
enableFullscreen();

// Vô hiệu hóa các nút phím tắt trên trang web
document.addEventListener('keydown', function (e) {
  e.preventDefault();
});

// Ngăn người dùng thoát khỏi chế độ toàn màn hình
document.addEventListener('fullscreenchange', function (e) {
  if (!document.fullscreenElement) {
    enableFullscreen();
  }
});
