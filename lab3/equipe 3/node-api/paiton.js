const {PythonShell} = require('python-shell');

const led_on = (request, res) => {
    PythonShell.run('led-on.py', null, function (err) {
        if (err) throw err;
        console.log('finished - ON');
    });
    res.send("LIGOU O LED :^)")

}

const led_off = (request, res) => {
    PythonShell.run('led-off.py', null, function (err) {
        if (err) throw err;
        console.log('finished - OFF'); 
    });

    res.send("DESLIGOU O LED :^)")
}

module.exports = {
    led_on,
    led_off,
}