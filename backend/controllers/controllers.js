const { response } = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const { generarJWT } = require('../helpers/jwt');


const register = async(req, res = response) => {

    const { email, userName, password } = req.body;

    try {
        // Verificar si el correo ya está registrado
        let user = await User.findOne({ email });
        if ( user ) {
            return res.status(400).json({
                ok: false,
                msg: 'Este email ya está registrado'
            });
        }

        // Verificar si el nombre de usuario ya está registrado
        user = await User.findOne({ userName });
        if ( user ){
            return res.status(400).json({
                ok: false,
                msg: 'Este nombre de usuario ya está registrado'
            });
        }

        user = new User( req.body );
        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);
        await user.save();

        // Generar JWT
        const token = await generarJWT(user.id, user.name);

        res.status(201).json({
            ok: true,
            username: user.userName,
            name: user.name,
            password: user.passord,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}
// TODO: terminar login
const login = async(req, res = response) => {

    const { email, password } = req.body;

    try {
        console.log(email);
        // Verificar si el email está registrado
        let userVerifier = await User.findOne({ email });
        // const emailUser = await User.findOne({ email });
        console.log(userVerifier);
        if ( !userVerifier ) {
            return res.status(400).json({
                ok: false,
                msg: 'No existe un usuario registrado con ese email'
            });
        }

        // Comparar password
        const validPassword = bcrypt.compareSync(password, userVerifier.password );

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            });
        }

        // Generar JWT
        const token = await generarJWT( userVerifier.id, userVerifier.name );

        res.json({
            ok: true,
            uid: userVerifier.id,
            name: userVerifier.name,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}

const renewToken = async(req, res = response) => {
    console.log('Hola')
    const { uid, name } = req;

    // Generar un neuvo JWT y retornarlo en esta peticion
    const token = await generarJWT(uid, name);

    res.json({
        ok: true,
        uid,
        name,
        token
    })
}

module.exports = {
    login,
    register,
    renewToken
}