const button = document.querySelector('.button');
const popupInfor = document.querySelector('.popup-infor');
const exitBtn = document.querySelector('.exit-btn')
const main = document.querySelector('.main');

button.onclick = () => {
    popupInfor.classList.add('active');
    main.classList.add('active');
}
exitBtn.onclick =() => {
    popupInfor.classList.remove('active');
    main.classList.remove('active');
}