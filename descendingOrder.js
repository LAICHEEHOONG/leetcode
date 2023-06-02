function descendingOrder(n){
    let str = n.toString();
    let strArr = str.split('');
    let numArr  = strArr.map(el => Number(el));
    let dcs = numArr.sort((a,b) => (b - a));
    let ans = Number(dcs.map(el => el.toString()).join(''));
    console.log(ans);
    return ans;
  }


descendingOrder(123456789)