// requiring the databse so that we can authenticate and for creating new users
const User = require('../models/user')
module.exports.profile = function(req,res){
    return res.render('user',{
        username:"Panav"
    })

}
//Render the Sign Up page
module.exports.signUp=function(req,res){
    return res.render('sign_up',{
        title:"Socialize | Sign Up"
    })
}

//Render the Sign In page
module.exports.signIn=function(req,res){
    return res.render('sign_in',{
        title:"Socialize | Sign In"
    })
}

//get the sign up data from sign up form
module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirmpassword)
    {
        return res.redirect('back')
    }
    User.findOne({email:req.body.email},function(error,user){
        if(error)
        {
            console.log("error in finding user in signing up")
            return
        }
        // creating new user if user not found
        if(!user)
        {
            User.create(req.body,function(error,user){
                if(error)
                {
                    console.log("error in creating user in signing up")
                    return
                }
                return res.render('sign_in',{
                    title:"Socialize | Sign In"
                })

            })
        }
        // if user exists
        else{
            res.redirect('back')
        }
    })
}

//On sign in create a session
module.exports.createSession=function(req,res){

}

