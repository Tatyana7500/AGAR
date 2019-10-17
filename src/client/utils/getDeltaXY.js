const getDeltaXY = (player, windowSize) => {
    const { width, height } = windowSize;
    const { x, y } = player;

    const dx = (x - width / 2) || 0;
    const dy = (y - height / 2) || 0;

    return { dx, dy };
};

export default getDeltaXY;