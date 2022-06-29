import express from "express";
const UserRoute = express.Router()
import NewUser from "../models/UsersSchema.js"
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv'


dotenv.config()

// //  😊😊  SignUp Form Started 😘😘
let token;


const SALT_ROUND = 10

UserRoute.post("/signup", async (req, res, next) => {

    bcrypt.hash(req.body.Password, SALT_ROUND, async (err, hash) => {
        if (err) {
            return (
                res.status(500).json({
                    msg: `🤬🤬🤬🤬🤬🤬 ${err} 🤬🤬🤬🤬🤬🤬`
                })
            )
        } else {
            const user = new NewUser({
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                ContactNumber: req.body.ContactNumber,
                Address: req.body.Address,
                Email: req.body.Email,
                UserName: req.body.UserName,
                Password: hash
            })

            user.save()
                .then((result) => {
                    console.log(" Registeration Successful ")
                    res.status(200).json({
                        NewUser: ` 😘😘😘${result} 😍😍😍`,
                        msg: "😲😲😲 Registeration Successful 😲😲😲 "
                    })
                }).catch((err) => {
                    res.status(500).json({
                        msg: `🤬🤬🤬🤬🤬🤬 ${err} 🤬🤬🤬🤬🤬🤬`
                    })
                });
        }
    })


})


// //  🙋🏻‍♀️🙋🏻‍♀️  SignUp Form Ended 🙋🏻‍♀️🙋🏻‍♀️

// 😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝😝

// //  😊😊  SignIn Form Started 😘😘





UserRoute.post("/login", async (req, res, next) => {

    NewUser.find({ UserName: req.body.UserName })
        .then(async (user) => {
            if (user.length < 1) {
                return res.status(401).json({
                    msg: "🤬🤬🤬🤬🤬🤬 User Not Found 🤬🤬🤬🤬🤬🤬 "
                })
            }
            else {
                bcrypt.compare(req.body.Password, user[0].Password, (error, result) => {

                    if (result == true) {
                        token = jsonwebtoken.sign(
                            {
                                Email: user[0].Email,
                                UserName: user[0].UserName,
                                ContactNumber: user[0].ContactNumber,
                                Password: user[0].Password
                            },
                            process.env.ACCESS_TOKEN,
                            {
                                expiresIn: "24h"
                            }
                        );
                        res.status(200).json({
                            Email: user[0].Email,
                            UserName: user[0].UserName,
                            Password: req.body.Password,
                            Token: token,
                            ContactNumber: user[0].ContactNumber
                        })
                        console.info(
                            {
                                Email: user[0].Email,
                                UserName: user[0].UserName,
                                Password: req.body.Password,
                                ContactNumber: user[0].ContactNumber,
                                Token: token
                            }
                        )
                    }
                    if (result == false) {
                        res.status(401).json({
                            msg: "😡👿Password not matched 😡👿",
                        })
                        console.info({
                            msg: "😡👿Password not matched 😡👿",
                        })
                    }

                })
            }
        }).catch((err) => {
            res.status(500).json({
                msg: err
            })
        })
})




// //  🙋🏻‍♀️🙋🏻‍♀️  SignIn Form Ended 🙋🏻‍♀️🙋🏻‍♀️


// Verify Your Account 

UserRoute.post("/VerifyYourAccount", (req, res, next) => {
    NewUser.find({ ContactNumber: req.body.ContactNumber })
        .then((User) => {
            if (User.length < 1) {
                return res.status(401).json({
                    msg: "🤬🤬🤬🤬🤬🤬 User Not Found 🤬🤬🤬🤬🤬🤬 "
                })
            }
            if (req.body.ContactNumber == User[0].ContactNumber) {

                return res.status(200).json({
                    msg: "Account Verified"
                })
            } else {
                res.status(401).json({
                    msg: "🤬🤬🤬🤬🤬🤬  No User Found  🤬🤬🤬🤬🤬🤬 "
                })
            }

        }).catch((err) => {
            res.status(500).json({
                msg: err
            })
        });
})



// // Forget PassWord 


UserRoute.post("/ForgetPasswordPart2", (req, res, next) => {
    NewUser.find({ Email: req.body.Email })
        .then((User) => {
            if (User.length < 1) {
                return res.status(401).json({
                    msg: "🤬🤬🤬🤬🤬🤬 User Not Found 🤬🤬🤬🤬🤬🤬 "
                })
            }
            if (req.body.Email == User[0].Email) {
                bcrypt.hash(req.body.Password, SALT_ROUND, async (err, hash) => {
                    if (err) {
                        return (
                            res.status(500).json({
                                msg: `🤬🤬🤬🤬🤬🤬 ${err} 🤬🤬🤬🤬🤬🤬`
                            })
                        )
                    } else {
                        // const find = {Email:req.body.Email}
                        const UpdatePassWord = { Password: hash }
                        NewUser.updateOne(UpdatePassWord)
                            .then((Update) => {
                                if (!Update) {
                                    res.status(401).json({
                                        msg: "PassWord Not Updated ",
                                    })
                                } else {
                                    res.status(200).json({
                                        msg: "PassWord Updated ",
                                        NewPassWord: hash
                                    })
                                }



                            }).catch((err) => {
                                res.status(500).json({
                                    error: err
                                })
                            });
                    }
                })

            } else {
                res.status(401).json({
                    msg: "🤬🤬🤬🤬🤬🤬  No User Found  🤬🤬🤬🤬🤬🤬 "
                })
            }

        }).catch((err) => {
            res.status(500).json({
                error: err
            })
        });
})



UserRoute.post("/ForgetPasswordPart1", (req, res, next) => {
    NewUser.find({ Email: req.body.Email })
        .then((User) => {
            if (User.length < 1) {
                return res.status(401).json({
                    msg: "🤬🤬🤬🤬🤬🤬 User Not Found 🤬🤬🤬🤬🤬🤬 "
                })
            }
            if (req.body.Email == User[0].Email) {

                return res.status(200).json({
                    msg: "User Founded with",
                    User: User[0]
                })
            } else {
                res.status(401).json({
                    msg: "🤬🤬🤬🤬🤬🤬  No User Found  🤬🤬🤬🤬🤬🤬 "
                })
            }

        }).catch((err) => {
            res.status(500).json({
                error: err
            })
        });
})









export default UserRoute
