const validator = {
  multiplyPair(numberCard) {
    let arr = [];
    for (let i = 0; i < numberCard.length; i++) {
      const n = parseInt(numberCard[i]);
      arr.push(i % 2 === 0 ? n * 2 : n);
    }
    arr = validator.decimalSum(arr, numberCard)
    return arr;
  },

  decimalSum(arr, numberCard) {
    for (let i = 0; i < numberCard.length; i++) {
      if (arr[i].toString().length === 2) {
        const [n1, n2] = arr[i].toString().split('');
        arr[i] = parseInt(n1) + parseInt(n2)
      }
    }
    return arr;
  },

  valid(numberCard) {
    let arr = validator.multiplyPair(numberCard);
    const result = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return result % 10 === 0;
  }
}

export default validator;
