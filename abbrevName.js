function abbrevName(name){
    let nameArray = name.split(' ');
    let header = nameArray.map(str => str[0].toUpperCase());
    let ans = `${header[0]}.${header[1]}`
    console.log(ans);
    return ans;
}

abbrevName('Sam Harris')