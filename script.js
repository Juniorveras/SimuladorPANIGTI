var valor = document.getElementById("valor");
var prazo = document.getElementById("prazo");
var juros = document.getElementById("juros");
var tbody = document.querySelector("tbody");

function calcular() {
  var total = valor.valueAsNumber;
  var meses = prazo.valueAsNumber * 12;
  var jurosAA = juros.valueAsNumber;
  var jurosAM = (1 + jurosAA) ** (1 / 12) - 1;
  var amortizacao = total / meses;
  document.getElementById("meses").valueAsNumber = meses;
  document.getElementById("jurosam").valueAsNumber = jurosAM;

  for (var i = 0; i < 5; i++) {
    var saldoDevedor = total - i * amortizacao;
    var jurosP = saldoDevedor * jurosAM;
    var tr = tbody.children[i];
    tr.children[1].textContent = amortizacao.toFixed(2);
    tr.children[2].textContent = jurosP.toFixed(2);
    tr.children[3].textContent = (amortizacao + jurosP).toFixed(2);
  }

  var totalj = 0;
  for (var i = 0; i < meses; i++) {
    var saldoDevedor = total - i * amortizacao;
    var jurosP = saldoDevedor * jurosAM;
    totalj += jurosP;
  }
  document.getElementById("total").value = totalj.toFixed(2);
}

calcular();

/*
🙃
 */
function typingEffect() {
  const contactTexts = shuffleArray(['Você já fez sua Simulação hoje?😊', 'Sabe oque Gasta!😄', 'Quer entender ?', 'Vem SIMULAR que o PAN é bem aberto e te mostra!🤗', 'O seu Help aqui!👍']);
  const typedtext = document.getElementsByClassName("typedtext")[0];
  let removing = false;
  let idx = char = 0;

  setInterval(() => {

      if (char < contactTexts[idx].length) typedtext.innerHTML += contactTexts[idx][char];

      if (char == contactTexts[idx].length + 15) removing = true;

      if (removing) typedtext.innerHTML = typedtext.innerHTML.substring(0, typedtext.innerHTML.length - 1);

      char++;

      if (typedtext.innerHTML.length === 0) {

          if (idx === contactTexts.length - 1) idx = 0
          else idx++;

          char = 0;
          removing = false; 
      }

  }, 150);

}
typingEffect();
function shuffleArray(array) {
  let currentIndex = array.length,
      temporaryValue, randomIndex;

  while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }

  return array;
}