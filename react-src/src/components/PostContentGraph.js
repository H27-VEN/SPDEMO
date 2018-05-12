import React, { Component } from 'react';
import { VictoryChart, VictoryAxis, VictoryStack, VictoryBar, VictoryLine } from 'victory';
import './PostContentGraph.css';


class PostContentGraph extends Component {

    constructor(props) {
        super(props);
        this.state = { 
                myDataset : {
                values: [
                    [{
                        date: '05/22/2017',
                        value: 3445.22
                    }, {
                        date: '05/29/2017',
                        value: 10076.710000000021
                    }, {
                        date: '06/05/2017',
                        value: 13774.59000000004
                    }, {
                        date: '06/12/2017',
                        value: 13737.460000000043
                    }, {
                        date: '06/19/2017',
                        value: 14541.510000000046
                    }, {
                        date: '06/26/2017',
                        value: 13172.940000000042
                    }, {
                        date: '07/03/2017',
                        value: 16373.240000000056
                    }, {
                        date: '07/10/2017',
                        value: 15241.64000000005
                    }, {
                        date: '07/17/2017',
                        value: 14330.250000000044
                    }, {
                        date: '07/24/2017',
                        value: 14896.990000000053
                    }, {
                        date: '07/31/2017',
                        value: 16529.620000000057
                    }, {
                        date: '08/07/2017',
                        value: 7216.54000000001
                    }],
                    [{
                        date: '05/22/2017',
                        value: 3121.18
                    }, {
                        date: '05/29/2017',
                        value: 8936.090000000017
                    }, {
                        date: '06/05/2017',
                        value: 11335.590000000031
                    }, {
                        date: '06/12/2017',
                        value: 13569.960000000043
                    }, {
                        date: '06/19/2017',
                        value: 13462.39000000004
                    }, {
                        date: '06/26/2017',
                        value: 12873.360000000037
                    }, {
                        date: '07/03/2017',
                        value: 13934.220000000045
                    }, {
                        date: '07/10/2017',
                        value: 13919.000000000042
                    }, {
                        date: '07/17/2017',
                        value: 14689.960000000046
                    }, {
                        date: '07/24/2017',
                        value: 15030.370000000046
                    }, {
                        date: '07/31/2017',
                        value: 16793.50000000006
                    }, {
                        date: '08/07/2017',
                        value: 6807.0200000000095
                    }],
                    [{
                        date: '05/22/2017',
                        value: 1549.08
                    }, {
                        date: '05/29/2017',
                        value: 2017.42
                    }, {
                        date: '06/05/2017',
                        value: 1891.1799999999998
                    }, {
                        date: '06/12/2017',
                        value: 1660.88
                    }, {
                        date: '06/19/2017',
                        value: 1401.18
                    }, {
                        date: '06/26/2017',
                        value: 1139
                    }, {
                        date: '07/03/2017',
                        value: 871.2
                    }, {
                        date: '07/10/2017',
                        value: 784.76
                    }, {
                        date: '07/17/2017',
                        value: 670
                    }, {
                        date: '07/24/2017',
                        value: 606.54
                    }, {
                        date: '07/31/2017',
                        value: 559.0799999999999
                    }, {
                        date: '08/07/2017',
                        value: 120.2
                    }],
                    [{
                        date: '05/22/2017',
                        value: 1647.8300000000002
                    }, {
                        date: '05/29/2017',
                        value: 2078.95
                    }, {
                        date: '06/05/2017',
                        value: 1806.65
                    }, {
                        date: '06/12/2017',
                        value: 1310.3600000000001
                    }, {
                        date: '06/19/2017',
                        value: 1196.78
                    }, {
                        date: '06/26/2017',
                        value: 943.96
                    }, {
                        date: '07/03/2017',
                        value: 618.36
                    }, {
                        date: '07/10/2017',
                        value: 816.65
                    }, {
                        date: '07/17/2017',
                        value: 527
                    }, {
                        date: '07/24/2017',
                        value: 584.4
                    }, {
                        date: '07/31/2017',
                        value: 426.46
                    }, {
                        date: '08/07/2017',
                        value: 102.7
                    }],
                    [{
                        date: '05/29/2017',
                        value: 0
                    }, {
                        date: '06/05/2017',
                        value: 974.7499999999999
                    }, {
                        date: '06/12/2017',
                        value: 1614.34
                    }, {
                        date: '06/19/2017',
                        value: 1461.9599999999998
                    }, {
                        date: '06/26/2017',
                        value: 1215.2199999999998
                    }, {
                        date: '07/03/2017',
                        value: 1153.52
                    }, {
                        date: '07/10/2017',
                        value: 1101.7
                    }, {
                        date: '07/17/2017',
                        value: 728.4199999999998
                    }, {
                        date: '07/24/2017',
                        value: 934.76
                    }, {
                        date: '07/31/2017',
                        value: 669.5799999999999
                    }, {
                        date: '08/07/2017',
                        value: 178.92
                    }],
                    [{
                        date: '05/29/2017',
                        value: 0
                    }, {
                        date: '06/05/2017',
                        value: 676.2699999999999
                    }, {
                        date: '06/12/2017',
                        value: 1909.3599999999997
                    }, {
                        date: '06/19/2017',
                        value: 1474.9099999999999
                    }, {
                        date: '06/26/2017',
                        value: 1133.8799999999999
                    }, {
                        date: '07/03/2017',
                        value: 1009.5399999999998
                    }, {
                        date: '07/10/2017',
                        value: 760.72
                    }, {
                        date: '07/17/2017',
                        value: 576.9799999999999
                    }, {
                        date: '07/24/2017',
                        value: 666.54
                    }, {
                        date: '07/31/2017',
                        value: 716.04
                    }, {
                        date: '08/07/2017',
                        value: 238.56
                    }],
                    [{
                        date: '05/22/2017',
                        value: 925.6999999999999
                    }, {
                        date: '05/29/2017',
                        value: 932.8399999999999
                    }, {
                        date: '06/05/2017',
                        value: 679.51
                    }, {
                        date: '06/12/2017',
                        value: 818.63
                    }, {
                        date: '06/19/2017',
                        value: 614.26
                    }, {
                        date: '06/26/2017',
                        value: 484.90999999999997
                    }, {
                        date: '07/03/2017',
                        value: 440.13
                    }, {
                        date: '07/10/2017',
                        value: 297
                    }, {
                        date: '07/17/2017',
                        value: 189.06
                    }, {
                        date: '07/24/2017',
                        value: 366.76
                    }, {
                        date: '07/31/2017',
                        value: 174.88
                    }, {
                        date: '08/07/2017',
                        value: 54.879999999999995
                    }],
                    [{
                        date: '05/22/2017',
                        value: 846.76
                    }, {
                        date: '05/29/2017',
                        value: 795.16
                    }, {
                        date: '06/05/2017',
                        value: 417.38
                    }, {
                        date: '06/12/2017',
                        value: 556.81
                    }, {
                        date: '06/19/2017',
                        value: 416
                    }, {
                        date: '06/26/2017',
                        value: 444.88
                    }, {
                        date: '07/03/2017',
                        value: 330.58
                    }, {
                        date: '07/10/2017',
                        value: 177.17
                    }, {
                        date: '07/17/2017',
                        value: 127.08
                    }, {
                        date: '07/24/2017',
                        value: 194.2
                    }, {
                        date: '07/31/2017',
                        value: 155.5
                    }, {
                        date: '08/07/2017',
                        value: 44.25
                    }]
                ]
            },

            colors : [
                 '#3B6BAF', // blue
                 '#439755', // green
                 '#D87E3A', // orange
                 '#CA272E',
            ]
        };
    }
    
   
      render() {
            console.log('state: ',this.state);
        return(
         <VictoryChart
            width={580}
            domainPadding={30}>
            <VictoryStack
                colorScale={this.state.colors}>
                {this.state.myDataset.values.map((data, i) => {
                    return <VictoryBar x="date" y="value" key={i} data={data}/>
                })}
            </VictoryStack>
        </VictoryChart>
        );
      }
}

export default PostContentGraph;

