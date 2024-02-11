const CounterInput = ({
    value,
    onIncrement,
    onDecrement,
    type
}: {
    value: any,
    onIncrement: any,
    onDecrement: any,
    type: any
}) => (

    
    <div className="flex items-center">
        {type === "W" && <label>{type} : </label>}
        {type === "H" && <label>{type} : </label>}

        <button onClick={onDecrement} className="px-2">
            -
        </button>
        <input
            type="text"
            className="ml-2 mr-2 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
            placeholder=""
            value={value}
            readOnly
        />
        <button onClick={onIncrement} className="px-2">
            +
        </button>
    </div>
);


export default CounterInput;