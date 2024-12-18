function myMiddle2(req,res,next){
    console.log('I am second custom middleware');
    next()
}

module.exports = myMiddle2