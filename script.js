function calcularPrestacao() {
    const valorFinanciamento = parseFloat(document.getElementById('valorFinanciamento').value);
    const taxaJuros = parseFloat(document.getElementById('taxaJuros').value);
    const prazo = parseInt(document.getElementById('prazo').value);

    if (isNaN(valorFinanciamento) || isNaN(taxaJuros) || isNaN(prazo)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const taxaJurosMensal = (taxaJuros / 100) / 12;

    const prestacao = valorFinanciamento * (taxaJurosMensal * Math.pow((1 + taxaJurosMensal), prazo)) / (Math.pow((1 + taxaJurosMensal), prazo) - 1);

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `<p>O valor da prestação mensal será: <strong>R$ ${prestacao.toFixed(2)}</strong></p>`;

    gerarDetalhamento(valorFinanciamento, taxaJurosMensal, prazo, prestacao);
}

function gerarDetalhamento(valorFinanciamento, taxaJurosMensal, prazo, prestacao) {
    let saldoDevedor = valorFinanciamento;
    let detalhamento = '<h2>Detalhamento do Pagamento Mensal</h2><table><tr><th>Mês</th><th>Amortização</th><th>Juros</th><th>Prestação</th><th>Saldo Devedor</th></tr>';

    for (let mes = 1; mes <= prazo; mes++) {
        const jurosMes = saldoDevedor * taxaJurosMensal;
        const amortizacao = prestacao - jurosMes;
        saldoDevedor -= amortizacao;

        detalhamento += `<tr>
            <td>${mes}</td>
            <td>R$ ${amortizacao.toFixed(2)}</td>
            <td>R$ ${jurosMes.toFixed(2)}</td>
            <td>R$ ${prestacao.toFixed(2)}</td>
            <td>R$ ${saldoDevedor.toFixed(2)}</td>
        </tr>`;
    }

    detalhamento += '</table>';
    document.getElementById('resultado').innerHTML += detalhamento;
}
