/* Задание 3.

Реализовать чат на основе эхо-сервера wss://echo.websocket.org/
Интерфейс состоит из input, куда вводится текст сообщения, и кнопки «Отправить».

При клике на кнопку «Отправить» сообщение должно появляться в окне переписки.

Эхо-сервер будет отвечать вам тем же сообщением, его также необходимо выводить в чат:


Добавить в чат механизм отправки гео-локации:

При клике на кнопку «Гео-локация» необходимо отправить данные серверу и в чат вывести ссылку на https://www.openstreetmap.org/ с вашей гео-локацией. Сообщение, 
которое отправит обратно эхо-сервер, не выводить.*/

function pageLoaded() {
    const wsUrl = "wss://echo.websocket.org/";
    const btnSendMessage = document.getElementById("btn-send")
    const btnGeo = document.getElementById("btn-geo")
    const input = document.getElementById("input")
    const output = document.querySelector(".output")
    

    let websocket = new WebSocket(wsUrl);
    websocket.onopen = () => {
        output.innerHTML = "Соединение установлено"
    }
    websocket.onerror = () => {
        output.innerHTML = "Ошибка соединения"
    }

    websocket.onmessage = (event) => {
        writeToScreen(event.data, true);
    }

    function writeToScreen(message, isReceived) {
        let messageScreen = `<div class="${isReceived?"receive":"sent"}">${message}</div> ` ;
        output.innerHTML += messageScreen;
    }

    btnSendMessage.addEventListener("click" , sendMessage);
    
    function sendMessage() {
        if (!input.value) return;
        websocket.send(input.value);
        writeToScreen(input.value, false);
        input.value = "";

    }
    btnGeo.addEventListener("click", getLocation);

    function getLocation () {
        if ("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(successLoc, errorLoc);
        } else {
            writeToScreen("Ваш браузер не поддерживает функцию геолокации", true);
        }
    }

    function successLoc (data2) {
        let link = `https://www.openstreetmap.org/#map=18/${data2.coords.latitude}/${data2.coords.longitude}`;
        writeToScreen(`<a href="${link}" target="_blank" >Гео-локация</a>`, true);
        output
    }

    function errorLoc () {
        writeToScreen("Произошла ошибка", true);
    }



}

document.addEventListener("DOMContentLoaded", pageLoaded);