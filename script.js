document.addEventListener("mousedown", function(event) {
    var circle = document.createElement("div");
    circle.classList.add("circle");
    document.body.appendChild(circle);
    circle.style.top = event.clientY + "px";
    circle.style.left = event.clientX + "px";
  });