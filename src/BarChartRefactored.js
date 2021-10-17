import React from 'react';
// import { useState, useEffect} from 'react'
import { csv, scaleLinear, scaleBand ,  extent, format }  from 'd3'
import { useData } from './services/useData';
import { AxisBottom } from './services/componentBarChartRefactored/AxisBotton';
import { AxisLeft } from './services/componentBarChartRefactored/AxisLeft';
import { Marks } from './services/componentBarChartRefactored/Marks';
/**
 *  BarChart Refactored..
 */
//  const csvUrl = 'https://gist.githubusercontent.com/flouren/aa48edd463333c90e3af2cb7a434fafe/raw/9a3d58e4e27b765bdb1a2b40b6823f7f8672fb14/UN_Population_2019.csv'

const width = 1260
const height = 600
const margin = {top:20,right:20,bottom:55,left:100}
const yAxisLabelOffset = 50



    
const BarChartRefactored = () => {

    const data = useData()
    
    if(!data){
        return <div> 'Loading...'</div>
    }

    const innerHeight = height - margin.top - margin.bottom
    const innerWidth = width - margin.left - margin.right

    const xValue = d => d.sepal_length
    const xAxisLabel = 'Sepal Lenght'

    const yValue = d => d.sepal_width
    const yAxisLabel = 'Sepal Width'

    const xScale = scaleLinear()
        .domain(extent(data,xValue))
        .range([0,innerWidth])
        .nice()

    const yScale = scaleLinear()
        .domain(extent(data,yValue))
        .range([0,innerHeight])
    
    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left},${margin.top})`}>

                < AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={format('.2s')}/>
                {/* {data.map(d=><rect x={0} y={yScale(d.Country)} width={xScale(d.Population)} height={yScale.bandwidth()} />)} */}
                <AxisLeft yScale={yScale} innerWidth={innerWidth}/>
                <Marks circleRadius={6} data={data} xScale={xScale} yScale={yScale} xValue={xValue} yValue={yValue} tooltipFormat={format('.2s')} className='circle'/>
                <text className='axis-label' x={innerWidth/2} y={innerHeight+45} textAnchor='middle'>{xAxisLabel}</text>
                <text className='axis-label'  textAnchor='middle' transform={`translate(${-yAxisLabelOffset},${innerHeight/2}) rotate(-90)`}>{yAxisLabel}</text>
            </g>
        </svg>
        // x={-yAxisLabelOffset} y={innerHeight/2}
    )
}



export default BarChartRefactored;