//1.点击 + 就会多一个 box
//2.鼠标悬停在 div 上就会在后方出现一个垃圾桶,并且div.line会消失
//3.点击 checkbox 就会出现删除线
//4.并且点击过 checkbox 的 div 会消失
//5.鼠标悬停会有阴影. CSS 去实现
function addTodo() {
    const newBox = document.createElement("div")
    const boxList = document.getElementById("boxList")

    // checkbox
    const checkbox = document.createElement("input")
    // input
    const target = document.createElement("input")
    target.classList.add('input-style')

    const rectangle = document.createElement("div")

    newBox.classList.add("box")
    checkbox.type = "checkbox"
    target.placeholder = "这里请输入内容"
    rectangle.classList.add("rectangle")

    newBox.appendChild(checkbox)
    newBox.appendChild(target)
    newBox.appendChild(rectangle)
    boxList.appendChild(newBox)

    target.addEventListener('focusout', () => {
        target.disabled = true;
    });

    newBox.addEventListener('click', () => {
        target.disabled = false;
    });

    checkbox.addEventListener("click", () => {
        checkboxOnclick(checkbox, target)
    })
}

function checkboxOnclick(checkbox, target) {
    console.log(target);
    if (checkbox.checked) {
        target.classList.add('delete-style')
    } else {
        target.classList.remove('delete-style')
    }
}
