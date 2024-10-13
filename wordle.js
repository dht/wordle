/*
* = nothing
! = exactly
? = wrong spot
*/
const wordle = (secret, guess) => {
  const output = ['*', '*', '*', '*', '*'];

  const secretArr = secret.split('');
  const guessArr = guess.split('');

  guessArr.forEach((char, index) => {
    const charSecret = secretArr[index];

    if (char === charSecret) {
      output[index] = '!';
      secretArr[index] = ' ';
    }
  });

  guessArr.forEach((char, index) => {
    const charSecret = secretArr[index];
    if (charSecret) {
      const placeInSecret = secretArr.indexOf(char);
      if (placeInSecret >= 0) {
        output[index] = '?';
        secretArr[placeInSecret] = ' ';
      }
    }
  });

  return output.join('');
};

module.exports = {
  wordle,
};
