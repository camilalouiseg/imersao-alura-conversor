var cotacaoDoDolar = 5.2;
var valorEmDolar = document.getElementById('numero');
var valorEmReal = valorEmDolar.value * cotacaoDoDolar;
var resultado = document.getElementById('resultado');

valorEmReal = valorEmReal.toFixed(2);

function converterEmReal() {
  resultado.innerHTML = ("R$ " + valorEmDolar.value * cotacaoDoDolar)
};

var btn = document.getElementById('btn-converter');

document.addEventListener("keypress", function(e) {
  if (e.key === 'Enter') {
    btn.click();
  }
});