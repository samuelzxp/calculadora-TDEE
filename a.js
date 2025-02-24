
document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('botao');
    botao.addEventListener('click', function() {  

    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const idade = document.getElementById('idade');
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const atividade = document.querySelector('select[name="atividade"]').value;


    
    const fatoresAtividade = {
        sedentario: 1.2,
        leve: 1.375,
        moderado: 1.55,
        intenso: 1.725,
        muitoIntenso: 1.9
    };
    
    function tmbHomens() {
        const pesoValor = parseFloat(peso.value);
        const alturaValor = parseFloat(altura.value);
        const idadeValor = parseFloat(idade.value);
    
        if (isNaN(pesoValor) || isNaN(alturaValor) || isNaN(idadeValor)) {
            return "Insira valores válidos.";
        }
    
        const homenstmb = 88.362 + (13.397 * pesoValor) + (4.799 * alturaValor) - (5.677 * idadeValor);
        return parseFloat(homenstmb.toFixed(2));
    
    }
    
    function tmbMulheres() {
        const pesoValor = parseFloat(peso.value);
        const alturaValor = parseFloat(altura.value);
        const idadeValor = parseFloat(idade.value);
    
        if (isNaN(pesoValor) || isNaN(alturaValor) || isNaN(idadeValor)) {
            return "Insira valores válidos.";
        }
    
        const mulherestmb = 447.593 + (9.247 * pesoValor) + (3.098 * alturaValor) - (4.330 * idadeValor);
        return parseFloat(mulherestmb.toFixed(2));
    
    }
    
        let tmbResultado;
        if (genero === "homem") {
       tmbResultado = tmbHomens();
        } else {
           tmbResultado = tmbMulheres();
        } 

        if (typeof tmbResultado === "number" && !isNaN(tmbResultado)) {
            const tmbReal = tmbResultado * fatoresAtividade[atividade];
            document.getElementById('resultado').innerHTML = `Sua Taxa Metabólica é: ${tmbReal.toFixed(2)} calorias por dia.`;
        } else {
            document.getElementById('resultado').innerHTML = tmbResultado;
        }
    });
});
    
   
    
    