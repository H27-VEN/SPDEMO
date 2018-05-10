import React, { Component } from 'react';
// import CanvasJS from 'canvasjs';
// import chart from '../chart.png';
import './PostContentGraph.css';


class PostContentGraph extends Component {
    
    componentDidMount() {
        // const chart = new CanvasJS.Chart("chartContainer", {
        //     animationEnabled: true,
        //     exportEnabled: true,
        //     title: {
        //         text: "Basic Column Chart in React"
        //     },
        //     data: [{
        //         type: "column",
        //         dataPoints: [
        //             { y: 71, label: "Apple" },
        //             { y: 55, label: "Mango" },
        //             { y: 50, label: "Orange" },
        //             { y: 65, label: "Banana" },
        //             { y: 95, label: "Pineapple" },
        //             { y: 68, label: "Pears" },
        //             { y: 28, label: "Grapes" },
        //             { y: 34, label: "Lychee" },
        //             { y: 14, label: "Jackfruit" }
        //         ]
        //     }]
        // });
        // chart.render();
      }
      render() {
        return (
          <div>
            <div className="chart-text">
                <h2>Daily Usage Chart</h2>
            </div>
            <div className="chart-Legend">
                <h3>Chart Legend</h3>
            </div>
            
            <div className="chart-placeholder">
                {/* <img src={chart.png} alt="This is a placeholder chart element" height="500px" width="500px" /> */}
            </div>

          </div>
        );
      }
}

export default PostContentGraph;

