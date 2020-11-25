const URL = require("./url-model");
const bcrypt = require("bcryptjs");

exports.createLink = (req, res, next) => {

        let url;

        if(req.body.customString!=undefined) {

         url = new URL({
          longURL:req.body.link,
          customUrl:req.body.customString
        })
      }
        else {
           url = new URL({
            longURL:req.body.link,
          })

        }
     
        if(req.body.customString!=undefined) {
        url
        .save()
        .then(result => {
          
        res.status(201).json({
          message: "Link created!",
          hash: req.body.customString
        });
      })
      .catch(err => {
        if (err.code==11000) {
          console.log(err)  
                  res.status(404).json({
                    message: "Custom String already taken!",
                  });
        }else {
        res.status(500).json({
          message: "Invalid!"
        });
      }
      });
      
    }
    else {
      url
        .save()
        .then(result => {
          
        res.status(201).json({
          message: "Link created!",
          hash: result._id
        });
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          message: "Invalid!"
        });
      });

    }
  }









    exports.getLink = (req,res, next) => {

      URL.findById(req.params.id)
      .then(result => {
        // res.status(201)
        res.status(301).redirect(result.longURL.trim())
        // res.send(result.longURL)
      })
      .catch(err => {

        URL.findOne({customString:req.params.id })
        .then(result => {
          res.status(301).redirect(result.longURL.trim())
        })
        .catch(err => {
          res.send(500)
        })

      })

    }
