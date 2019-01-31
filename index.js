// Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.

function getFirstSelector(selector) {
  return document.querySelector(selector); 
}

function nestedTarget() {
  return document.getElementById("nested").querySelector('.target'); 
}


function deepestChild() {
  var node = document.getElementById('grand-node').querySelectorAll('div');
  for (let i = 0; i < node.length; i++) {
      var fizz = node[i].innerHTML;  
      
  } return fizz; 
}

function increaseRankBy(n) {
  var increasedRank = document.getElementById('app').querySelectorAll(".ranked-list");  
  for (let i = 0; i < increasedRank.length; i++) {
    increasedRank[i].innerHTML = parseInt(increasedRank[i] + n);   
  }
  return increasedRank; 
}
