console.log('This is my first JS');

var str = ' ';
for (var i=0; i<10 ; i++) {
    console.log(i+1)
    str += (i+1) + ' '
}

document.querySelector('#output').innerHTML = str; 