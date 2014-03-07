
import { hello } from 'test1';

export var things = {
    '1': 0,
    '2': 0,
    '3': 0,

    updateThing: function (name, val) {
        this[name] = val;

        if (name === 'bingo') {
            console.log('bingo was his name o');

            this[name] += ' was his name o';
        }
    }

};

export default {
    things: things
};