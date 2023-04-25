const start = Date.now();

console.log("Hello World");

setTimeout(() => {
    console.log("Goodbye world");
    process.exit();
}, 10000);

process.on('SIGINT', () => {
    const stop = Date.now();
    const resultSeconds = Math.floor((stop - start) / 1000);
    console.log(`\n Stopped by user after ${resultSeconds} seconds`);
    process.exit();
});