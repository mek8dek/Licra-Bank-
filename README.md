# Licra-Bank-
Banco geopolico e financeiro 
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Licra Bank</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #0b0f1a;
      color: #ffffff;
      text-align: center;
      padding: 30px;
    }
    .card {
      background: #151a2e;
      padding: 20px;
      margin: 20px auto;
      width: 90%;
      max-width: 400px;
      border-radius: 10px;
    }
    button {
      background: #1abc9c;
      border: none;
      padding: 10px 20px;
      font-size: 16px;
      border-radius: 6px;
      cursor: pointer;
    }
    button:hover {
      background: #16a085;
    }
  </style>
</head>
<body>

  <h1>🎮 LICRA BANK</h1>
  <p>Banco virtual de jogos fictícios</p>

  <div class="card">
    <h2>💰 Saldo</h2>
    <p id="saldo">K$ 1000</p>
    <p>1 Licra (K$1) = 3,44</p>
  </div>

  <div class="card">
    <h2>📤 Enviar Licra</h2>
    <input type="number" id="valor" placeholder="Valor em K$"><br><br>
    <button onclick="enviar()">Enviar</button>
  </div>

  <script>
    let saldo = 1000;

    function enviar() {
      let valor = parseInt(document.getElementById("valor").value);
      if (valor > 0 && valor <= saldo) {
        saldo -= valor;
        document.getElementById("saldo").innerText = "K$ " + saldo;
        alert("Transferência fictícia realizada!");
      } else {
        alert("Saldo insuficiente ou valor inválido.");
      }
    }
  </script>

</body>
</html>
