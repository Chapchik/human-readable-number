module.exports = function toReadable (number) {
  
  let firstDigit = Math.floor(number / 100);
  let secondDigit = Math.floor((number % 100) / 10);
  let thirdDigit = number % 10;

  if (number === 0) return 'zero';

  if (number < 10) {
    return fromZeroToTen(number)
  }

  if (number >= 10 && number < 20) {
    return fromTenToTwenty(number)
  }

  if (number >= 20 && number < 100) {
    if (thirdDigit === 0) {
      return fromTwentyToNinety(secondDigit)
    } else {
      return `${fromTwentyToNinety(secondDigit)} ${fromZeroToTen(thirdDigit)}`
    }
  }

  if (number >= 100 && number < 1000) {

    if (thirdDigit === 0 && secondDigit === 0) {
      return `${fromZeroToTen(firstDigit)} hundred`
    }

    else if (thirdDigit === 0 || secondDigit === 1) {
      return `${fromZeroToTen(firstDigit)} hundred ${fromTwentyToNinety(secondDigit)}`;
    }
    
    else if (secondDigit === 0) {
      return `${fromZeroToTen(firstDigit)} hundred ${fromZeroToTen(thirdDigit)}`
    } 
    
    else {
    return `${fromZeroToTen(firstDigit)} hundred ${fromTwentyToNinety(secondDigit)} ${fromZeroToTen(thirdDigit)}`
    }
  }
  
  function fromZeroToTen (number) {

    switch (number) {
      case 1: return 'one';
      case 2: return 'two';
      case 3: return 'three';
      case 4: return 'four';
      case 5: return 'five';
      case 6: return 'six';
      case 7: return 'seven';
      case 8: return 'eight';
      case 9: return 'nine';
    }
  }

  function fromTenToTwenty (number) {

    switch (number) {
      case 10: return 'ten';
      case 11: return 'eleven';
      case 12: return 'twelve';
      case 13: return 'thirteen';
      case 14: return 'fourteen';
      case 15: return 'fifteen';
      case 16: return 'sixteen';
      case 17: return 'seventeen';
      case 18: return 'eighteen';
      case 19: return 'nineteen';
    }
  }

  function fromTwentyToNinety (number) {

    switch (number) {
      case 1: return fromTenToTwenty (10 + thirdDigit);
      case 2: return 'twenty';
      case 3: return 'thirty';
      case 4: return 'forty';
      case 5: return 'fifty';
      case 6: return 'sixty';
      case 7: return 'seventy';
      case 8: return 'eighty';
      case 9: return 'ninety';
    }
  }
}