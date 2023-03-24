const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const { json } = require('express');

app.use(json());

app.use(cors({
    origin : "*"
}));

router.route('/create')
    .post(async (req,res) => {
    const response = await User.create(req.body);
    res.send(response);
});

router.route('/check:username&:password')
    .get(async(req,res) => {
    const username = req.params;
    const response = await User.find({"username":username,"password":password});
    res.send(response);
});

module.exports = router;