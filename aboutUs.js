function readLocalStorage() {
    return JSON.parse(localStorage.getItem('reviewPosts')) || [];
  }

  function storeLocalStorage(reviewPost) {
    const reviewPosts = readLocalStorage();
    reviewPosts.push(reviewPost);
    localStorage.setItem('reviewPosts', JSON.stringify(reviewPosts));
  }
  
  storeLocalStorage(reviewPost);
