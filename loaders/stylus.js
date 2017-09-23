const stylus = require('stylus');
const rupture = require('rupture');
const nib = require('nib');

module.exports = (data, file) => {

    try {
        const resp = stylus.render(data, { filename: file, use: [rupture(), nib()] })
        return resp
    } catch (e) {
        console.error(e)
    }

};