const url = 'http://localhost:3000/api';

let fetchPost = () => {
    fetch(url)
    .then(res => {
        return res.json();
    })
    .then(data => {
        createPost(data.title, data.content);
    })
    .catch(err => console.log(err));
}

const createPost = (title, content) => {
    let container = document.getElementById('post-container');
    let postTitle = document.createElement('h2');
    postTitle.innerText = title;

    let postContent = document.createElement('p');
    postContent.classList.add('content');
    postContent.innerText = content;

    container.appendChild(postTitle);
    container.appendChild(postContent);
}

class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}

const newPost = () => {
    event.preventDefault();
    let inputTitle = document.getElementById('title').value;
    let inputContent = document.getElementById('description').value;
    let post = new Post(inputTitle, inputContent);

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                title: post.title,
                content: post.content
            }
        )
    })
    .then(res => {
        document.location.reload();
    })
    .catch(err => console.log(err));
}

fetchPost();


