const reviewPostsContainer = document.querySelector('#product-rev');
// TODO: Create a function that builds an element and appends it to the DOM


function readLocalStorage() {
    const posts = localStorage.getItem('reviewPosts');
    return posts ? JSON.parse(posts) : [];
}

function appendReviewPost(post) {
    const postElement = document.createElement('article');
    postElement.innerHTML = `
        <h2>${post.fullName}</h2>
        <blockquote>${post.content}</blockquote>
        <h4> posted by: ${post.email} </h4>
    `;
    reviewPostsContainer.appendChild(postElement);
}
// TODO: Create a function that handles the case where there are no blog posts to display
function displayNoPostsMessage() {
    reviewPostsContainer.innerHTML = '<p>No Blog posts yet...</p>';
}
// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderReviewList() {
    const reviewPosts = readLocalStorage();
    if (reviewPosts.length === 0) {
        displayNoPostsMessage();
    } else {
        reviewPosts.forEach(post => appendReviewPost(post));
    }
}
// TODO: Call the `renderBlogList` function
renderReviewList();
// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

