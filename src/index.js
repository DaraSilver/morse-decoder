const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let somth = String(expr);
    let res = []
    for (let i = 0; i< somth.length; i += 10) {
        let a = somth.slice(i, i + 10);
        if (a === '**********') {
            res.push(12)
        } else {
        res.push(Number(a))
        }
    }
    let dots = []
    for (let i = 0; i< res.length; i ++) {
        let a = String(res[i])
        let str = '';
        for (let j = 0; j< a.length; j += 2) {
          
            if (a.slice(j, j + 2) === '10') {
                str += '.'
            } else  if (a.slice(j, j + 2) === '11'){
                
                str += '-';
            } 
                
            
        }
        if (str === '') {
            dots.push(' ')
        } else {
         dots.push(str)
         }

        

    }
    let result = ''
    
    for (let i = 0; i < dots.length; i++){
        if (dots[i] !== ' ') {
            for (let key in MORSE_TABLE) {
                if (key === dots[i]){
                    result += MORSE_TABLE[key]
                }
            }
        } else {
             result += ' '
            }
    }
    return result

    // write your solution here
}

module.exports = {
    decode
}