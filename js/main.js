'use strict'
$(document).ready(function () {
    //Переключення тари
    //1 товар
    $('#litr05').on('click', function () {
        $('#half').css('display', 'block');
        $('#one').css('display', 'none');
        $('#one_half').css('display', 'none');
    });
    $('#litr15').on('click', function () {
        $('#half').css('display', 'none');
        $('#one_half').css('display', 'block');
        $('#one').css('display', 'none');
    });
    $('#litr1').on('click', function () {
        $('#one_half').css('display', 'none');
        $('#half').css('display', 'none');
        $('#one').css('display', 'block');
    });
    //2 товар
    $('#litr05_1').on('click', function () {
        $('#half_1').css('display', 'block');
        $('#one_1').css('display', 'none');
        $('#one_half_1').css('display', 'none');
    });
    $('#litr15_1').on('click', function () {
        $('#half_1').css('display', 'none');
        $('#one_half_1').css('display', 'block');
        $('#one_1').css('display', 'none');
    });
    $('#litr1_1').on('click', function () {
        $('#one_half_1').css('display', 'none');
        $('#half_1').css('display', 'none');
        $('#one_1').css('display', 'block');
    });
    //3 товар
    $('#litr05_2').on('click', function () {
        $('#half_2').css('display', 'block');
        $('#one_2').css('display', 'none');
        $('#one_half_2').css('display', 'none');
    });
    $('#litr15_2').on('click', function () {
        $('#half_2').css('display', 'none');
        $('#one_half_2').css('display', 'block');
        $('#one_2').css('display', 'none');
    });
    $('#litr1_2').on('click', function () {
        $('#one_half_2').css('display', 'none');
        $('#half_2').css('display', 'none');
        $('#one_2').css('display', 'block');
    });
    //4 товар
    $('#litr05_3').on('click', function () {
        $('#half_3').css('display', 'block');
        $('#one_3').css('display', 'none');
        $('#one_half_3').css('display', 'none');
    });
    $('#litr15_3').on('click', function () {
        $('#half_3').css('display', 'none');
        $('#one_half_3').css('display', 'block');
        $('#one_3').css('display', 'none');
    });
    $('#litr1_3').on('click', function () {
        $('#one_half_3').css('display', 'none');
        $('#half_3').css('display', 'none');
        $('#one_3').css('display', 'block');
    });
    //5 товар
    $('#litr05_4').on('click', function () {
        $('#half_4').css('display', 'block');
        $('#one_4').css('display', 'none');
        $('#one_half_4').css('display', 'none');
    });
    $('#litr15_4').on('click', function () {
        $('#half_4').css('display', 'none');
        $('#one_half_4').css('display', 'block');
        $('#one_4').css('display', 'none');
    });
    $('#litr1_4').on('click', function () {
        $('#one_half_4').css('display', 'none');
        $('#half_4').css('display', 'none');
        $('#one_4').css('display', 'block');
    });
    //6 товар
    $('#litr05_5').on('click', function () {
        $('#half_5').css('display', 'block');
        $('#one_5').css('display', 'none');
        $('#one_half_5').css('display', 'none');
    });
    $('#litr15_5').on('click', function () {
        $('#half_5').css('display', 'none');
        $('#one_half_5').css('display', 'block');
        $('#one_5').css('display', 'none');
    });
    $('#litr1_5').on('click', function () {
        $('#one_half_5').css('display', 'none');
        $('#half_5').css('display', 'none');
        $('#one_5').css('display', 'block');
    });
    //7 товар
    $('#litr05_6').on('click', function () {
        $('#half_6').css('display', 'block');
        $('#one_6').css('display', 'none');
        $('#one_half_6').css('display', 'none');
    });
    $('#litr15_6').on('click', function () {
        $('#half_6').css('display', 'none');
        $('#one_half_6').css('display', 'block');
        $('#one_6').css('display', 'none');
    });
    $('#litr1_6').on('click', function () {
        $('#one_half_6').css('display', 'none');
        $('#half_6').css('display', 'none');
        $('#one_6').css('display', 'block');
    });
    //8 товар
    $('#litr05_7').on('click', function () {
        $('#half_7').css('display', 'block');
        $('#one_7').css('display', 'none');
        $('#one_half_7').css('display', 'none');
    });
    $('#litr15_7').on('click', function () {
        $('#half_7').css('display', 'none');
        $('#one_half_7').css('display', 'block');
        $('#one_7').css('display', 'none');
    });
    $('#litr1_7').on('click', function () {
        $('#one_half_7').css('display', 'none');
        $('#half_7').css('display', 'none');
        $('#one_7').css('display', 'block');
    });
});



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//Yura

var x = 0;
var x2 = 0;
var crug = setInterval(function () {
    $('#moon').animate({
        left: "150px",
        top: "90px",
        top: "20px",
        top: "90px",
        width: "120px",
        height: "120px",
    }, 1500, "linear", function () {
        $(this).animate({
            left: "300px",
            top: "80px",
            width: "80px",
            height: "80px",
        }, 1500, "linear", function () {
            $(this).animate({
                top: "100px",
                left: "50px",
            }, 1500, "linear").css({
                zIndex: 5
            })
        }).css({
            zIndex: 15
        })
    }).css({
        zIndex: 15
    })
}, 4500);
setInterval(function () {
    x += 3;
    $('#moon').css({
        transform: "rotate(" + x + "deg)"
    })
}, 50);
setInterval(function () {
    x2 += 3;
    $('#pivko_yoda').css({
        transform: "rotate(" + x2 + "deg)"
    })
}, 10)



function Tooltip() {
    this.tooltip = document.createElement("div");
    this.tooltip.style.position = "absolute";
    this.tooltip.style.visibility = "hidden";
    this.tooltip.className = "tooltip";
}


Tooltip.prototype.show = function (text, x, y) {
    this.tooltip.innerHTML = text;
    this.tooltip.style.left = x + "px";
    this.tooltip.style.top = y + "px";
    this.tooltip.style.visibility = "visible";


    if (this.tooltip.parentNode != document.body)
        document.body.appendChild(this.tooltip);
};


Tooltip.prototype.hide = function () {
    this.tooltip.style.visibility = "hidden";
};

window.onload = function () {
    var d = document.getElementById("test");
    d.onmousemove = mouseMoveHandler;
    d.onmouseout = mouseOutHandler;
}

var t = new Tooltip();

function mouseMoveHandler(e) {
    if (!e) e = window.event;
    t.show("яку сторону обереш ти??", e.clientX + 10, e.clientY + 10);
}

function mouseOutHandler() {
    t.hide();
}





function myFunctionDarth() {
    var color = 0;

    setInterval(function () {
        color = color + 1 % 360;
        document.getElementById("rect")
            .style.backgroundColor = "hsl(" + color + ", 100%, 50%)";
    }, 50);

}

function myFunctionYoda() {
    var color = 80;

    setInterval(function () {
        color = color + 1 % 360;
        var master = document.getElementById("rect2")
            .style.backgroundColor = "hsl(" + color + ", 100%, 50%)";
    }, 50);

}


//Iryna

    $('.main__statistic-numbers').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

$('#myDelivery1').on('click', function () {
    $('#myModal').css('display', 'block');
});

$('#myDelivery2').on('click', function () {
    $('#myModal').css('display', 'block');
});
$('#myDelivery3').on('click', function () {
    $('#myModal').css('display', 'block');
});
$('#myDelivery4').on('click', function () {
    $('#myModal').css('display', 'block');
});
$('#myDelivery5').on('click', function () {
    $('#myModal').css('display', 'block');
});
$('#myDelivery6').on('click', function () {
    $('#myModal').css('display', 'block');
});
$('#myDelivery7').on('click', function () {
    $('#myModal').css('display', 'block');
});
$('#myDelivery8').on('click', function () {
    $('#myModal').css('display', 'block');
});
