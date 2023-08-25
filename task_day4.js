const bookStock = [                                       /* object-in-array database */
    {
        name:"A Journey to the Center of the Earth",
        author:"Jules Verne",
        price:400000,
        disc:0,
        tax:20,
        stock:10
    },
    {
        name:"Around the World in Eighty Days",
        author:"Jules Verne",
        price:400000,
        disc:10,
        tax:20,
        stock:8
    }
];

// bookStock.push(addIndex2);

// console.log(bookStock);

// console.log(bookStock[0]);

let bookBought = 10;                                     /* variable number */

const bookName = bookStock[0].name,
    bookAuthor = bookStock[0].author,
    bookPrice = bookStock[0].price,
    bookDisc = bookStock[0].disc,
    bookTax = bookStock[0].tax,
    bookLeft = bookStock[0].stock,
    bookRemain = (bookBought > bookLeft) ? 0:bookLeft - bookBought;
    
function book_buy(bookName, bookAuthor, bookPrice, bookDisc, bookTax, bookLeft, bookBought) {

    for (let x = 1; x <= bookLeft; x++)
        if (bookLeft - x >= 0 && bookBought <= bookLeft) {
            console.log("Purchase successful. Remaining book in stock: " + (bookRemain));
            break;
        } else {
            console.log("Purchase unsuccessful due to invalid request.");
            break;
        }

    if (bookRemain === 0) {
        console.log("The book is out of stock. You cannot purchase this book anymore.");
    }

    return {
        buy_name:bookName,
        /* */
        buy_auth:bookAuthor,
        /** */
        buy_price:bookPrice,
        /** */
        buy_disc:bookDisc + "%",
        /** */
        buy_tax:bookTax + "%",
        /** */
        buy_final_price:bookPrice + bookPrice * (bookTax / 100) - bookPrice * (bookDisc / 100),
        /** */
        buy_amount:(bookBought > bookLeft) ? "Not applicable":bookBought,
        /** */
        buy_total_amount:(bookPrice + bookPrice * (bookTax / 100) - bookPrice * (bookDisc / 100)) * 
        ((bookBought > bookLeft) ? 0:bookBought),
        /** */
        buy_get_bonus:(bookPrice + bookPrice * (bookTax / 100) - bookPrice * (bookDisc / 100)) * 
        ((bookBought > bookLeft) ? 0:bookBought) > 3000000,
        /** */
    }
}

console.log(book_buy(bookName, bookAuthor, bookPrice, bookDisc, bookTax, bookLeft, bookBought));