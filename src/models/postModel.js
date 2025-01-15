let posts = [];

// POST {id, title, content, createdAt, updatedAt}
const postModel = {
  createPost(title, content) {
    const post = {
      id: Date.now().toString(),
      title: title,
      content: content,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    return post;
  },

  getAllPosts() {
    return posts;
  },

  getPostById(id) {
    // Usa o método find para procurar o post com o ID correspondente
    // 'post' é um objeto que representa cada elemento do array 'posts'
    // O método find percorre o array 'posts' e retorna o primeiro post que satisfaz a condição 'post.id === id'
    return posts.find(post => post.id === id);
  },

  savePost(post) {
    posts.push(post);
  },

  updatePost(id, updatePost) {
    const index = posts.findIndex(post => post.id === id);
    /*
    posts[index] usa a notação de colchetes para acessar o elemento do array 'posts' no índice 'index'
    O operador de rest spread (...) copia as propriedades do objeto 'updatePost' para o objeto 'posts[index]'
    */
    posts[index] = {...posts[index], ...updatePost};
    //ex: // posts[index] é { id: 1, title: "Post 1", content: "Conteúdo do Post 1", createdAt: ..., updatedAt: ... }
// updatePost é { title: "Post 1 Atualizado" }
// O novo objeto será { id: 1, title: "Post 1 Atualizado", content: "Conteúdo do Post 1", createdAt: ..., updatedAt: ... }
  },

  deletePost(id) {
    // Usa o método filter para retornar um novo array com os posts restantes que não sejam o post com o ID correspondente ao ID passado como argumento
    posts = posts.filter(post=>post.id !== id);
  },
};
