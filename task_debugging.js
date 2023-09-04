const bookStock = [                                       /* object-in-array database */
    {
        name:"A Journey to the Center of the Earth",
        author:"Jules Verne",
        price:400000,
        disc:0,
        tax:20,
        stock:10,
    },
    {
        name:"Around the World in Eighty Days",
        author:"Jules Verne",
        price:400000,
        disc:10,
        tax:20,
        stock:8,
    }
];

// console.log(bookStock);

// console.log(bookStock[0]);

let bookBought = 5;                                    /** modifiable value, change for different result */

console.log(bookBought);                                /** unmodified value based on above */

console.log(bookBought);                          /** change value in debugger to 11 before attempting this */

let bookCredit = 5;                                     /** modifiable value, change for different result */

console.log(bookCredit);

console.log(bookCredit);                          /** change value in debugger first before triggering this */

const bookName = bookStock[0].name;                     /** edit index number to change object */
const bookAuthor = bookStock[0].author;
const bookPrice = bookStock[0].price;
const bookDiscount = bookStock[0].disc;
const bookTax = bookStock[0].tax;
const bookLeft = bookStock[0].stock;                                           /** math formulas */
const bookCreditLength = ((bookBought > bookLeft) ? "Not applicable":bookCredit + " months");
const bookRemain = (bookBought > bookLeft) ? 0:bookLeft - bookBought;
    /** */
const bookFinalPrice = bookPrice + bookPrice * (bookTax / 100) - bookPrice * (bookDiscount / 100);
    /** */
const bookBuyAmount = (bookBought > bookLeft) ? "Not applicable":bookBought;
    /** */
const bookPurchase = (bookPrice + bookPrice * (bookTax / 100) - bookPrice * (bookDiscount / 100)) * 
            ((bookBought > bookLeft) ? 0:bookBought);
    /** */
const bookGetBonus = bookPurchase > 3000000;
    /** */
const bookCreditPay = bookPurchase / bookCredit;

function book_buy(bookName, bookAuthor, bookPrice, bookDiscount, bookTax, bookLeft, bookBought, bookCredit) {

    if (bookLeft - bookBought >= 0 && bookBought <= bookLeft) {                 /** logic for success alert */
        console.log("Purchase successful.");
    } else {
        console.log("Purchase unsuccessful.");
    }

    if (bookBought > bookLeft) {                                                /** logic for stock alert */
        console.log("You ordered more book than the amount of stock left.");
    } else if (bookBought === bookLeft && bookRemain === 0) {
        console.log("The book is out of stock.");
    } else {
        console.log("Remaining book in stock: " + (bookRemain));
    }

    const startDate = new Date();                                       /** set up for loop */
        startDate.setMonth(startDate.getMonth() + 1);

    const endDate = new Date();                                         /** set up for loop */
        endDate.setMonth(endDate.getMonth() + bookCredit);

    const bookDueDate = [];                                         /** array for due date */

    for (let due = startDate;                                           /** declare variable */
        due <= endDate;                                                 /** loop condition */
        due.setMonth(due.getMonth() + 1)                                /** after code execution */
    ) {
        bookDueDate.push(new Date(due));                                /** code execution, array push */
    }
    
    const bookCreditDue = bookDueDate.map(              /** array.map for new obj in array result */
        (element) => ({           
        ...element,
        termDate : element.toDateString(),             /** toDateString goes here, previously on push up above */
        termPay : bookCreditPay
    })
    );

    return {                                                    /** return function value */
        bookName,
        bookAuthor,
        bookPrice,
        bookDiscount,
        bookTax,
        bookFinalPrice,
        bookBuyAmount,
        bookPurchase,
        bookGetBonus,
        bookCreditLength,
        bookCreditDue
    };

}

console.log(book_buy(bookName, bookAuthor, bookPrice, bookDiscount, bookTax, bookLeft, bookBought, bookCredit));

