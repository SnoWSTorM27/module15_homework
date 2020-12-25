/* Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео).
При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.*/

// const btn = document.querySelector("#btn-task1");
function pageLoaded() {

    const btn = document.getElementById("btn-task1")

    const icon = document.querySelector('#btn-icon');


    btn.addEventListener("click" , () => {
        
        if (icon.classList.contains('btn-stroke-icon')) {
            icon.classList.remove('btn-stroke-icon')
            icon.classList.add('btn-fill-icon')
            icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-left-circle-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-5.879-2.828a.5.5 0 1 1 .707.707L6.732 9.975H9.5a.5.5 0 1 1 0 1H5.525a.5.5 0 0 1-.5-.5V6.5a.5.5 0 1 1 1 0v2.768l4.096-4.096z"/>
            </svg>
            `;
        } else {
            icon.classList.remove('btn-fill-icon')
            icon.classList.add('btn-stroke-icon')
            icon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-left-circle" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M10.828 5.172a.5.5 0 0 0-.707 0L6.025 9.268V6.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H9.5a.5.5 0 0 0 0-1H6.732l4.096-4.096a.5.5 0 0 0 0-.707z"/>
            </svg>
            `;
        }

    });

}

document.addEventListener("DOMContentLoaded", pageLoaded);