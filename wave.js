function wave(str){
    str = str.toLowerCase();
    const result = [];
    // let ref = str;

    for(let i = 0; i < str.length; i++) {
        let changing = str.split('');
        if(changing[i] === ' ') {
            continue;
        }
        changing[i] = changing[i].toUpperCase();
        // ref = wave.join('');
        result.push(changing.join(''));
    }
    console.log(result);
    return result;
  }

  wave('Two words')