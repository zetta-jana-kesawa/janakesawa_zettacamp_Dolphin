const bookStock = [
    {
        book_name:"Mathematics Book",
        book_price:400000
    },
    {
        book_name:"Physics Book",
        book_price:450000
    },
    {
        book_name:"Social Book",
        book_price:480000
    }
];

// console.log(bookStock);

// console.log(bookStock[1]);

// console.log("book_name" in bookStock[0]);

// const keys = Object.keys(bookStock);

// console.log(keys);

// bookStock[0].book_page_num = 300;
// console.log(bookStock[0]);

// console.log(bookStock);

// let bookAdd1 = {
//     book_name:"Chemistry Book",
//     book_price:500000
// }

// bookStock.push(bookAdd1);
// console.log(bookStock);

// bookStock[0].book_price = 600000;
// console.log(bookStock[0].book_price);

// console.log(bookStock[0].book_name === bookStock[1].book_name);

// if (bookStock[0].book_name == bookStock[1].book_name) {
//     console.log("The book is the same.")
// } else {
//     console.log("The book is different.")
// }

// console.log(bookStock[0].book_price > bookStock[2].book_price);

// if (bookStock[0].book_price > bookStock[2].book_price) {
//     console.log(bookStock[0].book_name, "is more expensive.")
// } else {
//     console.log(bookStock[2].book_name, "is more expensive.")
// }

// let meanPrice = (bookStock[0].book_price + bookStock[1].book_price) / 2;
// console.log("The average price is", meanPrice, "Rupiah");

// let reviewPrice = (meanPrice > 500000) ? "It is EXPENSIVE":"It is CHEAP";
// console.log(reviewPrice);

// const bookCase = [
//     {
//         book_name:"Mathematics Book",
//         book_price:400000
//     },
//     {
//         book_name:"Geography Book",
//         book_price:550000
//     },
//     {
//         book_name:"Biology Book",
//         book_price:500000
//     }
// ];

// console.log(bookCase);

// console.log(bookStock[0].book_name === bookCase[0].book_name);

// console.log(bookStock[0].book_price > bookCase[0].book_price);

// let meanPrice2 = (bookStock[1].book_price + bookCase[1].book_price) / 2;
// console.log("The average price is", meanPrice2, "Rupiah");

// let reviewPrice2 = (meanPrice2 > 500000) ? "It is EXPENSIVE":"It is CHEAP";
// console.log(reviewPrice2);