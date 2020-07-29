const Menu = require('../models/Menu')

/* Menu.findOne({ where: { class: 'Hamburgue' } }).then((burguer) => {
    console.log(burguer)
    console.log(burguer.class)
    console.log(burguer.name)
    const BurgerNames = burguer.name
    for (BurgerName of BurgerNames) {
        console.log(BurgerName)
    }
}) */

Menu.findAll({ where: { class: 'Hamburgue' } }).then((burguer) => {

    //console.log(burguer)
    //console.log(typeof burguer)
    //console.log(burguer.toString())
    for (burguers of burguer) {
        console.log(burguers.name)
    }

})