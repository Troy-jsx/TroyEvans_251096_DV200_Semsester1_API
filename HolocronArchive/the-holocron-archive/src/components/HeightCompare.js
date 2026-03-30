import "../App.css";

function HeightCompare({ leftItem, rightItem, field }) {
    const l = parseFloat(String(leftItem[field.key]).replace(/,/g, ''));
    const r = parseFloat(String(rightItem[field.key]).replace(/,/g, ''));

    if (isNaN(l) || isNaN(r)) return <p className="StatLabel">no {field.label} data</p>;

    const max = Math.max(l, r);
    const MAX_HEIGHT = 200;
    const leftH = (l / max) * MAX_HEIGHT;
    const rightH = (r / max) * MAX_HEIGHT;
    const PILL_WIDTH = 40;

    return (
        <div className="CompareChartCard">
            <p className="CompareChartTitle">{field.label} comparison</p>
            <div className="HeightCompareRow">
                <div className="HeightCompareItem">
                    <div style={{ width: PILL_WIDTH, height: leftH, borderRadius: PILL_WIDTH / 2, background: '#f0ff20' }}/>
                    <p className="PlanetSizeLabel left">{leftItem.name}</p>
                    <p className="PlanetSizeValue">{leftItem[field.key]} {field.unit}</p>
                </div>
                <div className="HeightCompareItem">
                    <div style={{ width: PILL_WIDTH, height: rightH, borderRadius: PILL_WIDTH / 2, background: '#00cfff' }}/>
                    <p className="PlanetSizeLabel right">{rightItem.name}</p>
                    <p className="PlanetSizeValue">{rightItem[field.key]} {field.unit}</p>
                </div>
            </div>
        </div>
    );
}

export default HeightCompare;