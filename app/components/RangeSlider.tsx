const ArraySize = ({
    arraySize,
    setArraySize,
}: {
    arraySize: any,
    setArraySize: any,
}) => (
    <>
        <label className="text-gray-300">Array : {arraySize}</label>
        <input
            type="range"
            min="2"
            max="50"
            value={arraySize}
            onChange={(e) => setArraySize(parseInt(e.target.value))}
            className="ml-2"
        />
    </>
);

const AnimationSpeed = ({
    animationSpeed,
    setAnimationSpeed,
}: {
    animationSpeed: any,
    setAnimationSpeed: any,
}) => (
    <>
        <label className="text-gray-300">Animation Speed</label>
        <input
            type="range"
            min="10"
            max="100"
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
            className="ml-2"
        />
    </>
);



export { ArraySize, AnimationSpeed };