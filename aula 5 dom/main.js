function clicar(){
    const real = document.getElementById('reais')
    const res = real.value * 0.1766
    alert(`o valor convertido em Dólar é ${res.toFixed(2)} (US$)`)
}