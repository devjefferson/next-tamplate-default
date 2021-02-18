export function FormatNumber(e){

  function validaPontos(valor: string) {
    var quantidadeDePontos = 0;
    for (var i = 0; i < valor.length; i++) {
      if (valor[i] === '.') {
        quantidadeDePontos++;
      }
    }
    return quantidadeDePontos;
  }
  e.currentTarget.maxLength = 16
  let value = e.currentTarget.value;
    //value = value.replace(/\./g,',')

    value = value.replace(/\,/g,'.')
      if (validaPontos(value) >= 2) {
        value = value.replace(/\.(?=[^.]*$)/,'')
      }
    e.currentTarget.value = value
  return value
}


