function soma() {
    let valor1 = $('#valor1').val();
    let valor2 = $('#valor2').val();
    $.ajax
        ({
            url: "/Calculadora/Soma",
            data:
            {
                valor1: valor1,
                valor2: valor2
            },
        }).done(function (response) {
            $('#total').val(response);
        });
}

function subtrai() {
    let valor1 = $('#valor1').val();
    let valor2 = $('#valor2').val();
    $.ajax
        ({
            url: "/Calculadora/Subtrai",
            data:
            {
                valor1: valor1,
                valor2: valor2
            },
        }).done(function (response) {
            $('#total').val(response);
        });
}

function multiplica() {
    let valor1 = $('#valor1').val();
    let valor2 = $('#valor2').val();
    $.ajax
        ({
            url: "/Calculadora/Multiplica",
            data:
            {
                valor1: valor1,
                valor2: valor2
            },
        }).done(function (response) {
            $('#total').val(response);
        });
}

function divide() {
    let valor1 = $('#valor1').val();
    let valor2 = $('#valor2').val();
    $.ajax
        ({
            url: "/Calculadora/Divide",
            data:
            {
                valor1: valor1,
                valor2: valor2
            },
        }).done(function (response) {
            $('#total').val(response);
        });
}