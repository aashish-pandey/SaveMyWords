const WordDictionary = require('../Models/wordDictionary')

const saveWords = function(req, res){
    const wordDict = new WordDictionary({
        word: req.body.word,
        meaning: req.body.meaning
    })

    wordDict.save((err)=>{
        if(err){
            res.send({err:true, msg: err})
        }else{
            res.send({err: false, msg: "Word added successfully"})
        }
    })
}

module.exports = saveWords