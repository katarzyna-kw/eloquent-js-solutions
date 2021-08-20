const loop = (initial, test, update, body) => {
    for (let i=initial; test(i); i=update(i)) {
        body(i)
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
loop(30, n => n<=500, n => n*2, console.log);