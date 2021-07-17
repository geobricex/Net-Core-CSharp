var editar = false;
window.onload = function () {
    var id = $.urlParam('id');
    console.log(id);
    if (id != null) {
        editar = true;
        $("#txtidusuario").val(id);
        PintarUsuario(id);
    }
};

$.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
        return null;
    }
    return decodeURI(results[1]) || 0;
}

function IrFormularioInicio() {
    window.location = "Inicio.html";
}

function PintarUsuario(idUsuario) {

    $.get(URL + idUsuario)
        .done(function (response) {
            console.log(response);
            $("#txtdocumento").val(response.DocumentoIdentidad),
                $("#txtnombres").val(response.Nombres),
                $("#txttelefono").val(response.Telefono),
                $("#txtcorreo").val(response.Correo),
                $("#txtciudad").val(response.Ciudad)
        });
}


function GuardarUsuario() {
    if (editar) {
        var data = {
            IdUsuario: $("#txtidusuario").val(),
            DocumentoIdentidad: $("#txtdocumento").val(),
            Nombres: $("#txtnombres").val(),
            Telefono: $("#txttelefono").val(),
            Correo: $("#txtcorreo").val(),
            Ciudad: $("#txtciudad").val()
        }
        //Por medio de AJAX ($) actualisamos con el metodo PUT de REST 
        $.ajax({
            method: "PUT",
            url: URL,
            contentType: 'application/json',
            data: JSON.stringify(data), // access in body
        })
            .done(function (response) {
                console.log(response);
                if (response) {
                    alert("Se guardaron los cambios");
                    window.location = "Inicio.html";
                } else {
                    alert("Error al Modificar")
                }
            });

    } else {

        var data = {
            DocumentoIdentidad: $("#txtdocumento").val(),
            Nombres: $("#txtnombres").val(),
            Telefono: $("#txttelefono").val(),
            Correo: $("#txtcorreo").val(),
            Ciudad: $("#txtciudad").val()
        }
        //Por medio de AJAX ($) guardamos con el metodo post de REST
        $.post(URL, data).done(function (response) {
            console.log(response);
            if (response) {
                alert("Usuario Creado");
                window.location = "Inicio.html";
            } else {
                alert("Error al crear");
            }
        });
    }

}