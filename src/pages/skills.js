import '../css/root.css';
import '../css/skills.css';

import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { programmingInfo } from '../constants/programming_constants';
import { softwareInfo } from '../constants/software_constants';
import { roboticsInfo } from '../constants/robotics_constants';
import { engineeringInfo } from '../constants/engineering_constants';

// Constant Info
const InfoCard = ({
    imgSrc,
    name,
  }) => {
    return (
      <h1 className = "StyledInfoCard">
        <img src={imgSrc} className="StyledImage"/>
        <p>{name}</p>
      </h1>
    );
  };

export default function Skills() {
    return (
        <body>
            <div className = "Skills-header">
                <h1>SKILLS</h1>
                <h4> Programming Languages:</h4>
              <div className = "StyledContainer">
                    <p className = "StyledSection">
                        <p className = "StyledCardSection">
                          {programmingInfo.map((info) => {
                              return (
                                  <InfoCard
                                  imgSrc={info.imgSrc}
                                  name={info.name}
                                  />
                              );
                              })}
                        </p>
                    </p>
                </div>
                <h4> Software: </h4>
              <div className = "StyledContainer">
                    <p className = "StyledSection">
                        <p className = "StyledCardSection">
                          {softwareInfo.map((info) => {
                              return (
                                  <InfoCard
                                  imgSrc={info.imgSrc}
                                  name={info.name}
                                  />
                              );
                              })}
                        </p>
                    </p>
                </div>
                <h4> Robotics: </h4>
              <div className = "StyledContainer">
                    <p className = "StyledSection">
                        <p className = "StyledCardSection">
                          {roboticsInfo.map((info) => {
                              return (
                                  <InfoCard
                                  imgSrc={info.imgSrc}
                                  name={info.name}
                                  />
                              );
                              })}
                        </p>
                    </p>
                </div>
                <h4> Engineering: </h4>
              <div className = "StyledContainer">
                    <p className = "StyledSection">
                        <p className = "StyledCardSection">
                          {engineeringInfo.map((info) => {
                              return (
                                  <InfoCard
                                  imgSrc={info.imgSrc}
                                  name={info.name}
                                  />
                              );
                              })}
                        </p>
                    </p>
                </div>
              </div>
        </body>
    )
}