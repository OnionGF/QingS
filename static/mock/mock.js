
<<<<<<< HEAD

var searchlist = require('./searchlist.json')

module.exports = function (){
    return {
        searchlist:searchlist,

=======
var polist = require('./poslist.json')
var picture = require('./picture.json')
var choose = require('./choose.json')

module.exports = function (){
    return {
        list : polist,
        pict : picture,
        choo : choose
>>>>>>> master
    }
}