function calcular(tipo, valor) {

    if (tipo === 'acao') {

      if (valor === 'c') {
        //limpar o visor (id resultado)
        document.getElementById('resultado').value = ''
      }

      if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
        document.getElementById('resultado').value += valor
      }

      if (valor === '=') {
        // A função eval() computa um código JavaScript representado como uma string. (É o valor computado do código passado para a função.)
        var valor_campo = eval(document.getElementById('resultado').value)
        document.getElementById('resultado').value = valor_campo // nesse caso substitui a operação representada no visor pelo resultado (graças ao eval)

      }

    } else if (tipo === 'valor') {
      document.getElementById('resultado').value += valor // += recebe e concatena o valor

    }
  }