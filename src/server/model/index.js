const config = require('../config');

class Model {
    constructor() {
        this.foods = [];
        this.players = [];
    }

    initialize() {
        this.generateFoods();
    }

    generateFoods() {
        const { foodsCount, foodsRadius } = config;

        for (let i = 0; i < foodsCount; i++) {
            const food = { radius: foodsRadius, x: this.randomNumber(), y: this.randomNumber(), color: this.randomColor() };

            this.foods.push(food);
        }
    }

    createPlayer(name, color) {
        const auth = this.players.find(item => item.name === name);

        if (auth) {
            return false;
        }

        const { playerRadius } = config;
        const player = {
            name,
            color,
            x: this.randomNumber(),
            y: this.randomNumber(),
            radius: playerRadius,
        };

        this.players.push(player);

        return player;
    }

    changeCoordsPlayer(player) {
        console.log(player);
        const pl = this.players.find(item => item.name === player.name);
        const index = this.players.indexOf(pl);
        this.players[index] = player;
    }

    randomNumber() {
        return Math.floor(Math.random() * config.fieldWidth);
    }

    randomColor() {
        const hex = ['0', '1', '2', '3', '4', '5', '6', '7',
                '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        let color = '#';

        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

module.exports = Model;