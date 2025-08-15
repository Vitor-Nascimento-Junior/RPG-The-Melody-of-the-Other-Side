// barras de atributos

const maxPontos = 5;
var atributos = ['agilidade', 'forca', 'inteligencia', 'presenca', 'vigor'];

function atualizarPontos() {
    let total = 0;
    atributos.forEach(attr => {
        var valor = parseInt(document.getElementById(attr).value);
        document.getElementById('valor-' + attr).textContent = valor;
        total += valor;
    });
    const pontosRestantes = maxPontos - total;
    document.getElementById('pontos-restantes').textContent = pontosRestantes;

    // Impede que o usuário distribua mais que o máximo
    atributos.forEach(attr => {
        var input = document.getElementById(attr);
        var valorAtual = parseInt(input.value);
        input.max = valorAtual + pontosRestantes;
    });

    // Desabilita o submit se exceder o limite
    document.querySelector('input[type="button"]').disabled = pontosRestantes < 0;
}

function salvarCadastro() {
    var nome = document.getElementById('nome').value.trim();
    var origem = document.getElementById('origem').value.trim();
    var classe = document.getElementById('classe').value.trim();
    var nex = document.getElementById('nex').value.trim();
    var patente = document.getElementById('patente').value.trim();
    var agilidade = document.getElementById('agilidade').value;
    var forca = document.getElementById('forca').value;
    var inteligencia = document.getElementById('inteligencia').value;
    var presenca = document.getElementById('presenca').value;
    var vigor = document.getElementById('vigor').value;

    // Validação simples
    if (!nome || !origem || !classe || !nex || !patente) {
        alert('Preencha todos os campos obrigatórios!');
        return;
    }

    // Validação dos atributos
    let totalAtributos = [agilidade, forca, inteligencia, presenca, vigor]
        .map(Number)
        .reduce((a, b) => a + b, 0);

    if (totalAtributos > 5) {
        alert('Distribua no máximo 5 pontos entre os atributos!');
        return;
    }

    var dadosCadastro = {
        nome: nome,
        origem: origem,
        classe: classe,
        nex: nex,
        patente: patente,
        atributos: {
            agilidade: agilidade,
            forca: forca,
            inteligencia: inteligencia,
            presenca: presenca,
            vigor: vigor
        }
    };

    fetch('/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosCadastro)
    })
    .then(response => {
        if (response.ok) {
            alert('Cadastro realizado com sucesso!');
            document.getElementById('form-cadastro').reset();
            atualizarPontos();
        } else {
            alert('Erro ao realizar o cadastro. Tente novamente.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao realizar o cadastro. Tente novamente.');
    });
}