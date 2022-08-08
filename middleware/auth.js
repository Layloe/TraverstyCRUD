module.exports = {
    ensureAuth: function (req,res,next) {
        if (req.isAthenticated()) {
            return next()
        }else{
            res.redirect('/')
        }
    },
    ensureGuest: function (req,res,next){
        if (req.isAthenticated()) {
            res.redirect('/dashboard')
        }else{
            return next()
        }
    }
}