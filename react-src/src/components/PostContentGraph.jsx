import React from "react";
import {
    VictoryChart,
    VictoryAxis,
    VictoryStack,
    VictoryBar,
    VictoryTheme
} from "victory";
//import action from "./actions.js";
import PropTypes from "prop-types";
import "./PostContentGraph.css";

const getWeekdates = () => {
    const week = [];
    const month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    let today = new Date();

    for (let i = 1; i <= 7; i += 1) {
        const newdate = today.getDate();
        week.push({
            month: month[today.getMonth()],
            date: newdate
        });

        if (newdate === 1) {
            today = new Date(Date.now() - 86400000);
        } else {
            today.setDate(newdate - 1);
        }
    }
    // console.log(week);
    return week;
};

const PostContentGraph = props => {
    // console.log('PostContentGraph: ', props.data);
    const colors = ["#5a9ecc", "#86bd99", "#da8846"];

    const text = [];
    const image = [];
    const video = [];

    for (let i = 0; i < props.data.length; i += 1) {
        text.unshift({
            date: parseInt(props.data[i].date.split("/")[0], 10),
            count: props.data[i].text
        });
        image.unshift({
            date: parseInt(props.data[i].date.split("/")[0], 10),
            count: props.data[i].images
        });

        video.unshift({
            date: parseInt(props.data[i].date.split("/")[0], 10),
            count: props.data[i].videos
        });
    }

    // console.log("text: ",text);
    // console.log("videos: ", video);
    // console.log("image: ", image);
    const date = [];
    const month = [];
    const comb = [];
    getWeekdates().forEach(element => {
        date.push(element.date);
        month.push(element.month);
        comb.push(`${element.date} ${element.month}`);
    });
    // console.log("date: ",date);
    // console.log("comb: ", comb);

    return (
        <VictoryChart
            width={800}
            domainPadding={50}
            theme={VictoryTheme.material}
        >
            <VictoryAxis tickValues={date} tickFormat={comb} />
            <VictoryAxis
                dependentAxis
                // tickFormat={x => (`${x += 5}`)}
            />
            <VictoryStack colorScale={colors}>
                <VictoryBar data={text} x="date" y="count" />
                <VictoryBar data={image} x="date" y="count" />
                <VictoryBar data={video} x="date" y="count" />
            </VictoryStack>
        </VictoryChart>
    );
};

PostContentGraph.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    date: PropTypes.string,
    images: PropTypes.number,
    text: PropTypes.number,
    videos: PropTypes.number
};

PostContentGraph.defaultProps = {
    data: [],
    date: "",
    images: 0,
    text: 0,
    videos: 0
};

export default PostContentGraph;
