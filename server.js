const express = require('express'),
    cors = require('cors'),
    app = express();

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/product.routes')(app);

app.listen(8000, () =>
    console.log("You're all clear kid, now let's blow this thing and go home!"),
);
