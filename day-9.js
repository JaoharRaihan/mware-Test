function getPosts() {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())  
        .then(data => resolve(data))        
        .catch(error => reject("Failed to fetch posts"));  
    });
  }
  
  getPosts()
    .then(posts => {
      console.log("Fetched Posts:", posts);  
    })
    .catch(error => {
      console.log(error);  
    });
  