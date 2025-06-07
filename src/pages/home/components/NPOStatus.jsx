import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import indiaGeo from "../assets/india-states.json"; // Ensure path is correct
import "../styles/NPOStatus.css";

const NPOStatus = () => {
  const svgRef = useRef();
  const [hoveredState, setHoveredState] = useState(null);
  const [stateData] = useState({
    Maharashtra: 48875,
    Rajasthan: 17164,
    "Madhya Pradesh": 15486,
  });

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const width = 800, height = 600;

    // Clear previous drawings
    svg.selectAll("*").remove();

    // Define projection
    const projection = d3.geoMercator().fitSize([width, height], indiaGeo);
    const pathGenerator = d3.geoPath().projection(projection);

    // Draw map
    svg.selectAll("path")
      .data(indiaGeo.features)
      .join("path")
      .attr("d", pathGenerator)
      .attr("class", "state")
      .attr("fill", "#FFC300")
      .attr("stroke", "#555")
      .attr("stroke-width", 1)
      .on("mouseover", (event, d) => {
        setHoveredState(d.properties.name);
        d3.select(event.target).attr("fill", "#FF5733");
      })
      .on("mouseout", (event, d) => {
        setHoveredState(null);
        d3.select(event.target).attr("fill", "#FFC300");
      });

  }, []);

  return (
    <div className="npo-status-container">
      <h1>Status of NPOs</h1>
      <div className="map-container">
        <svg ref={svgRef} width="800" height="600"></svg>
        {hoveredState && stateData[hoveredState] && (
          <div className="state-popup">
            <p>{hoveredState}: {stateData[hoveredState]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NPOStatus;
