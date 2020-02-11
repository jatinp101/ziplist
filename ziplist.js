function zipList(listOne, listTwo) {
  if (listOne.length === listTwo.length) {
    const totalList = [];
    for (let i = 0; i < listOne.length; i++) {
      totalList.push(listOne[i]);
      totalList.push(listTwo[i]);
    }
    return totalList;
  }
  return 'Cannot combine those lists';
}

function zipListTheSimpleWay(listOne, listTwo) {
  if (listOne.length === listTwo.length) {
    return _.flatten(_.zip(listOne, listTwo));
  }
  return 'Cannot combine those lists';
}

const listOne = ['a', 'b', 'c'];
const listTwo = [1, 2, 3];

console.log(zipList(listOne, listTwo));
console.log(zipListTheSimpleWay(listOne, listTwo));
