

var polist = require('./poslist.json')
var picture = require('./picture.json')
var choose = require('./choose.json')
var searchlist = require('./searchlist.json')

module.exports = function (){
    return {
        list : polist,
        pict : picture,
        choo : choose,
        searchlist:searchlist,


    }
