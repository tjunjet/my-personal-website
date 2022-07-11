import '../css/root.css';
import '../css/skills.css';

import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { skillInfo } from '../constants/skills_constants';

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
              <div className = "StyledContainer">
                    <p className = "StyledSection">
                        <p className = "StyledCardSection">
                        {skillInfo.map((info, i) => {
                            return (
                                <InfoCard
                                imgSrc={info.imgSrc}
                                name={info.name}
                                key={i}
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