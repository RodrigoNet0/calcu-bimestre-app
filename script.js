let notas = document.querySelectorAll('.nota');
let pontosInput = document.querySelector('.pontos');
let totalInput = document.querySelector('.total');
let myBtn = document.querySelector('.myBtn');

myBtn.addEventListener('click', function() {
  let totalNotas = 0;
  notas.forEach(function(nota) {
    totalNotas += parseFloat(nota.value);
  });
  let pontos = parseFloat(pontosInput.value);
  let resultado = totalNotas + pontos;
  totalInput.value = resultado;
});
