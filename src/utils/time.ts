const secondsToReadableString = (seconds: number) =>
    seconds < 3600
        ? new Date(seconds * 1000).toISOString().substr(14, 5)
        : new Date(seconds * 1000).toISOString().substr(11, 8);

export { secondsToReadableString };
