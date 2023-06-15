document.addEventListener("DOMContentLoaded", function(){
    var btn = document.querySelector("#circle-btn");
    var container = document.querySelector("#vertical-container");

    btn.addEventListener("click", function(){
        var height = this.offsetHeight;
        var containerHeight = container.offsetHeight;
        var windowHeight = window.innerHeight;

        container.style.bottom = (height + 30) + 'px'; // 10px de marge
        container.style.left = '20px'; // même position de gauche que le bouton

        if (container.classList.contains("show")) {
            container.classList.remove("show");
        } else {
            container.classList.add("show");
        }
    });
});