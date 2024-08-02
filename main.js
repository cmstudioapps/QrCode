function gerar() {
   
   let texto = document.getElementById("texto").value
let div = document.getElementById("qrcode")
   
   div.innerHTML = ""
   
   let qrCode = new QRCode(div, {
      
      text: texto,
      width: 200,
      height: 200
      
      
   })
   
}