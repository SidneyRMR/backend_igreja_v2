function checkLogin(req, res, next)
{
    if(req.session.login != undefined)
    {
        next();
    }
    else
    {
        res.redirect('/usuarios/login');
    }
}

module.exports = checkLogin;