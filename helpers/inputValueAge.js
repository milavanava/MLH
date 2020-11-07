const sel = require('../data/selectors.json');

function inputValueAge (age){
    $(sel.age).setValue(age);

}

module.exports = inputValueAge;