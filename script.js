document.getElementById('financing-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const valor = parseFloat(document.getElementById('valor').value);
    const taxa = parseFloat(document.getElementById('taxa').value) / 100;
    const meses = parseInt(document.getElementById('meses').value);

    // Cálculo da prestação usando o Sistema Price
    const taxaJuros = Math.pow(1 + taxa, meses) * taxa;
    const prestacao = (valor * taxaJuros) / (Math.pow(1 + taxa, meses) - 1);

    document.getElementById('resultado').innerHTML = `
        <h2>Resultado</h2>
        <p>Prestação Mensal: R$ ${prestacao.toFixed(2)}</p>
        <p>Total a Pagar: R$ ${(prestacao * meses).toFixed(2)}</p>
    `;
});
