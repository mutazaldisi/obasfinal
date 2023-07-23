import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from 'react-i18next';

const schedules = {
  "men-comp": "Men’s Comp Schedule ",
  "women-comp": "Women’s Comp Schedule ",
  "men-rec": "Men’s Rec Schedule ",
  "women-rec": "Women’s Rec Schedule ",
  "co-ed": "Co-ed Schedule "
}

const StyledButton = styled.button`
  background-color: #f2f2f2;
  color: #333;
  padding: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  /* Add more styles as needed */

`;
const teamSchedules = {
  "men-comp": [
    { date: "Friday", teams: ["Team A", "Team B"], time: "9:00 PM" },
    { date: "Friday", teams: ["Team C", "Team D"], time: "10:00 PM" },
    { date: "Friday", teams: ["Team E", "Team F"], time: "11:00 PM" },
    { date: "Friday", teams: ["Team G", "Team H"], time: "12:00 AM" }
  ],
  "women-comp": [
    { date: "Saturday", teams: ["Team W", "Team X"], time: "9:00 AM" },
    { date: "Saturday", teams: ["Team Y", "Team Z"], time: "10:00 AM" },
    { date: "Saturday", teams: ["Team P", "Team Q"], time: "11:00 AM" },
    { date: "Saturday", teams: ["Team R", "Team S"], time: "12:00 PM" }
  ],
  "men-rec": [
    { date: "Saturday", teams: ["Team M1", "Team M2"], time: "8:00 PM" },
    { date: "Saturday", teams: ["Team M3", "Team M4"], time: "9:00 PM" },
    { date: "Saturday", teams: ["Team M5", "Team M6"], time: "10:00 PM" },
    { date: "Saturday", teams: ["Team M7", "Team M8"], time: "11:00 PM" }
  ],
  "women-rec": [
    { date: "Sunday", teams: ["Team W1", "Team W2"], time: "9:00 AM" },
    { date: "Sunday", teams: ["Team W3", "Team W4"], time: "10:00 AM" },
    { date: "Sunday", teams: ["Team W5", "Team W6"], time: "11:00 AM" },
    { date: "Sunday", teams: ["Team W7", "Team W8"], time: "12:00 PM" }
  ],
  "co-ed": [
    { date: "Sunday", teams: ["Team C1", "Team C2"], time: "7:00 PM" },
    { date: "Sunday", teams: ["Team C3", "Team C4"], time: "8:00 PM" },
    { date: "Sunday", teams: ["Team C5", "Team C6"], time: "9:00 PM" },
    { date: "Sunday", teams: ["Team C7", "Team C8"], time: "10:00 PM" }
  ]
};

const StyledTable = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;

  th {
    // background-color: #f2f2f2;
    padding: 10px;
    text-align: left;
  }

  td {
    padding: 10px;
    border: 1px solid #ccc;
  }
`;


export default function League() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const { t } = useTranslation();

  return (
    <div className="league-container">
      <h1 className="tittleLeague">{t('LeagueSchedules')}</h1>
      <div className="tabs">
        <div className="dropdown">
          <StyledButton onClick={() => handleMenuClick('men-comp')}>{t('MenCompSchedule')}</StyledButton>
        </div>
        <div className="dropdown">
          <StyledButton onClick={() => handleMenuClick('women-comp')}>{t('WomenCompSchedule')}</StyledButton>
        </div>
        <div className="dropdown">
          <StyledButton onClick={() => handleMenuClick('men-rec')}>{t('MenRecSchedule')}</StyledButton>
        </div>
        <div className="dropdown">
          <StyledButton onClick={() => handleMenuClick('women-rec')}>{t('WomenRecSchedule')}</StyledButton>
        </div>
        <div className="dropdown">
          <StyledButton onClick={() => handleMenuClick('co-ed')}>{t('CoedSchedule')}</StyledButton>
        </div>
      </div>
      <div>

      {activeMenu && (
          <>
            <h2>{schedules[activeMenu]}</h2>
            <StyledTable>
              <thead>
                <tr>
                  <th>{t('Date')}</th>
                  <th>{t('Teams')}</th>
                  <th>{t('Time')}</th>
                </tr>
              </thead>
              <tbody>
                {teamSchedules[activeMenu].map((schedule, index) => (
                  <tr key={index}>
                    <td>{schedule.date}</td>
                    <td>{schedule.teams.join(" vs ")}</td>
                    <td>{schedule.time}</td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>
          </>
        )}
        
      </div>
    </div>
  );
}
