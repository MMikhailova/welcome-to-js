let input = null;
while (input === null) {
  input = prompt('enter something');
  if (input.search(/[^a-zA-Z]+/) === -1) {
    alert('only letters');
  } else {
    alert('not only letters');
  }
}
