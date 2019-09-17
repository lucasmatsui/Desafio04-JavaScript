const book = (nomeDoLivro, paginas = false, autor = false, editora = false) => {

  const Books = {
    CangaceiroJavaScript: {
      quantidadePaginas: 230,
      author: 'Flávio Almeida',
      editora: 'Casa do Codigo'
    },
    PhpOrientadoAObjetos: {
      quantidadePaginas: 410,
      author: 'Rafael Capoani',
      editora: 'Ciencia Moderna'
    },
    PaiRicoPaiPobre: {
      quantidadePaginas: 310,
      author: 'Robert T. Kyiosaki',
      editora: 'Campus'
    }
  }

  if(paginas === true) {
    if(!nomeDoLivro) return false;
    return `O livro ${nomeDoLivro} tem ${Books[nomeDoLivro].quantidadePaginas} páginas!`;
  }

  if(autor === true) {
    if(!nomeDoLivro) return false;
    return `O autor do livro ${nomeDoLivro} é ${Books[nomeDoLivro].author}.`;
  }

  if(editora === true) {
    if(!nomeDoLivro) return false;
    return `O livro ${nomeDoLivro} foi publicado pela editora ${Books[nomeDoLivro].editora}.`;
  }
  
  return !nomeDoLivro ? Books : Books[nomeDoLivro];
}

console.log(book());
console.log(book('CangaceiroJavaScript'));
console.log(book('CangaceiroJavaScript', true));
console.log(book('CangaceiroJavaScript', false, true));
console.log(book('CangaceiroJavaScript', false, false, true));




