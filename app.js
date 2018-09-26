document.getElementById('button1').addEventListener('click',getText);

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
