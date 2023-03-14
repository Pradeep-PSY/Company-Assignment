import React, { useEffect, useRef, useState } from 'react'
import * as d3 from 'd3';
import { Box } from '@chakra-ui/react';
import { loadData } from '../hoc/localStorage';

const Chart_sm = () => {
    const [data] = useState(loadData('point'));

    const svgRef = useRef();

    useEffect(() => {
        // setting up svg
        const w = 250;
        const h = 200;
        const svg = d3.select(svgRef.current)
            .attr('width', w)
            .attr('height', h)
            .style('background', '#d3d3d3')
            .style('margin-top', '50')
            .style('overflow', 'visible');

        //setting the scaling
        const xScale = d3.scaleLinear()
            .domain([0, data.length - 1])
            .range([0, w]);

        const yScale = d3.scaleLinear()
            .domain([0, 50])
            .range([h, 0]);

        const generateScaledLine = d3.line()
            .x((d, i) => xScale(i))
            .y(yScale)
            .curve(d3.curveCardinal);

        //setting the axes 
        const xAxis = d3.axisBottom(xScale)
            .ticks(data.length)
            .tickFormat(i => i);

        const yAxis = d3.axisLeft(yScale)
            .ticks(5);

        svg.append('g')
            .call(xAxis)
            .attr('transform', `translate(0,${h})`);

        svg.append('g')
            .call(yAxis);


        //setting up the data for the svg
        svg.selectAll('.line')
            .data([data])
            .join('path')
            .attr('d', d => generateScaledLine(d))
            .attr('fill', 'none').attr('stroke', 'black');


    }, [data])
    return (
        <Box m='5' p='6' w={{ base: '300px', md: '360px', lg: '560px' }}>

            <svg ref={svgRef} ></svg>
        </Box>

    )
}

export default Chart_sm