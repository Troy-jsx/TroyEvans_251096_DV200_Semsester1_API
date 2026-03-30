import "../App.css";

function MirroredBarChart({ leftItem, rightItem, fields }) {
    const validFields = fields.filter(f => {
        const l = parseFloat(String(leftItem[f.key]).replace(/,/g, ''));
        const r = parseFloat(String(rightItem[f.key]).replace(/,/g, ''));
        return !isNaN(l) && !isNaN(r) && l !== 0 && r !== 0;
    });

    return (
        <div className="MirroredBarChart">
            {validFields.map(f => {
                const l = parseFloat(String(leftItem[f.key]).replace(/,/g, ''));
                const r = parseFloat(String(rightItem[f.key]).replace(/,/g, ''));
                const max = Math.max(l, r);
                const leftPercent = (l / max) * 100;
                const rightPercent = (r / max) * 100;
                return (
                    <div className="MirroredBarRow" key={f.key}>
                        <div className="MirroredBarSide left">
                            <div className="MirroredBarFill left" style={{ width: `${leftPercent}%` }}>
                                <span className="MirroredBarValue">{l.toLocaleString()}</span>
                            </div>
                        </div>
                        <span className="MirroredBarLabel">{f.label}</span>
                        <div className="MirroredBarSide right">
                            <div className="MirroredBarFill right" style={{ width: `${rightPercent}%` }}>
                                <span className="MirroredBarValue">{r.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default MirroredBarChart;