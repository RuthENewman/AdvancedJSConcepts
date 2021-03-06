const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
];

const getData = async function() {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url => {
            return fetch(url).then(response => response.json())
        }))
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch {
        console.log('Error. API call did not work');
    }
}

getData();

const getMoreData = async function() {
    const promisesArray = urls.map(url => fetch(url));
    for await (let request of promisesArray) {
        const data = await request.json();
        console.log(data);
    }
}

getMoreData();