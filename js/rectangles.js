window.onload = function() {
    var t = document.getElementById("text");
    t.value = "What is happening in the world so that nothing that I do has any impact on anything? It is a mystery to me"

    var x = document.getElementById("x");
    x.value = 20;
    x.addEventListener('keyup', (event) =>  {
	console.log(`generated characters were: ${event.data}`);
    });
    document.getElementById("y").value = 20;
    document.getElementById("width").value = 100;
    document.getElementById("height").value = 100;
}

