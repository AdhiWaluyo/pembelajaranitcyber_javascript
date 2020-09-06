// Tugas 1

var a;

function adhi() {
    console.log("Tidak cocok kerja di padang pasir")
    console.log("Untuk keuangan harus irit")
    console.log("Untuk percintaan santuy")
}

function dzaki() {
    console.log("Tidak cocok kerja di dalam air")
    console.log("Untuk keuangan harus boros")
    console.log("Untuk percintaan kebanyakan cewe")
}

function irfan() {
    console.log("Tidak cocok kerja di dalam pinggir jalan")
    console.log("Untuk keuangan harus banyak duit")
    console.log("Untuk percintaan jangan kebanyakan mikirin cewe")
}

function novi() {
    console.log("Tidak cocok kerja di dalam atas pesawat")
    console.log("Untuk keuangan harus banyak kerja")
    console.log("Untuk percintaan jomblo")
}

var a = process.argv[2];
console.log("Siapa lu?:" + a)

if (a == 'Adhi') {
    adhi();
} else if (a == 'Dzaki') {
    dzaki();
} else if (a == 'Irfan') {
    irfan();
} else if (a == 'Novi') {
    novi();
} else {
    console.log("Lu siapa?")
}

// polindrom
// const readline = require('readline');

// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// r1.question("siapa lu ? :", (a) => {
//     if (a == 'Adhi') {
//         adhi();
//     } else if (a == 'Dzaki') {
//         dzaki();
//     } else if (a == 'Irfan') {
//         irfan();
//     } else if (a == 'Novi') {
//         novi();
//     } else {
//         console.log("Lu siapa?")
//     }
//     r1.close();
// });