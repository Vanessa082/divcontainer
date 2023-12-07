const table = document.getElementById("table");

const isPrimeNumber = (num) => {
    if (num == 1) {
        return true
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

for(let i = 1; i <= 100; i++) {
    let node_el;

    if(i % 2 == 0){
        // even
        node_el = `<button style="background-color: green;">${i}</button>`;
    } else if (isPrimeNumber(i)) {
        // prime
        node_el = `<button style="background-color: red;">${i}</button>`;
    } else {
        // odd.
        node_el = `<button style="background-color: yellow;">${i}</button>`;
    }

    table.innerHTML += node_el;
}
