const WordDictionary = require('../Models/wordDictionary')


const getWords = function(req, res){
    WordDictionary.find({}, function(err, docs){
        if(err){
            res.send({err:true, msg:err})

        }else{
            res.send({err:false, msg:docs})
        }
    })
}

module.exports = getWords