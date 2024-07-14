/* GET Homepage */
const index = (reg, res) => {
    res.render('index', { title: "Travlr Getways"});
};

module.exports = {
    index
}