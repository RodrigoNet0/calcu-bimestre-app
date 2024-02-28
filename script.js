const htmlTemplate = `
<div class="container">
  <label>Bimestre 1:</label>
  <input type="number" placeholder="Nota do bimestre 1" class="nota"/><br>
  <label>Bimestre 2:</label>
  <input type="number" placeholder="Nota do bimestre 2" class="nota"/><br>
  <label>Bimestre 3:</label>
  <input type="number" placeholder="Nota do bimestre 3" class="nota"/><br>
  <label>Bimestre 4:</label>
  <input type="number" placeholder="Nota do bimestre 4" class="nota"/><br>
  <label>Pontos de Trabalho:</label>
  <input type="number" placeholder="Pontos de trabalho" class="pontos"/><br>
  <label>Total:</label>
  <input type="text" class="total" readonly/><br>
  <button class="myBtn">Calcular Total</button>
</div>
<div class="footer">
  <h5 class="name-p">Desenvolvido por <a href="https://www.instagram.com/rodrigo.neto/">Rodrigo Neto</a></h5>
  <ul>
    <li><a href="https://www.instagram.com/rodrigo.neto/"><i class="bi bi-instagram"></a></i></li>
    <li><a href="https://github.com/RodrigoNet0"><i class="bi bi-github"></a></i></li>
  </ul>
</div>
`;


document.body.innerHTML = htmlTemplate;


const notas = document.querySelectorAll('.nota');
const pontosInput = document.querySelector('.pontos');
const totalInput = document.querySelector('.total');
const myBtn = document.querySelector('.myBtn');


myBtn.addEventListener('click', function() {
  let totalNotas = 0;
  notas.forEach(function(nota) {
    totalNotas += parseFloat(nota.value);
  });
  
  const pontos = parseFloat(pontosInput.value);
  const resultado = totalNotas + pontos;
  totalInput.value = resultado;
});


window.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');
  if (container.scrollHeight > window.innerHeight) {
    container.style.overflowY = 'scroll';
  }
});
