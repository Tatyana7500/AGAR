export const generateLoginBackground = () => {
    const backgroundBlobs = [];

    for (let i = 0; i < 50; i++) {
        backgroundBlobs.push({color: rgbColor(), radius: genereteRadius(), x: generatePosition().x, y: generatePosition().y});
    }

    return backgroundBlobs;
};

const rgbColor = () => {
    return {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255),
    };
};

const genereteRadius = () => {
    return Math.random() * 100;
};

const generatePosition = () => {
    return {
        x: Math.floor(Math.random() * window.innerWidth),
        y: Math.floor(Math.random() * window.innerHeight),
    };
};