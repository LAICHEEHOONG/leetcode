function noSpace(x){
    let result = x.split('');
    let ans = [];
    result.forEach(el => {
        if(el !== ' ') {
            ans.push(el)
        }
    })

    return ans.join('')
  }

  noSpace('8 j 8   mBliB8g  imjB8B8  jl')