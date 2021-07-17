app = angular.module('app', []);
app.controller('inicioController', function ($scope, $http) {
    $scope.result = [];
    window.onload = function () {
        //Función que obtendra los datos de la Web API para mostrarlos en nuestra página Web
        Obtener();
    };

    $scope.IrFormularioCrear = function IrFormularioCrear() {
        window.location = "Registro.html";
    }

    function Obtener() {
        //Limpia todo lo que contenga la pantalla
        //$(".table tbody").html("");
        //Por medio de AJAX ($) se llama al metodo get de REST
        $.get(URL).done(function (response) {
            //console.log(typeof response);
            $scope.$apply(function () {
                $scope.result = response;
                console.log($scope.result);
            });
            //Aquí se va a mostrar por medio de una tabla los datos que obtenemos de la Web API
            //$.each(response, function (id, fila) {

            //$("<tr>").append(
            //    $("<td>").text(fila.IdUsuario),
            //    $("<td>").text(fila.DocumentoIdentidad),
            //    $("<td>").text(fila.Nombres),
            //    $("<td>").text(fila.Telefono),
            //    $("<td>").text(fila.Correo),
            //    $("<td>").text(fila.Ciudad),
            //    $("<td>").append(
            //        $("<button>").data("id",fila.IdUsuario).addClass("btn btn-success btn-sm mr-1 editar").text("Editar").attr({"type":"button"}),
            //        $("<button>").data("id",fila.IdUsuario).addClass("btn btn-danger btn-sm eliminar").text("Eliminar").attr({"type":"button"})
            //    )
            //).appendTo(".table");
            //    });
        });
    }
    $('#tablesearch').on('click', '#btnEditar', function () {
        //    console.log($(this).data("id"));
        //    window.location = "Registro.html?id=" + $(this).data("id");
        console.log($(this).val());
        window.location = "Registro.html?id=" + $(this).val();
    });
    //$(document).on('click', '.editar', function () {
    //    console.log($(this).data("id"));
    //    window.location = "Registro.html?id=" + $(this).data("id");

    //});

    /*    $(document).on('click', '.eliminar', function () {*/
    $('#tablesearch').on('click', '#btnEliminar', function () {
        //console.log($(this).data("id"));
        console.log($(this).val());

        //Por medio AJAX ($) llamamos al metodo delete de REST, para proceder a eliminar un registro de la REST API
        $.ajax({
            method: "DELETE",
            url: URL + $(this).val() /* $(this).data("id")*/
        }).done(function (response) {
            console.log(response);
            if (response) {
                Obtener();
            } else {
                alert("Error al eliminar")
            }
        });

    });
});