const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {googleClient,googleSecret,callBackUrl} = require('./auth.config')
const User = require('../models/user.model');

passport.serializeUser((user, done) => {
    // console.log('serializeUser 1',user);
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    console.log("deserializeUser 2",id);
    User.findById(id).then((user) => {
        done(null, user);
    }).catch((err)=>{
        done(err,id);
    });
});

passport.use(
    new GoogleStrategy({
        clientID: googleClient,
        clientSecret: googleSecret,
        callbackURL: '/api/auth/google/callback'
    }, async (accessToken, refreshToken, profile, done) => {
        console.log(profile)
        try {
            const currentUser =  await User.findOne({googleId : profile.id});
            if(currentUser){
                console.log(`user already exits !!! ${currentUser}`);
                done(null,currentUser);
            }
            else{
                const newUser = await User.create({
                    googleId : profile.id,
                    displayName : profile.displayName,
                    family_name : profile.name.family_name,
                    given_name : profile.name.given_name,
                    profile : profile.photos[0].value
                })
                console.log(`user Created Successfully`,newUser)
                done(null,newUser);
            }
        } catch (error) {
            done(error,profile);
        }
    })
);
