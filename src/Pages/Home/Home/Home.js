import React from 'react';
import ReasonOfChoosing from '../ReasonOfChoosing/ReasonOfChoosing';
import Showcase from '../Showcase/Showcase';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Showcase></Showcase>
            <ReasonOfChoosing></ReasonOfChoosing>
        </div>
    );
};

export default Home;