import React, { useState } from 'react';
import { Radio, Timeline } from 'antd';
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
// import TimelineDot from '@mui/lab/TimelineDot';

// const TimelineEdu = () => {
//     return (
//         <>
//             <Timeline position="alternate">
//             <TimelineItem>
//                 <TimelineOppositeContent
//                     sx={{ m: 'auto 0' }}
//                     align="right"
//                     variant="body2"
//                     color="text.secondary"
//                 >
//                     9:30 am
//                 </TimelineOppositeContent>
//                 <TimelineSeparator>
//                     <TimelineConnector />
//                     <TimelineDot>
//                         <img style={{height:50}} src="https://www.keio.ac.jp/en/assets/images/about/learn-more/logo/index/img02.png" alt="Keio University Icon"/>
//                     </TimelineDot>
//                     <TimelineConnector />
//                 </TimelineSeparator>
//                 <TimelineContent sx={{ py: '12px', px: 2 }}>
//                     <h6>Eat</h6>
//                     <p>Because you need strength</p>
//                 </TimelineContent>
//             </TimelineItem>
//             </Timeline>
//         </>
//     );
// };
const TimelineEdu = () => {
    return (
        <>
            <Timeline mode='left'>
                <Timeline.Item className={'Timeline-time'} style={{textAlign:'center' }} label="2016 to 2018" dot={<img style={{height:50}} src="https://www.keio.ac.jp/en/assets/images/about/learn-more/logo/index/img02.png" alt="Keio University Icon"/>}>
                    <h2>Keio University </h2>
                    <p>Master of Science in Engineering (BAC+5)</p>
                </Timeline.Item>
                <Timeline.Item style={{textAlign:'center'}} label="2011 to 2015" dot={<img style={{height:50}} src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Shenzhen_University_Logo.svg/300px-Shenzhen_University_Logo.svg.png" alt="Shenzhen University Icon"/>}>
                    <h2>Shenzhen University</h2>
                    <p>Bachelor of Science in Mathematics</p>
                </Timeline.Item>
            </Timeline>
        </>
    );
};

export default TimelineEdu;