const Sequelize = require('sequelize');
const dataWisata = require('./datawisata');

const sequelize = new Sequelize('sOrtNg22tx', 'sOrtNg22tx', '6I786U8AJ3', {
    host: 'remotemysql.com',
    // port: 3306,
    dialect: 'mysql',
});

const getAdat = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connected!');
        // eslint-disable-next-line no-unused-vars
        if (await sequelize.query('SELECT * FROM adat')) {
            const adat = await sequelize.query('SELECT * FROM adat');
            dataWisata.push(adat);
            
        }
        // const [result, metadata] = await sequelize.query('SELECT * FROM adat');
        // dataWisata.push(result);
    } catch (error) {
        console.log(error);
    }
};

const getAdatHandler = (request, h) => {
    getAdat();
    const response = h.response({
        status: 'success',
        data: {
            adat: dataWisata,
        },
    });
    return response;
};

module.exports = {
    getAdatHandler,
};