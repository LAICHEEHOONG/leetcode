// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
    let slash;

    for (let i = 0; i < url.length; i++) {
        if (url[i + 1]) {
            if (url[i] === '/' && url[i + 1] === '/') {
                slash = i + 1;
            }
        }
    }

    if (slash) {
        url = url.slice(slash + 1);
    }

    let wDot;

    for (let i = 0; i < url.length; i++) {
        if (url[i + 1] && url[i + 2]) {
            if(url[i] === 'w' && url[i + 1] === 'w' && url[i + 2] === 'w') {
                wDot = i + 3;
            }
        }
    }

    if(wDot) {
        url = url.slice(wDot + 1);
    }

    url = url.split('.');
    console.log(url[0]);
    return url[0];
}

// cut // all before
// cut www.
// split .
// return array[0]

// domainName('http://github.com/carbonfive/raygun'); //github
// domainName("http://www.zombie-bites.com"); //zombie-bites
// domainName("https://www.cnet.com"); //cnet
// domainName("http://google.com"); //google
// domainName("http://google.co.jp"); //google
// domainName("www.xakep.ru"); //xakep
// domainName("https://youtube.com"); //youtube
// domainName("https://123.net"); //123
// domainName('http://www.cs-va89e3gz2mluuroiw26mm7.name/default.html')
// domainName('http://lznnith7sagm.fr/index.php')
// domainName('36ze7jutdg7yxpke930x.net/index.php')
//https://www.8l6cww3fsrw0iziwv.tv/index.php
