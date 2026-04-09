 $('#btnEnviarConsulta').click(function() {
    var consulta = $('#consulta_text').val();
    var email_consulta = $('#email_consulta').val();
    if (consulta === '') {
      $('#mensaje-feedback').html('<div class="alert alert-warning">Falta la consulta.</div>');
      return;
    }
    
    // Envía la consulta al script PHP
    $.ajax({
      url: 'envio/enviar_consulta.php',
      type: 'POST',
      data: { pconsulta: consulta,pemail_consulta:email_consulta },
      success: function(response) {
        if (response.success) {
          $('#mensaje-feedback').html('<div class="alert alert-success">Consulta enviada amb èxit.</div>');
          // Opcional: Cierra la modal después de un tiempo
          setTimeout(function() {
            $('#consultaModal').modal('hide');
          }, 2000);
        } else {
          $('#mensaje-feedback').html('<div class="alert alert-danger">Error al enviar la consulta.</div>');
        }
      },
      error: function() {
        $('#mensaje-feedback').html('<div class="alert alert-danger">Error de conexió. Intenta de nou.</div>');
      }
    });
  });

  // Limpia el mensaje cuando se cierra la modal
  $('#consultaModal').on('hidden.bs.modal', function () {
    $('#mensaje-feedback').empty();
    $('#consulta-text').val('');
  });

