import React from 'react';
import { LinerProgressBar, LinearProgressContainer} from './LinerProgress';


const LinerProgress = () => {
    return (
        <LinearProgressContainer>
            <LinerProgressBar className="bar1"/>
            <LinerProgressBar className="bar2" />
        </LinearProgressContainer>

   
    );
};

export default LinerProgress;