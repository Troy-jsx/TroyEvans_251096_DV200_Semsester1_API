import "../App.css";

function TextCompare({ leftItem, rightItem, fields }) {
    return (
        <div className="TextCompare">
            <div className="MirroredBarHeader">
                <span className="MirroredBarName left">{leftItem.name || leftItem.title}</span>
                <span className="MirroredBarName right">{rightItem.name || rightItem.title}</span>
            </div>
            {fields.map(f => (
                <div className="TextCompareRow" key={f.key}>
                    <span className="TextCompareValue left">{leftItem[f.key] || 'unknown'}</span>
                    <span className="MirroredBarLabel">{f.label}</span>
                    <span className="TextCompareValue right">{rightItem[f.key] || 'unknown'}</span>
                </div>
            ))}
        </div>
    );
}

export default TextCompare;