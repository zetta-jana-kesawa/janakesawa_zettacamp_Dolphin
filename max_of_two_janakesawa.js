function max_of_two(a, b) {
    return (
        (a > b) ? a:b
    ); 
}

let x = max_of_two(10, 5);

console.log(max_of_two(10, 5));

function max_of_two(a, b) {
    return (
        (a > b) ? a:b
    ); 
}

let y = max_of_two(45, 66);

console.log(max_of_two(45, 66));

function max_of_three(a, b, c) {
    return (
        (a > b) ? a:
        (b > c) ? b:c
    ); 
}

let z = max_of_three(45, 69, 32);

console.log(max_of_three(45, 69, 32));