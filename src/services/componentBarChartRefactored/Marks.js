export const Marks = ({data, yScale, xScale, xValue, yValue, tooltipFormat}) => 
    data.map(d=>
        <circle
            className="mark" 
            cx={xScale(d.Country)} 
            cy={yScale(d.Country)}  //changin to yValue(d) is not wirking? 
            r={10}
        >
            <title>{tooltipFormat(yValue(d))}</title>
        </circle>
        
        )