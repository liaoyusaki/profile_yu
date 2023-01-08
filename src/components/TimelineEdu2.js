import React, { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

const TimelineEdu = () => {
    return (
        <>
            <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    2016 to 2018
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <img style={{width:50}} src="https://www.keio.ac.jp/en/assets/images/about/learn-more/logo/index/img02.png" alt="Keio University Icon"/>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <h2>Keio University</h2>
                    <p>Master of Science in Engineering (BAC+5)</p>
                </TimelineContent>
            </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        2011 to 2015
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <img style={{width:50}} src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Shenzhen_University_Logo.svg/300px-Shenzhen_University_Logo.svg.png" alt="Shenzhen University Icon"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <h2>Shenzhen University</h2>
                        <p>Bachelor of Science in Mathematics</p>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    );
};

export default TimelineEdu;