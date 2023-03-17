//1.点击 + 就会多一个 box
//2.鼠标悬停在 div 上就会在后方出现一个垃圾桶,并且div.line会消失
//3.点击 checkbox 就会出现删除线
//4.并且点击过 checkbox 的 div 会消失
//5.鼠标悬停会有阴影. CSS 去实现









function addTodo(){
    const newBox = document.createElement("div")
    const boxlist = document.getElementById("boxlist")
    const checkbox = document.createElement("input")
    const span = document.createElement("span")
    const rectangle = document.createElement("div")

    for (let i = 0; i < 8; i++){
      newBox.classList.add("box")
      checkbox.type = "checkbox"
      checkbox.setAttribute("id","checkbox"+i)
      span.textContent = "这里请输入内容"
      rectangle.classList.add("rectangle")
4 
    }



    newBox.appendChild(checkbox)
    newBox.appendChild(span)
    newBox.appendChild(rectangle)
    boxlist.appendChild(newBox)
}

