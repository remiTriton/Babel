const express = require('express')
const router = express.Router()
const User = require('../models/users');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const wine = require("../models/wine")

// /* GET wine */
// router.get('/wine', (req, res) => {

//   Comment.find({}).then(data => {
//     res.status(200).json(data)
//   }).catch(err => {
//     res.status(404).json(err)
//   })
// })
// //NEW COMMENT//NEW

// router.post("/wine/new", verifyToken, (req, res) => {
//   jwt.verify(req.token, 'token', (err, authData) => {
//     if (err) {
//       console.log(err)
//       res.sendStatus(err)
//     } else {
//       const { username } = authData.user
//       const { content, movieId } = req.body;
//       const newComment = new Comment({
//         username,
//         content,
//         movieId
//       });
//       newComment.save()
//         .then(comment => {
//           res.status(200).json(comment)
//         })
//     }
//   })
// })

// //delete a comment 
// router.delete('/comments/:id', (req, res) => {
//   Comment.findByIdAndDelete(req.params.id)
//     .then(data => {
//       res.status(200).json(data)
//     }).catch(err => {
//       res.status(404).json(err)
//     })
// })

// //TOUT CE QUI CONCERNE LES USERS C EST ICI //
// /* GET users */
// router.get('/users', (req, res) => {

//   User.find({}).then(data => {
//     res.status(200).json(data)
//   }).catch(err => {
//     res.status(404).json(err)
//   })
// })

// /* GET User with by id */
// router.get('/users/:id', (req, res) => {
//   User.findById(req.params.id)
//     .then(data => {
//       res.status(200).json(data)
//     }).catch(err => {
//       res.status(404).json(err)
//     })
// })

/*POST create new Wine */
route.post("/wine/new", (req, res) => {
    const { firstName, lastName, wineName, color, city, state, quantité } = req.body;
    const newWine = new Wine({
        firstName,
        lastName,
        wineName,
        color, 
        city,
        state,
        quantité,
      });
})


/* POST create new User */
router.post("/users/new", (req, res) => {
  const { username, email, password } = req.body;
  let errors = [];
  //fiels required
  if (!username || !email || !password) {
    errors.push({ msg: 'Please fill in all fields' });
  }
  //check password

  //on vérifie la taille du password
  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }
  if (errors.length > 0) {
    console.log(errors)
  } else {
    //Tout va bien on met tout dans la DB
    User.findOne({ email: email })
      .then(user => {
        if (user) {
          //user existe déjà
          errors.push({ msg: 'Email already used' });

        } else {
          const newUser = new User({
            username,
            email,
            password
          });
          //On securise le mdp

          bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            //MDP securisé
            newUser.password = hash;
            //On l'enregistre là dans la DB
            newUser.save()
              .then(user => {
                res.status(200).json(user)

              })
              .catch(err => console.log(err));
          })
          )
        }
      });
  }
});


//Login handler for
router.post('/users/login', (req, res, next) => {
  const { email, password } = req.body
  // Match user
  User.findOne({
    email: email
  }).then(user => {
    if (!user) {
      return res.status(200).json('No user found')
    }

    // Match password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        jwt.sign({ user, iat: Math.floor(Date.now() / 1000) + (60 * 60), }, 'token', (err, token) => {
          res.status(200).json({
            user,
            token
          });
        });
      } else {
        return res.status(200).json('Wrong password')
      }
    });
  })
}),


  /*la route logout!*/
  router.post('/users/logout', verifyToken, (req, res) => {
    jwt.sign('hello', 'old_tok', (err, token) => {
      res.json(token)
    })
  })


/*On va créer la route Profile où on va récupérer les infos de la personne connectée*/

router.post('/users/profile', verifyToken, (req, res) => {
  jwt.verify(req.token, 'token', (err, authData) => {
    User.findById(authData.user._id)
      .then(data => { res.json(data) })
  })

})

/* PUT update User with by id */
router.put('/users/update/:id', (req, res) => {
  const _id = req.params.id;
  const { email, username, password, favlist } = req.body
  User.findByIdAndUpdate(_id, { email, username, password, favlist }, { new: true })
    .then(data => {
      res.status(200).json(data)
    }).catch(err => {
      res.status(404).json(err)
    })
})

/* DELETE delete User with by id */
router.delete('/users/delete', (req, res) => {
  const { id } = req.body
  User.findByIdAndDelete(id)
    .then(data => {
      res.status(200).json(data)
    }).catch(err => {
      res.status(404).json(err)
    })
})
// Fonction pour vérifier le token // 
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization'];
  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}



module.exports = router