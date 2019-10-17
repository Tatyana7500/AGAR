let history;

const getHistory = () => {
    if (!history) {
        history = require('history').createBrowserHistory();
    }

    return history;
};

export default getHistory();