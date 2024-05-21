app.use((req, res, next) => {
    res.locals.currentUser = req.session.user || null;
    next();
});
