fetch("../../input/day01.txt")
.then(response => response.text()
.then(input => {
    let data = input.split("\r\n").map(item => Number(item));

    for (let i = 0; i < data.length - 1; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (data[i] + data[j] == 2020) {
                console.log(`Numbers: ${data[i]} ${data[j]}`);
                console.log(`Mult: ${data[i] * data[j]}`);
            }
        }
    }
}));
