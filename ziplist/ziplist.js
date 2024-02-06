const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];
function zipList (letters, numbers) {
  const combination = [];
  for (let i = 0; i < letters.length; i++) {
    combination.push(letters[i],numbers[i]);
  }
  return combination;
}

console.log(zipList(letters,numbers));

const zipListTheSimpleWay = (letters, numbers) => _.flatten(_.zip(letters,numbers));

console.log(zipListTheSimpleWay(letters,numbers));
