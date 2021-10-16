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

const width = 960
const height = 600
const margin = {top:20,right:20,bottom:20,left:200}



    
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

    const xScale = scaleLinear()
        .domain(extent(data,xValue))
        .range([0,innerWidth])

    const yScale = scaleLinear()
        .domain(extent(data,yValue))
        .range([0,innerHeight])
    
    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left},${margin.top})`}>

                < AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={format('.2s')}/>
                {/* {data.map(d=><rect x={0} y={yScale(d.Country)} width={xScale(d.Population)} height={yScale.bandwidth()} />)} */}
                <AxisLeft yScale={yScale} innerWidth={innerWidth}/>
                <Marks data={data} xScale={xScale} yScale={yScale} xValue={xValue} yValue={yValue} tooltipFormat={format('.2s')} className='circle'/>
                <text className='axis-label' x={innerWidth/2} y={innerHeight/2} textAnchor='middle'>{xAxisLabel}</text>
            </g>
        </svg>

    )
}



export default BarChartRefactored;