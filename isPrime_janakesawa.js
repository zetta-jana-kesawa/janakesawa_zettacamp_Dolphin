function isPrime(n) {
    if (n <= 1) {                       /* 1 is not prime number, and prime number must be positive */
        return false;
    }

    if (n === 2) {                      /* 2 is the only even prime number, every other one is odd */
        return true;
    }

    if (n % 2 === 0) {                  /* every number that can be cleanly divided by 2 is not a prime number */
        return false;
    }
                                                    /* looping function */
    for (let x = 3; x <= Math.sqrt(n); x = x + 2)   /* sets variable; loop condition; after execution */
        if (n % x === 0 || n % (x + 2) === 0) {     /* argument */
            return false;
        }
    
    return true;
}

// console.log(isPrime(10));                /* expected result is false */                

// console.log(isPrime(1337));                /* expected result is false */

// console.log(isPrime(97));           /* expected result is true */