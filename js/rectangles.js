"use strict"
/// Pass a keypress event or similar and return true if a number in 0-9
var filter_numbers = function(event) {
    var char = String.fromCharCode(!event.charCode ?
                                  event.which : event.charCode);
    var re = new RegExp("^[0-9]+$");

    if (!re.test(char)) {
        return false;
    }
    return true;
}

var update_rectangles = function() {
    var rect = document.getElementById('rect_1');
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    var text = document.getElementById('text').value;
    var main_text = document.getElementById('main_text');
    main_text.innerHTML = text.replace(/(?:\r\n|\r|\n)/g, '<br>');
    var foreign_object = document.getElementById('foreign_object');
    if ( rect && ( rect.x != x ||
                   rect.y != y ||
                   rect.width != width ||
                   rect.height != height) 
       ) {
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        rect.setAttribute('width', width);
        rect.setAttribute('height', height);
        foreign_object.setAttribute('x', x);
        foreign_object.setAttribute('y', y);
        foreign_object.setAttribute('width', width);
        foreign_object.setAttribute('height', height);

    }
}

window.onload = function() {
    var t = document.getElementById("text");
    t.innerHTML = "What is happening in the world so that nothing that I do has any impact on anything? It is a mystery to me"

    var x = document.getElementById("x");
    x.value = 20;
    x.addEventListener('keypress', (event) =>  {
        var n = this.value;
        if(! filter_numbers(event) ){
            event.preventDefault();
            return false;
        }
    });

    var y = document.getElementById("y");
    y.value = 20;
    y.addEventListener('keypress', (event) =>  {
        if(! filter_numbers(event) ){
            event.preventDefault();
            return false;
        }
    });
    
    var width = document.getElementById("width");
    width.value = 100;
    width.addEventListener('keypress', (event) =>  {
        if(! filter_numbers(event) ){
            event.preventDefault();
            return false;
        }
    });

    var height = document.getElementById("height");
    height.value = 100;
    height.addEventListener('keypress', (event) =>  {
        if(! filter_numbers(event) ){
            event.preventDefault();
            return false;
        }
    });

    document.getElementById("controls").
        addEventListener('change', (event) => {
            update_rectangles();
        });
    document.getElementById("text").
        addEventListener('keyup', (event) => {
            update_rectangles();
        });
    update_rectangles();
}

