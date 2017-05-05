function getFirstSelector(selector) {
 return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector(".target");
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll(".ranked-list")
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = i + parseInt(n);
  }
}

function deepestChild() {
  const nested = document.getElementById('grand-node').querySelectorAll('div div div div div');
  for (let i = 0;  i < nested.length; i++) {
    return nested[i];
  }
}