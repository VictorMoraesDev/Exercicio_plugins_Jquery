$(document).ready(function() {
    $('#nome-completo').on('blur', function() {
      var valor = $(this).val().trim();
      var partesNome = valor.split(' ');
      var nomeError = $('#nome-error');
      if (partesNome.length < 2) {
        $(this).addClass('campo-invalido');
        nomeError.text('Por favor, insira o nome completo.').show();
      } else {
        $(this).removeClass('campo-invalido');
        nomeError.hide();
      }
    });
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');
    $('#telefone').mask('(00) 00000-0000');
  });
