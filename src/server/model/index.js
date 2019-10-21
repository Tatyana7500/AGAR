const config = require('../config');

class Model {
    constructor() {
        this.foods = [];
        this.players = [];
    }

    initialize() {
        this.generateFoods();
    }

    start() {
        setInterval(this.collision, 30);
        setInterval(this.handleFoods, 30);
        setInterval(this.sortPlayers, 30);
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
         const index = this.players.findIndex(item => item.name === player.name);

         if (index !== -1) {
             this.players[index].x = player.x;
             this.players[index].y = player.y;
         }
    }

    collision = () => {
        if (this.players.length === 0) {
            return;
        }

        this.collisionPlayersToFoods();
        this.collisionPlayerToPlayer();
    };

    collisionPlayersToFoods = () => {
        for (let i = 0; i < this.foods.length; i++) {
            for (let j = 0; j < this.players.length; j++) {
                const dx = this.foods[i].x - this.players[j].x;
                const dy = this.foods[i].y - this.players[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.players[j].radius - this.foods[i].radius) {
                    this.players[j].radius += 1;
                    this.foods.splice(i, 1);
                }
            }
        }
    };

    collisionPlayerToPlayer = () => {
        for (let i = 0; i < this.players.length - 1; i++) {
            for (let j = 1; j < this.players.length; j++) {
                const dx = this.players[i].x - this.players[j].x;
                const dy = this.players[i].y - this.players[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                const indexBigger = this.players[i].radius > this.players[j].radius ? i : j;
                const indexSmaller = this.players[i].radius < this.players[j].radius ? i : j;

                if (distance < this.players[indexBigger].radius) {
                    this.players[indexBigger].radius += 1;
                    this.players[indexSmaller].radius -= 1;

                    if (this.players[indexSmaller].radius < 10) {
                        this.players.splice(indexSmaller, 1);
                    }
                }
            }
        }
    };

    deletePlayer = (name) => {
        const index = this.players.findIndex(item => item.name === name);
        this.players.splice(index, 1);
    };

    sortPlayers = () => {
        this.sortByRadius(this.players);
    };

    sortByRadius(players) {
        players.sort((a, b) => a.radius <= b.radius ? 1 : -1);
    }

    generateFoods() {
        const { foodsCount } = config;

        this.createFoods(foodsCount);
    }

    handleFoods = () => {
        const { foodsCount } = config;

        if (this.foods.length < foodsCount) {
            const count = foodsCount - this.foods.length;
            this.createFoods(count);
        }
    };

    createFoods = (foodsCount) => {
        const { foodsRadius } = config;

        for (let i = 0; i < foodsCount; i++) {
            const food = { radius: foodsRadius, x: this.randomNumber(), y: this.randomNumber(), color: this.randomColor() };

            this.foods.push(food);
        }
    };

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