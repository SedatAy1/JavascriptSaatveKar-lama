function submitName() {
  const name = document.getElementById('username').value;
  if (name) {
      document.getElementById('nameForm').style.display = 'none';
      document.getElementById('clock').style.display = 'block';
      document.getElementById('greeting').textContent = `Merhaba, ${name}! Hoş geldin!`;
      updateClock();
      setInterval(updateClock, 1000); // Saati her saniye güncelle
  }
}

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const day = now.toLocaleDateString('tr-TR', { weekday: 'long' });
  const date = now.toLocaleDateString('tr-TR');

  document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
  document.getElementById('date').textContent = `${date} ${day}`;
}
