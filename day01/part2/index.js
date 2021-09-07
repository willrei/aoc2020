fetch("../../input/day01.txt")
.then(response => response.text()
.then(input => {
    let data = input.split("\r\n").map(item => Number(item));

    for (let i = 0; i < data.length - 2; i++) {
        for (let j = i + 1; j < data.length - 1; j++) {
            for (let k = j + 1; k < data.length; k++) {
                if (data[i] + data[j] + data[k] == 2020) {
                    console.log(`Numbers: ${data[i]} ${data[j]} ${data[k]}`);
                    console.log(`Mult: ${data[i] * data[j] * data[k]}`);
                }
            }
        }
    }
}));
