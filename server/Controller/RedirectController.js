const redirectToHome = () => {
    const user = req.user;
    if(user){
        return res.redirect('/user-homepage');
    }
}