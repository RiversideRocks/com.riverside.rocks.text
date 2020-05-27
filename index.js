function copy() {
  var copyText = document.getElementById("text");
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
  alert("Text was saved!");
}

function dl() {
  var fileName = 'example.txt';
  var fileContent = 'Example...';
  var myFile = new Blob([fileContent], {type: 'text/plain'});
}
