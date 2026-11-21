function getById(id) {
    return document.getElementById(id);
}

getById("btnEntrada").addEventListener("click", function () {
    let textoIdade = getById("campoIdade").value;
    let ingresso = getById("campoIngresso").value.trim().toLowerCase();
    let convite = getById("campoConvite").value.trim().toLowerCase();
    let bloqueado = getById("campoBloqueado").value.trim().toLowerCase();
    let saida = getById("saidaEntrada");

    if (textoIdade == "") {
        saida.innerText = "Informe a idade.";
        return;
    }

    let idade = Number(textoIdade);

    if (!Number.isInteger(idade) || idade < 0) {
        saida.innerText = "Digite uma idade inteira e não negativa.";
        return;
    }

    if (
        (ingresso != "sim" && ingresso != "nao") ||
        (convite != "sim" && convite != "nao") ||
        (bloqueado != "sim" && bloqueado != "nao")
    ) {
        saida.innerText = "Responda apenas sim ou nao nos três campos.";
        return;
    }

    if (idade >= 16 && (ingresso == "sim" || convite == "sim") && ! (bloqueado == "sim")) {
        saida.innerText = "Entrada permitida.";
    } else {
        saida.innerText = "Entrada não permitida.";
    }
});

getById("btnCalcular").addEventListener("click", function () {
    let textoNumero1 = getById("campoNumero1").value;
    let textoNumero2 = getById("campoNumero2").value;
    let operacao = getById("campoOperacao").value.trim();
    let saida = getById("saidaCalculadora");

    if (textoNumero1 == "" || textoNumero2 == "") {
        saida.innerText = "Preencha os dois campos numéricos.";
        return;
    }

    let numero1 = Number(textoNumero1);
    let numero2 = Number(textoNumero2);

    if (!Number.isFinite(numero1) || !Number.isFinite(numero2)) {
        saida.innerText = "Digite valores numéricos válidos.";
        return;
    }

    let resultado;

    switch (operacao) {
        case "+":
            resultado = numero1 + numero2;
            break;

        case "-":
            resultado = numero1 - numero2;
            break;

        case "*":
            resultado = numero1 * numero2;
            break;

        case "/":
            if (numero2 == 0) {
                saida.innerText = "Não é possível dividir por zero.";
                return;
            }

            resultado = numero1 / numero2;
            break;

        default:
            saida.innerText = "Operação inválida. Utilize +, -, * ou /.";
            return;
    }

    saida.innerText = "Resultado: " + resultado;
});

getById("btnPares").addEventListener("click", function () {
    let texto = getById("campoLimite").value;
    let saida = getById("saidaPares");

    if (texto == "") {
        saida.innerText = "Informe um número.";
        return;
    }

    let limite = Number(texto);

    if (!Number.isInteger(limite) || limite < 1 || limite > 100) {
        saida.innerText = "Digite um número inteiro de 1 a 100.";
        return;
    }

    let pares = [];
    let quantidade = 0;
    let soma = 0;

    for (let i = 1; i <= limite; i++) {
        if (i % 2 == 0) {
            pares.push(i);
            quantidade++;
            soma += i;
        }
    }

    saida.style.whiteSpace = "pre-line";

    if (quantidade == 0) {
        saida.innerText =
            "Não há números pares no intervalo.\n" +
            "Quantidade: 0\n" +
            "Soma: 0";
    } else {
        saida.innerText =
            "Números pares: " + pares.join(", ") + "\n" +
            "Quantidade: " + quantidade + "\n" +
            "Soma: " + soma;
    }
});

getById("btnEconomia").addEventListener("click", function () {
    let textoMeta = getById("campoMeta").value;
    let textoDeposito = getById("campoDeposito").value;
    let saida = getById("saidaEconomia");

    if (textoMeta == "" || textoDeposito == "") {
        saida.innerText = "Preencha os dois campos.";
        return;
    }

    let meta = Number(textoMeta);
    let deposito = Number(textoDeposito);

    if (
        !Number.isInteger(meta) ||
        !Number.isInteger(deposito) ||
        meta < 1 ||
        meta > 10000 ||
        deposito < 1 ||
        deposito > 10000
    ) {
        saida.innerText =
            "Digite valores inteiros de 1 a 10.000 nos dois campos.";
        return;
    }

    let saldo = 0;
    let quantidade = 0;
    let texto = "";

    while (saldo < meta) {
        saldo += deposito;
        quantidade++;

        texto += "Depósito " + quantidade + ": R$ " + saldo + "\n";
    }

    texto += "Depósitos necessários: " + quantidade + "\n";
    texto += "Saldo final: R$ " + saldo;

    saida.style.whiteSpace = "pre-line";
    saida.innerText = texto;
});