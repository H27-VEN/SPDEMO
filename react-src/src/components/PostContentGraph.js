import React, { Component } from 'react';
import { VictoryChart, VictoryAxis, VictoryStack, VictoryBar, VictoryLine, VictoryTheme } from 'victory';
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
                text.unshift({
                    date: parseInt(this.props.data[i].date.split('/')[0]),
                    count: this.props.data[i].text              
                });
                image.unshift({
                    date: parseInt(this.props.data[i].date.split('/')[0]),
                    count: this.props.data[i].images
                });
                
                video.unshift({
                    date: parseInt(this.props.data[i].date.split('/')[0]),
                    count: this.props.data[i].videos
                });
                
                        
            }
            
            console.log("text: ",text);
            console.log("videos: ", video);
            console.log("image: ", image);
            const date = [];
            const month = [];
            const comb = []
            this.getWeekdates().forEach(element => {
                date.push(element.date);
                month.push(element.month);
                comb.push(element.date + ' ' + element.month);
            });
            console.log("date: ",date);
            console.log("comb: ", comb);
            
        return(
            <VictoryChart    
                width={800}
                domainPadding={50}
                theme={VictoryTheme.material}
            >
                <VictoryAxis
                    tickValues={date}
                    tickFormat={comb}
                />
                <VictoryAxis
                    dependentAxis
                        //tickFormat={(x) => (console.log("tickformat: " + x ))}
                />
                <VictoryStack colorScale={this.state.colors}>  
                    <VictoryBar data={text}  x="date" y="count"  />
                    <VictoryBar data={image} x="date" y="count"  />
                    <VictoryBar data={video} x="date" y="count"  />
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

