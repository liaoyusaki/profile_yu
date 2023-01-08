import React, { useState } from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

const TimelinePro = () => {
    return (
        <>
            <Timeline position="right" sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.2,
                },
            }}>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        2022-09 to now
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <img style={{width:50}} src="https://thumbs.dreamstime.com/b/simple-vector-filled-flat-amazon-icon-logo-solid-black-pictogram-isolated-white-background-amazon-logo-159029074.jpg" alt="Amazon Icon"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <h2>Amazon</h2>
                        <b>Data Analytics Engineer (BIE)</b>
                        <ul>
                            <li>Design metrics, build SQL data pipeline and AWS quicksight dashboard to find the root cause of the early arrival packages and evaluate their impact on the EU transportation network.</li>
                            <li>Provide data support to redefine sortation cost per package and analyze the impact of price change.</li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        2019-10 to 2022-07
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <img style={{width:50}} src="https://media.licdn.com/dms/image/C4E0BAQELJ3LF2jDyoQ/company-logo_200_200/0/1650609599451?e=1680739200&v=beta&t=mFQNMWrH0SoQmpt2etbZ_cYnTTXosr-_TKgKDuBydgw" alt="RCD Icon"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <h2>Real Consulting Data</h2>
                        <b>Data Engineer Manager</b>
                        <ul>
                            <li>Manage team with 4 members and apply Agile with Scrum guide on 10+ projects.</li>
                            <li>Create and maintain public python library on PyPI. (utils for data warehouse/cloud storage, debug, data quality...)</li>
                            <li>Improve data infrastructure by designing raw data tracking class, data model, and refactoring project.</li>
                            <li>Manage docker images with python dependencies on GCP.</li>
                        </ul>
                        <b>BI developer</b>
                        <ul>
                            <li>Develop 10+ medical research web apps with Vuejs and R shiny for Pfizer, BMS, MSD etc...</li>
                            <li>Build ETL/ELT/EtLT workflow, pipeline with data from different sources. (JSON, API, Web Scraping, etc...)</li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>
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
                        <b>Master of Science in Engineering (BAC+5)</b>
                        <p>NLP Competition: Medical Text Mining provided by BAYER</p>
                        <ul>
                            <li>Supervised machine learning with unstructured text data to predict diseases based on the symptoms.</li>
                            <li>Text normalization, TF-IDF, KNN, SVM, Random Forest, Deep Learning with LSTM using Python, Keras.</li>
                            <li>Final team rank: 17th out of 585</li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        2014-11 to 2015-01
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <img style={{width:50}} src="https://img5.tianyancha.com/logo/lll/c5b3118c9cf84342bffacfea1302c912.png@!f_200x200" alt="Skogame Icon"/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <h2>Skogame</h2>
                        <b>Data Analyst (Intership)</b>
                        <ul>
                            <li>Build metrics to measure the best game distribution channels using mathematics model, pivot table & functions in Excel.</li>
                            <li>Track user data to monitor app life cycle. (DNU, DAU, retention rate, PUR, ARPU, ARPPU)</li>
                            <li>Analyze advertising data (impressions, clickthrough rate) to control ROI.</li>
                            <li>Generate competitive analysis and event effect analysis using R to test hypotheses.</li>
                        </ul>
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
export default TimelinePro;