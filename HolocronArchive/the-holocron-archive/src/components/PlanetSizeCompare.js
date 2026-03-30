import "../App.css";

function PlanetSizeCompare({ leftItem, rightItem }) {
    const l = parseFloat(leftItem.diameter);
    const r = parseFloat(rightItem.diameter);

    if (isNaN(l) || isNaN(r)) return <p className="StatLabel">no diameter data</p>;

    const max = Math.max(l, r);
    const leftPercent = (l / max) * 100;
    const rightPercent = (r / max) * 100;

    return (
        <div className="CompareChartCard">
            <p className="CompareChartTitle">size comparison</p>
            <div className="PlanetSizeRow">
                <div className="PlanetSizeItem">
                    <div
                        className="PlanetCircle left"
                        style={{
                            width: `${leftPercent}%`,
                            paddingBottom: `${leftPercent}%`, // keeps it a circle
                        }}
                    />
                    <p className="PlanetSizeLabel left">{leftItem.name}</p>
                    <p className="PlanetSizeValue">{l.toLocaleString()} km</p>
                </div>
                <div className="PlanetSizeItem">
                    <div
                        className="PlanetCircle right"
                        style={{
                            width: `${rightPercent}%`,
                            paddingBottom: `${rightPercent}%`,
                        }}
                    />
                    <p className="PlanetSizeLabel right">{rightItem.name}</p>
                    <p className="PlanetSizeValue">{r.toLocaleString()} km</p>
                </div>
            </div>
        </div>
    );
}

export default PlanetSizeCompare;