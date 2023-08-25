const bookStock = [                                       /* object-in-array database */
    {
        name:"A Journey to the Center of the Earth",
        author:"Jules Verne",
        price:400000,
        disc:0,
        tax:20
    },
    {
        name:"Around the World in Eighty Days",
        author:"Jules Verne",
        price:400000,
        disc:10,
        tax:20
    }
];

const addIndex2 = {                                          /* push-in new object data to array example */
    name:"Why do Men have Nipples?",
    author:"Mark Leyner & Billy Goldberg",
    price:500000,
    disc:15,
    tax:10
}

// bookStock.push(addIndex2);

// console.log(bookStock);

// console.log(bookStock[0]);

const a = bookStock[0].name, b = bookStock[0].price, c = bookStock[0].disc, d = bookStock[0].tax;

function book_buy(a, b, c, d) {
    const buyAuthor = bookStock[0].author;

    return {
        buy_name:a,                                         /* Book title */
        buy_auth:buyAuthor,                                 /* Book author */
        buy_price:b,                                        /* Book price */
        buy_disc:c + "%",                                   /* Discount value */
        buy_disc_check:c > 0,                                /* Discount check T/F */
        buy_disc_amount:b * (c / 100),                       /* Discount amount */
        buy_disc_price:b - b * (c / 100),                    /* Discounted price*/
        buy_tax:d + "%",                                    /* Tax value */
        buy_tax_amount:b * (d / 100),                        /* Tax amount */            
        buy_tax_price:b + b * (d / 100),                     /* Taxed price */
        buy_final_price:b + b * (d / 100) - b * (c / 100),   /* Price after tax and discount */
    }
}

console.log(book_buy(a, b, c, d));

