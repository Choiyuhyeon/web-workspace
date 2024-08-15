const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const USERNAME_KEY = 'username';

function onLoginsubmit(event) {
  event.preventDefault();
  loginForm.classList.add('hidden');
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username); // 이름을 로컬 스토리지에 저장
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}!`;
  greeting.classList.remove('hidden'); // 환영 메시지를 표시
}

function checkLocalStorage() {
  const savedUsername = localStorage.getItem(USERNAME_KEY);
  if (savedUsername === null) {
    // 저장된 이름이 없을 때
    loginForm.classList.remove('hidden');
  } else {
    // 저장된 이름이 있을 때
    paintGreetings(savedUsername);
  }
}

// 페이지 로드 시 로컬 스토리지 확인
checkLocalStorage();

loginForm.addEventListener('submit', onLoginsubmit);
