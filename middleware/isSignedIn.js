

function isSignedIn(req,res,next){
    if(req.session.user){
        next()
    }
    else{
        res.redirect("/signUp/login")
    }
}

module.exports = isSignedIn