function isValidCard(card){
    return ((typeof card == 'string') &&
    suits.includes(card.substring(card.length-1)) &&
    values.includes(parseInt(card.substring(0,card.length-1))))?true:false
}

const suits = ['s','d','c','h'];
const values = [1,2,3,4,5,6,7,8,9,10,11,12,13];

exports.isValidCard = isValidCard;
exports.suits = suits;
exports.values = values;