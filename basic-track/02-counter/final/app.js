let count = 0;

const value = document.querySelector('#value'); // id가 value인 요소 선택.
const btns = document.querySelectorAll('.btn'); // class가 .btn인 요소 선택.

// 버튼 이벤트 한번에 처리
btns.forEach(function (btn) {
  // 모든 버튼 반복.
  btn.addEventListener('click', function (e) {
    // 버튼들에 이벤트리스너 다는 과정..
    const styles = e.currentTarget.classList; // 클릭된 버튼의 클래스 목록을 가져와서 styles에 저장.
    if (styles.contains('decrease')) {
      // .contains는 포함되어 있는지 여부를 확인하는 메서드. styles에 decrease가 포함되어 있으면 count-- 시킨다.
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      // 리셋 버튼
      count = 0;
    }

    if (count > 0) {
      value.style.color = 'green';
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count === 0) {
      value.style.color = '#222';
    }
    value.textContent = count; // value에 해당하는 html의 요소를 count값으로 업데이트 시킴
  });
});
