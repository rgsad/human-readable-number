module.exports = function toReadable (number) {
    let map = new Map([
        [0, ''],
        [1, 'one'], 
        [2, 'two'], 
        [3, 'three'], 
        [4, 'four'],
        [5, 'five'],
        [6, 'six'], 
        [7, 'seven'], 
        [8, 'eight'], 
        [9, 'nine'], 
        [10, 'ten'], 
        [11, 'eleven'],
        [12, 'twelve'], 
        [13, 'thirteen'], 
        [14, 'fourteen'], 
        [15, 'fifteen'], 
        [16, 'sixteen'],
        [17, 'seventeen'], 
        [18, 'eighteen'], 
        [19, 'nineteen'], 
        [20, 'twenty'], 
        [30, 'thirty'],
        [40, 'forty'], 
        [50, 'fifty'], 
        [60, 'sixty'], 
        [70, 'seventy'], 
        [80, 'eighty'], 
        [90, 'ninety']
        ]);

      let str = '';
      
      if (number == 0) {
        str = 'zero';
      } else if (number < 20) {
          str = map.get(number);
        } else if (number < 100) {
          str = `${map.get(number - number % 10)} ${map.get(number % 10)}`;
        } else if (number < 1000) {
          const reminder = `${map.get(number % 100 - number % 10)} ${map.get(number % 10)}`;
          str = `${map.get(Math.floor(number / 100))} hundred ${map.get(number % 100) || reminder}`; 
        }

    return str.trim();
}
