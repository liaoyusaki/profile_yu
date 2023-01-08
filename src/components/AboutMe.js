import React, { useState } from 'react';


const Homepage = () => {
    return (
        <>
            <div style={{textAlign: "left"}}>
                <h2>Summary</h2>
              <ul>
                  <li>3 - 3.5 experience in Data (Pharmaceutical/Logistic), 1 year in managing Data Engineer team.</li>
                  <li>Multilingual-4 languages: Fluent in French, English, Chinese, Japanese.</li>
                  <li>Top 3% ranking of an NLP Medical Text Mining Competition in Japan.</li>
                  <li>17 certificates on MOOC in Data.</li>
              </ul>
                <b style={{color: '#800000'}}>Actively looking for Data Engineer / Developer position.</b>
                <h2>Technique</h2>
                <b>Programming Language & Framework</b>
                <p>Python, SQL, R, Vuejs, React, html, javascript, css</p>
                <b>Library</b>
                <p>Pandas • Numpy • Scrapy • Selenium • SQLAlchemy • boto3</p>
                <b>Cloud Service</b>
                <p>GCP, AWS(S3, redshift, quicksight), Snowflake, Elatiscsearch</p>
                <b>Other</b>
                <p>Git, Docker, Tableau, Excel, Pycharm, OOP</p>
                <b>Language</b>
                <p>Fluent: French, English TOEIC 865, Japanese JLPT-N1, Chinese</p>
            </div>
        </>
    );
};

export default Homepage;