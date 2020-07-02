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

    // Save the size and position of the rectangles incase a move
    // makes them over lap so we have to change the control values
    // back.
    var a_rect = document.getElementById('a_rect');
    var b_rect = document.getElementById('b_rect');
    var a_rect_x = a_rect.x.baseVal.value;
    var a_rect_y = a_rect.y.baseVal.value;
    var a_rect_width = a_rect.width.baseVal.value;
    var a_rect_height = a_rect.height.baseVal.value;
    var b_rect = document.getElementById('b_rect');
    var b_rect = document.getElementById('b_rect');
    var b_rect_x = b_rect.x.baseVal.value;
    var b_rect_y = b_rect.y.baseVal.value;
    var b_rect_width = b_rect.width.baseVal.value;
    var b_rect_height = b_rect.height.baseVal.value;

    
    // Get where the two rectangles have been moved/resized to
    var a_x = document.getElementById('a_x').value;
    var a_y = document.getElementById('a_y').value;
    var a_width = document.getElementById('a_width').value;
    var a_height = document.getElementById('a_height').value;
    var b_x = document.getElementById('b_x').value;
    var b_y = document.getElementById('b_y').value;
    var b_width = document.getElementById('b_width').value;
    var b_height = document.getElementById('b_height').value;

    // Check for over lapping
    var over_lap = true;
    if(Number(a_x) + Number(a_width) < Number(b_x) ||
       Number(b_x) + Number(b_width) < Number(a_x) ||
       Number(a_y) + Number(a_height) < Number(b_y) ||
       Number(b_y) + Number(b_height) < Number(a_y)){
        over_lap = false;
    }
    if(over_lap){
        // Reset controls
        document.getElementById('a_x').value = a_rect_x;
        document.getElementById('a_y').value = a_rect_y;
        document.getElementById('a_width').value = a_rect_width;
        document.getElementById('a_height').value = a_rect_height;
        document.getElementById('b_x').value = b_rect_x;
        document.getElementById('b_y').value = b_rect_y;
        document.getElementById('b_width').value = b_rect_width;
        document.getElementById('b_height').value = b_rect_height;
        
        a_x = document.getElementById('a_x').value;
        a_y = document.getElementById('a_y').value;
        a_width = document.getElementById('a_width').value;
        a_height = document.getElementById('a_height').value;
        b_x = document.getElementById('b_x').value;
        b_y = document.getElementById('b_y').value;
        b_width = document.getElementById('b_width').value;
        b_height = document.getElementById('b_height').value;
    }


    var a_text = document.getElementById('a_text').value;
    var a_main_text = document.getElementById('a_main_text');
    a_main_text.innerHTML = a_text.replace(/(?:\r\n|\r|\n)/g, '<br>');
    var a_foreign_object = document.getElementById('a_foreign_object');
    var a_font_size = document.getElementById('a_font_size').value;

    document.getElementById('a_main_text').style.fontSize = `${a_font_size}px`;
    if ( a_rect && ( a_rect.x != a_x ||
                     a_rect.y != a_y ||
                     a_rect.width != a_width ||
                     a_rect.height != a_height) 
       ) {
        a_rect.setAttribute('x', a_x);
        a_rect.setAttribute('y', a_y);
        a_rect.setAttribute('width', a_width);
        a_rect.setAttribute('height', a_height);
        a_foreign_object.setAttribute('x', a_x);
        a_foreign_object.setAttribute('y', a_y);
        a_foreign_object.setAttribute('width', a_width);
        a_foreign_object.setAttribute('height', a_height);

    }

    var b_text = document.getElementById('b_text').value;
    var b_main_text = document.getElementById('b_main_text');
    b_main_text.innerHTML = b_text.replace(/(?:\r\n|\r|\n)/g, '<br>');
    var b_foreign_object = document.getElementById('b_foreign_object');
    var b_font_size = document.getElementById('b_font_size').value;
    document.getElementById('b_main_text').style.fontSize = `${b_font_size}px`;
    if ( b_rect && ( b_rect.x != b_x ||
                     b_rect.y != b_y ||
                     b_rect.width != b_width ||
                     b_rect.height != b_height) 
       ) {
        b_rect.setAttribute('x', b_x);
        b_rect.setAttribute('y', b_y);
        b_rect.setAttribute('width', b_width);
        b_rect.setAttribute('height', b_height);
        b_foreign_object.setAttribute('x', b_x);
        b_foreign_object.setAttribute('y', b_y);
        b_foreign_object.setAttribute('width', b_width);
        b_foreign_object.setAttribute('height', b_height);

    }
}

window.onload = function() {
    var t = document.getElementById("a_text");
    t.innerHTML = "What is happening in the world so that nothing that I do has any impact on anything? It is a mystery to me"

    var x = document.getElementById("a_x");
    x.value = 20;
    x.addEventListener('keypress', (event) =>  {
        var n = this.value;
        if(! filter_numbers(event) ){
            event.preventDefault();
            return false;
        }
    });

    var y = document.getElementById("a_y");
    y.value = 20;
    y.addEventListener('keypress', (event) =>  {
        if(! filter_numbers(event) ){
            event.preventDefault();
            return false;
        }
    });
    
    var width = document.getElementById("a_width");
    width.value = 50;
    width.addEventListener('keypress', (event) =>  {
        if(! filter_numbers(event) ){
            event.preventDefault();
            return false;
        }
    });

    var height = document.getElementById("a_height");
    height.value = 100;
    height.addEventListener('keypress', (event) =>  {
        if(! filter_numbers(event) ){
            event.preventDefault();
            return false;
        }
    });

    var font_size = document.getElementById("a_font_size");
    font_size.value = 3;
    font_size.addEventListener('keypress', (event) =>  {
        if(! filter_numbers(event) ){
            event.preventDefault();
            return false;
        }
    });

    document.getElementById("a_controls").
        addEventListener('change', (event) => {
            update_rectangles();
        });
    document.getElementById("a_text").
        addEventListener('keyup', (event) => {
            update_rectangles();
        });
    var t = document.getElementById("b_text");
    t.innerHTML = "There may well be alternatives.  \n  No body\nis sure\tbut\n  on Tueasday...."

    var x = document.getElementById("b_x");
    x.value = 71;
    x.addEventListener('keypress', (event) =>  {
        var n = this.value;
        if(! filter_numbers(event) ){
            event.preventDefault();
            return false;
        }
    });

    var y = document.getElementById("b_y");
    y.value = 28;
    y.addEventListener('keypress', (event) =>  {
        if(! filter_numbers(event) ){
            event.preventDefault();
            return false;
        }
    });
    
    var width = document.getElementById("b_width");
    width.value = 50;
    width.addEventListener('keypress', (event) =>  {
        if(! filter_numbers(event) ){
            event.preventDefault();
            return false;
        }
    });

    var height = document.getElementById("b_height");
    height.value = 35;
    height.addEventListener('keypress', (event) =>  {
        if(! filter_numbers(event) ){
            event.preventDefault();
            return false;
        }
    });

    var font_size = document.getElementById("b_font_size");
    font_size.value = 3;
    font_size.addEventListener('keypress', (event) =>  {
        if(! filter_numbers(event) ){
            event.preventDefault();
            return false;
        }
    });

    document.getElementById("b_controls").
        addEventListener('change', (event) => {
            update_rectangles();
        });
    document.getElementById("b_text").
        addEventListener('keyup', (event) => {
            update_rectangles();
        });
    update_rectangles();
}

