
const sgmail =require(process.env.SENDgRID_API_KEY)
sgmail.setApiKey(sendsgridApiKey)
const sendWelcomeEmail =(email,name)=>{
    sgmail.send({
        to:email,
        from:'akhilgupta0698@gmail.com',
        subject:'thanks for joining in',
        text:`welocme to our app. ${name}.Let me know how long the app goes`
       
    })
    
}
const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to:email,
        from:'akhilgupta0698@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}