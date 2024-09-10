const goodSentances = [
  "Experience is the best teacher",
  "너를 보면 가슴에서 장미꽃이 피어나고,<br /> 캄캄한 밤바다에 등대불이 반짝인다.",
  "산다는 것 자체를 하나의 축제로 여기면,<br /> 우리의 삶은 목표가 아니라 과정이 더 중요해진다.",
  "Every day, every minute, every second <br />you have a chance to change",
  "You will never know until you try",
  "태산(泰山)이 높다 하지만 하늘 아래 산이로다. <br />오르고 또 오르면 못 오를 리 없건만 <br /> 사람이 자기 스스로 오르지않고 산을 높다 하는구나",
  "step by step goes a long way",
  "Only I can change my life, No one can do it for me",
  "If you do nothing, nothing happens",
  "Better late than never",
  "무엇이 선인지 아는 삶은 선을 행할 것이다.",
  "인생에서 우리가 누릴 수 있는 특권은 ‘진정한 자기 자신’이 되는 것이다.",
  "만일 오늘이 내 인생의 마지막 날이라면, 내가 오늘 하려는 것을 하게 될까?",
  "곧 죽을 수도 있다고 생각하는 것은 인생에서 큰 결정들을 내리는 데 가장 큰 도움을 주었다.",
  "좋아하는 것을 찾아가는 일은 나만의 세계를 만들어가는 행복이자 흔들리는 나를 지탱하는 힘이다."
]

const goodSentance = document.querySelector("#goodSentance span:first-child")

const todayGoodSentance = goodSentances[Math.floor(Math.random() * goodSentances.length)]

goodSentance.innerHTML = todayGoodSentance