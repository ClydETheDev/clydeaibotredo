module.exports = {
    once: true,
	run: () => {
        console.warn('[API] Disconnecting, Good bye!');
        process.exit(0);
    }
}
