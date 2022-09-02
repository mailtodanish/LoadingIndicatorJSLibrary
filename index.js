let e = document.getElementsByClassName("test1");
e[0].style.filter = 'blur(5px)';

let loading = document.createElement("div");
loading.innerText = "Loading";
loading.setAttribute("style", `position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);`);
e[0].parentElement.appendChild(loading);