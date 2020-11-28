import React from 'react';
import { useState, useEffect  } from "react";
import {getEvents} from '../../services/eventService';

import job from './job.png';
import job1 from './job1.png';
import job2 from './job2.png';

export const Finder = () => {
    return(
        <>
        <div style={{margin:'15px'}}>
            <img src = {job} style = {{width: '100%'}}/>
        </div>
        <div style={{margin:'15px'}}>
            <img src = {job2} style = {{width: '100%'}}/>
        </div>
        <div style={{margin:'15px 15px 60px 15px'}}>
            <img src = {job1} style = {{width: '100%'}}/>
        </div>

        </>
    )
}