const binaryArrayToNumber = arr => {
    let str = arr.join('');
    let decimal = parseInt(str, 2);
    console.log(decimal);
    return decimal;
  };

  binaryArrayToNumber([1, 0, 1, 1])