// /*const images = [
//   "0.jpg",
//   "1.jpg",
//   "2.jpg"
// ]

// const chosenImage = images[Math.floor(Math.random() * images.length)]

// // const bgImage = document.createElement("img")
// // bgImage.src = `img/${chosenImage}`
// document.body.style.backgroundImage = `url(img/${chosenImage})`;
// document.body.style.backgroundSize = 'cover'

// // document.body.appendChild(bgImage)
// */

// // 별찍기

// function handleMakeStars(event) {
//   const span = document.createElement("span")
//   const randomSize = Math.floor(Math.random() * 30)
//   // span.innerHTML = "⭐️"
//   span.style.backgroundColor = "yellow"
//   span.style.position = "fixed"
//   span.style.left = `${event.clientX}px`
//   span.style.top = `${event.clientY}px`
//   span.style.height = `${randomSize}px`
//   span.style.width = `${randomSize}px`
//   span.style.borderRadius = '30px'

//   setInterval(() => {
//     span.style.backgroundColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
//     span.style.display === 'none' ? span.style.display = 'inline-block' : span.style.display = 'none';
//   }, Math.floor(Math.random() * 10000) + 1000);
//   // 투두리스트는 클릭해도 별 안생기게
//   if ((event.clientX > 580 && event.clientX < 1200) && (event.clientY > 188 && event.clientY < 740)) {
//   } else {
//     document.body.appendChild(span)
//   }
// }

// window.addEventListener("click", handleMakeStars)
