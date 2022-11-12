// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

//Não atualizar a pagina 
form.addEventListener('submit', function (evento) {
  evento.preventDefault();
  const inputPeso = evento.target.querySelector('#peso');
  const inputAltura = evento.target.querySelector('#altura');

  //Converter o reswultado para number
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  //Caso não seja numero aparecera essa msg
  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }
  //pegar e calcular o IMC
  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  //Mostrar o IMC
  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});
//ver qual nivel de IMC é 
function getNivelImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}
//calcular o imc
function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}
//criar um p no formulario
function criaP() {
  const p = document.createElement('p');
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado');
  //Limpar o p
  resultado.innerHTML = '';
  //criar outro p
  const p = criaP();
  //Adicionar no p se é valido ou não
  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }
  //colocar a msg
  p.innerHTML = msg;
  resultado.appendChild(p);
}
