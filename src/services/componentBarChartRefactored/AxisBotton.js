

export const AxisBottom = ({xScale,innerHeight , tickFormat}) => xScale.ticks().map(tickValue => (
    <g className='tick' key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
        <line x1={0} y1={0} x2={0} y2={innerHeight}/>
        <text style={{textAnchor:'middle'}} dy='.71em' y={innerHeight+5}>{tickFormat(tickValue)}</text>
    </g>
    ))