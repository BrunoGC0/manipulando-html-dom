function adcionarComentario(){
    let inputComentario = document.getElementsByName('novo-comentario');

    let textoComentado = inputComentario[0].value;

    let novosComentarios = document.getElementById('novos-comentarios')

    novosComentarios.innerHTML += `<p>Novo Comentário: ${textoComentado}</p>`
}