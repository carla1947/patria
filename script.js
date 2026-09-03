document.addEventListener('DOMContentLoaded', () => {
    const btnHastear = document.getElementById('btnHastear');
    const statusBandeira = document.getElementById('statusBandeira');
  
    let hasteada = false;
  
    btnHastear.addEventListener('click', () => {
      if (!hasteada) {
        statusBandeira.textContent = '🟩🟨🟦 A bandeira foi hasteada com sucesso! 🇧🇷';
        btnHastear.textContent = 'Arriar Bandeira';
        hasteada = true;
      } else {
        statusBandeira.textContent = '';
        btnHastear.textContent = 'Hastear Bandeira 🇧🇷';
        hasteada = false;
      }
    });
  });