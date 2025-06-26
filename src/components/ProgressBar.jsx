import React from "react";
import styled from "styled-components";

const SkillWrapper = styled.div`
  margin: 20px 0;
  width: 100%;
`;

const Label = styled.div`
  font-weight: 500;
  color: #0a162a;
  margin-bottom: 6px;
`;

const BarContainer = styled.div`
  background-color: #c0c9d8;
  border: 2px solid #485f88;
  border-radius: 6px;
  overflow: hidden;
  height: 22px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
`;

const Progress = styled.div`
  background-color: #384c65;
  height: 100%;
  width: ${({ level }) => level}%;
  transition: width 1.2s ease;
  border-radius: 4px 0 0 4px;
`;

function ProgressBar({ skill, level }) {
  return (
    <SkillWrapper>
      <Label>{skill}</Label>
      <BarContainer>
        <Progress level={level} />
      </BarContainer>
    </SkillWrapper>
  );
}

export default ProgressBar;
