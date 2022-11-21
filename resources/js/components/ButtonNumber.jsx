export default function ButtonNumber({ inc, des, number }) {
    return (
        <div className="btn-num">
            <button onClick={des}>
                <img src="https://img.icons8.com/ios-glyphs/90/null/minus-math.png" />
            </button>
            {number}
            <button onClick={inc}>
                <img src="https://img.icons8.com/ios-glyphs/90/null/plus-math.png" />
            </button>
        </div>
    )
}