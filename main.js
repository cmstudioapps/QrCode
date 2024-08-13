

function gerar() {
    let texto = document.getElementById("texto").value;
    let div = document.getElementById("qrcode");

    // URL base do seu site
    let baseUrl = window.location.href;

    // Adiciona o texto ao parâmetro 'qrcode'
    let urlComParametro = `${baseUrl}?qrcode=${encodeURIComponent(texto)}`;

    div.innerHTML = "";

    let qrCode = new QRCode(div, {
        text: urlComParametro,
        width: 200,
        height: 200
    });
}

window.addEventListener("keydown", function(e){
    if(e.key === "Enter") {
        gerar();
    }
});

function qrcodeScaneado() {
    alert('QR Code escaneado!');
    // Aqui você pode executar qualquer outra função
}

function verificarQrcodeNaUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('qrcode')) {
        qrcodeScaneado();
    }
}

window.onload = verificarQrcodeNaUrl;