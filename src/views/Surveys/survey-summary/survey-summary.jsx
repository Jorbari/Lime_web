import React from 'react';
import { SurveyComponent } from './survey-summary.styles';

class SurveySummary extends React.Component {

    constructor(props) {
        super(props);
       
    }

    render() {
        return (
            <SurveyComponent>
                <div className="content">
                    
                    <div className="section__one">
                        <section>
                            <h3>Total No. of Responses</h3>
                            <p>9</p>
                        </section>
                        <section>
                            <h3>Survey Status</h3>
                            <p>Active</p>
                        </section>
                        <section>
                            <h3>Drafted Surveys:</h3>
                            <p>1</p>
                        </section>
                    </div>

                    <div className="section__two">

                        <section className="flex__two">
                            <h4>Details</h4>

                            <div className="container__curved">

                                <section className="details">
                                    <p>Projet:</p>
                                    <h4>SAPS Project</h4>
                                </section>
                                <section className="details">
                                    <p>No. of questions:</p>
                                    <h4>12</h4>
                                </section>
                                <section className="details">
                                    <p>Date Started:</p>
                                    <h4>10th of January 2020</h4>
                                </section>
                                <section className="details">
                                    <p>Last Modified:</p>
                                    <h4>14th of January 2020</h4>
                                </section>
                                <section className="details">
                                    <p>Estimated completion time</p>
                                    <h4>2 mins</h4>
                                </section>
                                
                            </div>

                        </section>
                        <section className="flex__two">
                            <h4>Collectors</h4>

                            <div className="container__curved">

                                <section className="details__grid">
                                    
                                    <section>
                                        <h4>Live Survey</h4>
                                        <p>3 responses</p>
                                    </section>
                                    <section></section>
                                    <section>
                                        <h4>Live Survey</h4>
                                        <p>3 responses</p>
                                    </section>

                                </section>

                            </div>

                        </section>

                    </div>
    
                </div>
            </SurveyComponent>
        )
    }

}

export default SurveySummary;