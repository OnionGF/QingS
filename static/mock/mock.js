
var polist = require('./poslist.json')
var picture = require('./picture.json')
var choose = require('./choose.json')

module.exports = function (){
    return {
        list : polist,
        pict : picture,
        choo : choose
    }
}