export const Marks = ({data, yScale, xScale, xValue, yValue, tooltipFormat,circleRadius}) => 
    data.map(d=>
        <circle
            className="mark" 
            cx={xScale(xValue(d))} 
            cy={yScale(yValue(d))}  //changin to yValue(d) is not wirking? 
            r={circleRadius}
        >
            <title>{tooltipFormat(yValue(d))}</title>
        </circle>
        
        )