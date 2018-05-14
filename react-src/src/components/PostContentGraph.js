import React, { Component } from 'react';
import { VictoryChart, VictoryAxis, VictoryStack, VictoryBar, VictoryLine } from 'victory';
import './PostContentGraph.css';


class PostContentGraph extends Component {

    constructor(props) {
        super(props);
        this.state = { 
                myDataset : {
               
            },

            colors : [
                 '#5a9ecc', // blue
                 '#86bd99', // green
                 '#da8846', // orange
            ]
        };
    }
    
   
      render() {
            console.log('PostContentGraph: ', this.props.data);
            const text = [];
            const image = [];
            const video = [];
            for(let i = 0; i < this.props.data.length; i++) {
                text.push(
                            {
                             date: this.props.data[i].date.split('/')[0],
                             count: this.props.data[i].text 
                            }
                        );
                image.push({

                            date: this.props.data[i].date.split('/')[0],
                            count: this.props.data[i].images
                    });
                
                video.push({

                        date: this.props.data[i].date.split('/')[0],
                        count: this.props.data[i].videos
                    });
                
                        
            }
            
            console.log("text: ",text);
            console.log("videos: ", video);
            console.log("image: ", image);
            const date = [];
            const month = [];
            this.getWeekdates().forEach(element => {
                date.push(element.date);
                month.push(element.month);
            });
        return(
         <VictoryChart
            domainPadding={130}>
            
            <VictoryAxis
                domain={{ y: [0, 50] }}
                tickValues={date}
                tickFormat={ (t, i) => { return t + ' '+ month[i]} }   
            />

            {/* <VictoryAxis
               
                dependentAxis
                tickFormat={(y) => { while(y <= 50) {`${y}P`} } }
            />
 */}
            <VictoryStack
                colorScale={this.state.colors}>
                <VictoryBar x="date" y="count" data={text} />
                <VictoryBar x="date" y="count" data={image} />
                <VictoryBar x="date" y="count" data={video} />
            </VictoryStack> 
        </VictoryChart>
        );
      }

        getWeekdates() {
            const week = [];
            const month = [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ];

            let today = new Date();
           
            for(let i = 1; i <= 7; i++) {
                
                let date = today.getDate();
                week.push({
                           month: month[today.getMonth()], 
                           date: date
                        });
               
                if(date === 1)
                    today = new Date(Date.now() - 86400000);
                else
                    today.setDate(date - 1);    
            }
            console.log(week);
            return week;   

        }
}

export default PostContentGraph;

