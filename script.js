function selecaoDps(jobEscolhido) {
    const opcaoSelecionada = document.querySelector('.dps .selecionado-dps');
    if (opcaoSelecionada !== null) {
        opcaoSelecionada.classList.remove('selecionado-dps');
    }
const seletor = '.'+jobEscolhido;
const botao = document.querySelector(seletor);
botao.classList.add('selecionado-dps');
}

function selecaoTank(jobEscolhido) {
    const opcaoSelecionada = document.querySelector('.tank .selecionado-tank');
    if (opcaoSelecionada !== null) {
        opcaoSelecionada.classList.remove('selecionado-tank');
    }
const seletor = '.'+jobEscolhido;
const botao = document.querySelector(seletor);
botao.classList.add('selecionado-tank');
}

function selecaoHealer(jobEscolhido) {
    const opcaoSelecionada = document.querySelector('.healer .selecionado-healer');
    if (opcaoSelecionada !== null) {
        opcaoSelecionada.classList.remove('selecionado-healer');
    }
const seletor = '.'+jobEscolhido;
const botao = document.querySelector(seletor);
botao.classList.add('selecionado-healer');
}