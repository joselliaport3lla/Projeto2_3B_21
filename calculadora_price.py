def calcular_prestacao(price_value, annual_interest_rate, months):
    monthly_interest_rate = (annual_interest_rate / 100) / 12

    prestacao = price_value * (monthly_interest_rate * (1 + monthly_interest_rate) ** months) / ((1 + monthly_interest_rate) ** months - 1)
    
    return prestacao

def gerar_detalhamento(price_value, annual_interest_rate, months):
    prestacao = calcular_prestacao(price_value, annual_interest_rate, months)
    saldo_devedor = price_value
    monthly_interest_rate = (annual_interest_rate / 100) / 12
    detalhamento = []

    for mes in range(1, months + 1):
        juros_mes = saldo_devedor * monthly_interest_rate
        
        amortizacao = prestacao - juros_mes
        
        saldo_devedor -= amortizacao
        
        detalhamento.append({
            "Mês": mes,
            "Prestação": round(prestacao, 2),
            "Amortização": round(amortizacao, 2),
            "Juros": round(juros_mes, 2),
            "Saldo Devedor": round(saldo_devedor, 2)
        })
    
    return detalhamento

def main():
    print("Calculadora de Prestações no Sistema Price")
    
    price_value = float(input("Digite o valor do financiamento (PV): "))
    annual_interest_rate = float(input("Digite a taxa de juros anual (em %): "))
    months = int(input("Digite o prazo do financiamento (em meses): "))

    prestacao = calcular_prestacao(price_value, annual_interest_rate, months)
    print(f"\nO valor da prestação mensal fixa será: R$ {round(prestacao, 2)}")
    
    opcao = input("\nDeseja ver o detalhamento do pagamento mensal? (s/n): ").lower()
    
    if opcao == 's':
        detalhamento = gerar_detalhamento(price_value, annual_interest_rate, months)
        
        for mes in detalhamento:
            print(f"\nMês: {mes['Mês']}")
            print(f"Prestação: R$ {mes['Prestação']}")
            print(f"Amortização: R$ {mes['Amortização']}")
            print(f"Juros: R$ {mes['Juros']}")
            print(f"Saldo Devedor: R$ {mes['Saldo Devedor']}")
    else:
        print("\nCálculo finalizado. Obrigado por usar a calculadora!")
        
if __name__ == "__main__":
    main()
