const sentence = "hello there from lighthouse labs";

const typewriter = function(input) {
  setTimeout(() => {
    if (input.length !== 0) {
      process.stdout.write(input[0]);
      typewriter(input.substring(1, input.length));
    } else {
      console.log('');
    }
  } , 50);
}

typewriter(sentence);