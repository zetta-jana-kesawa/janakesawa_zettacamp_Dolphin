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

let bookBought = 5;

let bookCredit = 6;                                     /* <=== new addition for day 5 task */

const bookName = bookStock[0].name,                     /** edit index number to change array object */
    /** */
    bookAuthor = bookStock[0].author,
    /** */
    bookPrice = bookStock[0].price,
    /** */
    bookDisc = bookStock[0].disc,
    /** */
    bookTax = bookStock[0].tax,
    /** */
    bookLeft = bookStock[0].stock,
    /** */
    bookCreditLength = bookCredit + " months",              /* <=== new addition for day 5 task */
    /** */
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

    for (let x = 1; x <= bookLeft; x++)
        if (bookLeft - x >= 0 && bookBought <= bookLeft) {
            console.log("Purchase successful.");
            break;
        } else {
            console.log("Purchase unsuccessful.");
            break;
        }

    if (bookBought > bookLeft) {
        console.log("You ordered more book than the amount of stock left.");
    } else if (bookBought === bookLeft && bookRemain === 0) {
        console.log("The book is out of stock.");
    } else {
        console.log("Remaining book in stock: " + (bookRemain));
    }

    const startDate = new Date();                                   /* <=== new addition for day 5 task */
        startDate.setMonth(startDate.getMonth() + 1);

    const endDate = new Date();                                     /** this & previous one set for loop */
        endDate.setMonth(endDate.getMonth() + bookCredit);

    const bookDueDate = [];                                         /** result array */

    for (let x = startDate;                                         /** declare variable */
        x <= endDate;                                               /** loop condition */
        x.setMonth(x.getMonth() + 1)                                /** after code execution */
    ) {
        bookDueDate.push(new Date(x).toDateString());               /** code execution, array push */
    }

    return {
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
        bookDueDate,
        bookCreditPay
    };

}

console.log(book_buy(bookName, bookAuthor, bookPrice, bookDisc, bookTax, bookLeft, bookBought, bookCredit));