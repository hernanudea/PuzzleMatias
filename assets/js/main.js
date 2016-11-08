(function () {
    $("#sortable").sortable();
    $("#sortable").disableSelection();
    var aleatorio = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    numAleatorios();
    cargarImagenes();

    function cargarImagenes() {
        var imagenes = document.getElementsByTagName("img");
        for (var i = 0; i < imagenes.length; i++) {
            imagenes[i].setAttribute("src", "assets/img/" + aleatorio[i] + ".jpg");
        }
    }

    function numAleatorios() {
        for (var i = 0; i < aleatorio.length; i++) {
            var num = Math.floor(Math.random() * 16);
            var tmp = aleatorio[i];
            aleatorio[i] = aleatorio[num];
            aleatorio[num] = tmp;
        }
    }
}());
