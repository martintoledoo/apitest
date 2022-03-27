const { app, PORT } = require('./app');

app.listen(PORT, () => {
    console.log(`Server running at PORT: ${PORT}`);
    
});