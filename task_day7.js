const playList = [
    {                                                                                       /** array of object data */
        title:"Sephia",
        artist:"Sheila on 7",
        genre:"Pop",
        time:292
    },
    { 
        title:"Sekali Lagi",
        artist:"Sheila on 7",
        genre:"Rock",
        time:300
    },
    { 
        title:"Seberapa Pantas",
        artist:"Sheila on 7",
        genre:"Pop",
        time:248
    },
    { 
        title:"Melompat Lebih Tinggi",
        artist:"Sheila on 7",
        genre:"Pop",
        time:320
    },
    { 
        title:"Buat Aku Tersenyum",
        artist:"Sheila on 7",
        genre:"Rock",
        time:186
    },
    { 
        title:"Kirana",
        artist:"Dewa 19",
        genre:"Rock",
        time:261
    },
    { 
        title:"Dewi",
        artist:"Dewa 19",
        genre:"Pop",
        time:266
    },
    { 
        title:"Satu Hati",
        artist:"Dewa 19",
        genre:"Rock",
        time:328
    },
    { 
        title:"Teruslah Bernyanyi",
        artist:"Padi",
        genre:"Pop",
        time:286
    },
    { 
        title:"Mahadewi",
        artist:"Padi",
        genre:"Pop",
        time:253
    },
    { 
        title:"Belum Terlambat",
        artist:"Padi",
        genre:"Rock",
        time:289
    },
    { 
        title:"Terluka",
        artist:"Padi",
        genre:"Pop",
        time:331
    },
    { 
        title:"Tak Kan Ada Cinta Yang Lain",
        artist:"Dewa 19",
        genre:"Rock",
        time:331
    },
    { 
        title:"Rencana Besar",
        artist:"Padi",
        genre:"Pop",
        time:265
    },
    { 
        title:"Pejantan Tangguh",
        artist:"Sheila on 7",
        genre:"Rock",
        time:207
    },
    { 
        title:"Separuh Nafas",
        artist:"Dewa 19",
        genre:"Pop",
        time:222
    },
    { 
        title:"Arjuna",
        artist:"Dewa 19",
        genre:"Pop",
        time:285
    },
    { 
        title:"Sobat",
        artist:"Padi",
        genre:"Rock",
        time:325
    },
];

// console.log(playList);

// console.log(playList.length);

// console.log(playList[0].time);

/** ================= This is for checking song duration total =================== */

// let songDuration = playList.reduce(function (prevValue, currValue)          /** using .reduce to check duration total of array elements */
//     {
//         return prevValue + currValue.time;
//     }, 0 ) + " seconds";

// console.log(songDuration);

/** =================== Filter by artists ============================ */

// let groupArtistSO7 = playList.filter(function (element)                  /** .filter function filters by artist */
//     {
//     return element.artist === "Sheila on 7";
//     }
// );

// console.log(groupArtistSO7);

// let groupArtistDewa19 = playList.filter(function (element)
//     {
//     return element.artist === "Dewa 19";
//     }
// );

// console.log(groupArtistDewa19);

// let groupArtistPadi = playList.filter(function (element) 
//     {
//     return element.artist === "Padi";
//     }
// );

// console.log(groupArtistPadi);

/** ====================== Filter by genre =============================== */

// let groupGenrePop = playList.filter(function (element)                     /** .filter function filters by genre */
//     {
//     return element.genre === "Pop";
//     }
// );

// console.log(groupGenrePop);

// let groupGenreRock = playList.filter(function (element) 
//     {
//     return element.genre === "Rock";
//     }
// );

// console.log(groupGenreRock);

/** ======================= Group songs for a total of <= 1 hour ====================== */

// const groupOneHour = playList.map((element) => ({                                /** failed attempt 1 */
//         ...element,
//         time:playList.time < 300
//     })
// );

// console.log(groupOneHour);

// function groupOneHour(playList) {                                                /** failed attempt 2 */

//     const groupOneHour = [];

//     for (let index = 1; index < playList.length; index++) {

//         if (playList[index].time + playList[0].time <= 3600) {

//         }

//     }
// };

// console.log(groupOneHour(playList));


// let groupOneHour = playList.filter(function (element) {                      /** not quite right attempt */
//     if (element.time <= 300) {
//         return element;
//     }
// }
// )

// console.log(groupOneHour);

const songTime = playList.map(                                          /** map to create new array removing artist/genre */
    (element) => ({
        songTitle:element.title,
        songDuration:element.time
    })
);

// console.log(songTime);

// function groupOneHour(playList) {                                                /** function start */

//     let sumTime = 0, playSong = [];                                              /** declare initial value & empty array*/

//     while ( sumTime <= 3600 ) {                                                    /** while loop */
//         let randomIndex = Math.floor(Math.random() * playList.length);              /** declare loop variable */

//     if (!playSong.includes(playList[randomIndex])) {                            /** logic #1, element checking */

//         if (sumTime + playList[randomIndex].time > 3600) {              /** logic #2, duration total checking */
//             break; 
//         }
//         playSong.push(playList[randomIndex]);                                   /** array push to empty array */
//         sumTime = sumTime + playList[randomIndex].time;                 /** initial value modified */
//         }
//     }
//     return playSong;                                                            /** return the modified array */
// }

// console.log(groupOneHour(playList));

// let songOneHourDuration = groupOneHour(playList).reduce(function (prevValue, currValue)     /** check total duration of new array */
//     {
//         return prevValue + currValue.time;
//     }, 0 ) + " seconds";

// console.log(songOneHourDuration);