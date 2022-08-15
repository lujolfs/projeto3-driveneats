let dps;

function selecaoDps(jobEscolhido) {
    const opcaoSelecionada = document.querySelector('.dps .selecionado-dps');

    if (opcaoSelecionada !== null) {
        opcaoSelecionada.classList.remove('selecionado-dps');
    }

    const seletor = '.'+jobEscolhido;
    const botao = document.querySelector(seletor);
    botao.classList.add('selecionado-dps');
    console.log(botao);
    dps = !!botao;

    finalizaCompra()

}


let tank;

function selecaoTank(jobEscolhido) {
    const opcaoSelecionada = document.querySelector('.tank .selecionado-tank');
    if (opcaoSelecionada !== null) {
        opcaoSelecionada.classList.remove('selecionado-tank');
    }
const seletor = '.'+jobEscolhido;
const botao = document.querySelector(seletor);
botao.classList.add('selecionado-tank');

tank = !!botao;

finalizaCompra()
}

let healer;

function selecaoHealer(jobEscolhido) {
    const opcaoSelecionada = document.querySelector('.healer .selecionado-healer');
    if (opcaoSelecionada !== null) {
        opcaoSelecionada.classList.remove('selecionado-healer');
    }
const seletor = '.'+jobEscolhido;
const botao = document.querySelector(seletor);
botao.classList.add('selecionado-healer');

healer = !!botao;

finalizaCompra()

}

function finalizaCompra() {
    console.log(dps, healer, tank);
    if (dps && tank && healer) {
        const compraLigada = document.querySelector('.botao-ligado');
        compraLigada.classList.remove('escondido');
        const compraDesligada = document.querySelector('.botao-desligado');
        compraDesligada.classList.add('escondido');

    }

}

function abrirLink() {
    const msgZap = encodeURIComponent("Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n- Sobremesa: Pudim\nTotal: R$ 27.70");
    const linkZap = "https://wa.me/5521991504742?text="+msgZap;
    window.open(linkZap);
}
