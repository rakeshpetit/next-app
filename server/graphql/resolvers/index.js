
const data = require('./db')

exports.portfolioQueries = {
    hello: () => {
        return 'Hello World!'
    },
    portfolio: (root, { id }) => {
        const portfolio = data.portfolios.find(p => p._id === id)
        return portfolio;
    },
    portfolios: () => {
        return data.portfolios
    }
}

exports.portfolioMutations = {
    createPortfolio: (root, { input }) => {
        const _id = require('crypto').randomBytes(10).toString('hex');
        const newPortfolio = { ...input };
        newPortfolio._id = _id;
        data.portfolios.push(newPortfolio);
        return newPortfolio;
    },
    updatePortfolio: (root, { id, input }) => {
        const index = data.portfolios.findIndex(p => p._id === id);
        const oldPortfolio = data.portfolios[index];
        const newPortfolio = { ...oldPortfolio, ...input };
        data.portfolios[index] = newPortfolio;
        return newPortfolio;
    },
    deletePortfolio: (root, { id }) => {
        const index = data.portfolios.findIndex(p => p._id === id);
        data.portfolios.splice(index, 1);
        return id;
    }
}