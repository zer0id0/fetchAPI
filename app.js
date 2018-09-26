document.getElementById('button1').addEventListener('click',getText);
document.getElementById('button2').addEventListener('click',getJson);

//get local text file data
function getText() {
  fetch('test.txt')
    .then(function(res){
     return res.text();
    })
    .then((data) => {
      console.log(data);
      let output = document.getElementById('output');
      output.innerHTML = data;

    })
    .catch(function(err){
      console.log(err);
    });
}

//Get local json data
function getJson() {
  fetch('posts.json')
    .then(function(res){
     return res.json();
    })
    .then((data) => {
      console.log(data);
      let output = '';
      data.forEach(function(post) {
         output += `<li>${post.title}</li>`; 
      });
      document.getElementById('output').innerHTML = output;

    })
    .catch(function(err){
      console.log(err);
    });
}
