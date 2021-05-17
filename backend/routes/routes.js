/* 
    Ruta de usuarios /user
    host + /api/user

    Ruta de login /login
    host + /api/login

    Ruta de home /home
    host + /api/home
*/
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { login, register, renewToken } = require('../controllers/controllers');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

router.post(
    '/login', 
    [   // middlewares
        check('email', 'Ingrese email o nombre de usuario').not().isEmpty(),
        check('password', 'el password debe ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    login
);

router.post(
    '/users/register',
    [   // middlewares
        check('userName', 'El nombre de usuario es obligatorio').not().isEmpty(),
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('lastName', 'El apellido es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'el password contener al menos 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    register
);

router.get('/renew', validarJWT, renewToken);


module.exports = router;