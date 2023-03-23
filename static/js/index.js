//1.点击 + 就会多一个 box
//2.鼠标悬停在 div 上就会在后方出现一个垃圾桶,并且div.line会消失
//3.点击 checkbox 就会出现删除线
//4.并且点击过 checkbox 的 div 会消失
//5.鼠标悬停会有阴影. CSS 去实现
document.addEventListener('DOMContentLoaded',function () {
  const addDiv = document.getElementById('hahaha')
  addDiv.addEventListener('click',function () {
    const newBox = document.createElement("div")
    const boxlist = document.getElementById("boxlist")
    const checkbox = document.createElement("input")
    const span = document.createElement("span")
    const rectangle = document.createElement("div")
    
    newBox.classList.add("box")
    checkbox.type = "checkbox"
    checkbox.setAttribute("id","checkbox")
    span.textContent = "这里请输入内容"
    rectangle.classList.add("rectangle")
    
    newBox.appendChild(checkbox)
    newBox.appendChild(span)
    newBox.appendChild(rectangle)
    boxlist.appendChild(newBox)
})})


// 写了N总方法都错了几乎放弃
// document.addEventListener('DOMContentLoaded',function () {
//   const checkboxes = document.getElementById('checkbox')
//   const spanText = document.querySelector('.text')

// checkboxes.addEventListener('click',function () {
//   // spanText.style.textdecoration = `"line-through"`
//   if (checkboxes == 'checked') {
//     spanText.style.textdecoration = 'none';
//   }else{
//     spanText.style.textdecoration = 'line-through'
//   }
// })
// })



const spanText = document.getElementById('text')
console.log(spanText); //找到的是null


function checkboxOnclick(checkbox) {
  if (checkbox.checked == true) {
    console.log('123');
  spanText.style.textdecoration = 'none';
    
  }else{
    console.log('hahaha');
  spanText.style.textdecoration = 'line-through'

  }
}
