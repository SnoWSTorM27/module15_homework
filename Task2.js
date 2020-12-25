/*Задание 2.

Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. */

function pageLoaded() {

    const btn = document.getElementById("btn-task2")

    


    btn.addEventListener("click" , () => {
        window.alert(`Размеры экрана: ${window.screen.width} х ${window.screen.height}`)        
        

    });

}

document.addEventListener("DOMContentLoaded", pageLoaded);