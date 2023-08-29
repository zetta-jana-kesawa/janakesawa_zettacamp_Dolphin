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

let bookBought = 10;                                    /** modifiable value, change for different result */

let bookCredit = 7;                                     /** modifiable value, change for different result */

const bookName = bookStock[0].name,                     /** edit index number to change object */
    bookAuthor = bookStock[0].author,
    bookPrice = bookStock[0].price,
    bookDisc = bookStock[0].disc,
    bookTax = bookStock[0].tax,
    bookLeft = bookStock[0].stock,
    bookCreditLength = bookCredit + " months",                                  /** math formulas */
    bookRemain = (bookBought > bookLeft) ? 0:bookLeft - bookBought,
    /** */
    bookFinalPrice = bookPrice + bookPrice * (bookTax / 100) - bookPrice * (bookDisc / 100),
    /** */
    bookBuyAmount = (bookBought > bookLeft) ? "Not applicable":bookBought,
    /** */
    bookPurchase = (bookPrice + bookPrice * (bookTax / 100) - bookPrice * (bookDisc / 100)) * 
            ((bookBought > bookLeft) ? 0:bookBought),
    /** */
    bookGetBonus = (bookPrice + bookPrice * (bookTax / 100) - bookPrice * (bookDisc / 100)) * 
            ((bookBought > bookLeft) ? 0:bookBought) > 3000000,
    /** */
    bookCreditPay = (bookPrice + bookPrice * (bookTax / 100) - bookPrice * (bookDisc / 100)) * 
            ((bookBought > bookLeft) ? 0:bookBought) / bookCredit;

function book_buy(bookName, bookAuthor, bookPrice, bookDisc, bookTax, bookLeft, bookBought, bookCredit) {

    for (let buy = 1; buy <= bookLeft; buy++)                                /** logic for success alert */
        if (bookLeft - buy >= 0 && bookBought <= bookLeft) {
            console.log("Purchase successful.");
            break;
        } else {
            console.log("Purchase unsuccessful.");
            break;
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
        bookDisc,
        bookTax,
        bookFinalPrice,
        bookBuyAmount,
        bookPurchase,
        bookGetBonus,
        bookCreditLength,
        bookCreditDue,
    };

}

console.log(book_buy(bookName, bookAuthor, bookPrice, bookDisc, bookTax, bookLeft, bookBought, bookCredit));

