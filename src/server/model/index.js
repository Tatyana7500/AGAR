const config = require ('../config');

class Model {
    constructor () {
        this.foods = [];
        this.players = [];
    }

    initialize () {
        this.generateFoods();
    }

    generateFoods () {
        const { foodsCount, foodsRadius } = config;

        for (let i = 0; i < foodsCount; i++) {
            const food = { radius: foodsRadius, x: Math.floor(Math.random() * 5000), y: Math.floor(Math.random() * 5000), color: this.rndColor() };

            this.foods.push(food);
        }
    }

    addPlayer(name, color) {
        const { playerRadius } = config;
        const player = {
            name,
            color,
            x: 200,
            y: 200,
            radius: playerRadius,
        };

        this.players.push(player);
    }

    rndColor = function() {
        let hex = ['0', '1', '2', '3', '4', '5', '6', '7',
                '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'],
            color = '#', i;
        for (i = 0; i < 6 ; i++) {
            color = color + hex[Math.floor(Math.random() * 16)];
        }
        return color;
    };
}

module.exports =  Model;