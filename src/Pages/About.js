import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from '../Components/Common/Card'


function About() {
    const params = useParams();
    console.log(params);
    return (
        <Card>
            <div className='about'>
                <h1>
                    Feedify
                </h1>
                <h2>
                    A React project under the banner of SaMs-Hub
                </h2>
                <p style={{color:"gray"}}>
                Feedify app is in the form of ratings and comment surveys , Which is provide a platform for survey researcher, survey analyst, market researcher, or customer insights specialist they can Administer or Analyzed survey (This involves using statistical methods to analyze the data collected from the survey).
                </p>

                <p>
                    <Link to='/'>
                        Back to Home
                    </Link>
                </p>

            </div>
        </Card>
    )
}

export default About