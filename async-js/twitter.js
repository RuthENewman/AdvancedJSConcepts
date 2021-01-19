grabTweets('/twitter/ruthenewman', (error, ruthTweets) => {
    if (error) {
        throw Error;
    }
    displayTweets(ruthTweets);
 });
