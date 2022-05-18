import React, { useEffect, useId, useState } from "react";
import styled from "styled-components";
import { DEFAULT_STATS } from "../constants/constants";

const PlayerInfoCell = styled.td`
  color: #ffffff;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 428px) {
    font-size: 10px;

    img {
      width: 15px;
      height: 19px;
    }
  }
`;

const StatusCell = styled.td`
  color: #ffffff;
  font-size: 14px;

  @media screen and (max-width: 428px) {
    font-size: 10px;
  }
`;

const GreenTextCell = styled.td`
  color: #30bd73;
  font-size: 14px;

  @media screen and (max-width: 428px) {
    font-size: 9px;
  }
`;

const TableRow = styled.tr`
  td {
    vertical-align: middle;
    padding: 10px;
  }

  :nth-child(even) td {
    background-color: #24262b;
  }

  td:first-of-type {
    border-radius: 27px 0 0 27px;
  }

  td:last-of-type {
    border-radius: 0 27px 27px 0;
  }

  @media screen and (max-width: 428px) {
  }
`;

const StatList = styled(({ list, ...props }) => {
  const id = useId();
  return (
    <div {...props}>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Status</th>
            <th>Game</th>
            <th>Bet</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item: any, index: number) => (
            <TableRow key={`${id}-${index}`}>
              <PlayerInfoCell>
                <img src={item.avatar} alt="avatar" /> {item.username}
              </PlayerInfoCell>
              <StatusCell>{item.status}</StatusCell>
              <GreenTextCell>{item.game}</GreenTextCell>
              <GreenTextCell>{item.bet}</GreenTextCell>
              <GreenTextCell>{item.time}</GreenTextCell>
            </TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
})`
  background-color: #191b20;
  padding: 40px;
  font-family: Poppins;
  border-radius: 25px;
  margin-bottom: 30px;

  table {
    width: 100%;
    border-collapse: separate;
  }

  tr {
    border-radius: 25px;
    overflow: hidden;
  }

  th {
    color: #727887;
    font-family: Poppins;
    font-size: 20px;
    text-align: left;
    padding-bottom: 26px;
  }

  @media screen and (max-width: 428px) {
    padding: 10px;
    margin-bottom: 15px;

    th {
      font-size: 10px;
      padding-bottom: 8px;
    }
  }
`;

const StatControl = styled(({ ...props }) => {
  const [activeStat, setActiveStat] = useState(0);
  useEffect(() => {
    document.querySelector(".active-stat")?.classList.remove("active-stat");
    if (activeStat === 0) {
      document.querySelector("#latest-bets")?.classList.add("active-stat");
    } else if (activeStat === 1) {
      document.querySelector("#my-bets")?.classList.add("active-stat");
    } else {
      document.querySelector("#top-wins")?.classList.add("active-stat");
    }
  }, [activeStat]);
  return (
    <div {...props}>
      <div className="bg">
        <button
          onClick={() => {
            setActiveStat(0);
          }}
          className="active-stat"
          id="latest-bets"
        >
          LATEST BETS
        </button>
        <button
          onClick={() => {
            setActiveStat(1);
          }}
          id="my-bets"
        >
          MY BETS
        </button>
        <button
          onClick={() => {
            setActiveStat(2);
          }}
          id="top-wins"
        >
          TOP WINS 24
        </button>
      </div>
    </div>
  );
})`
  font-family: Poppins;
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 30px;

  .active-stat {
    background-color: #f2a900;
  }

  .bg {
    background-color: #191b20;
    display: inline-flex;
    border-radius: 27px;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 15px;
    border-radius: 27px;
  }

  @media screen and (max-width: 428px) {
    font-size: 14px;
    margin-bottom: 15px;

    .bg {
      width: 100%;
      justify-content: space-between;
    }
  }
`;

const Statistics = styled(({ list = DEFAULT_STATS, ...props }) => {
  return (
    <div {...props}>
      <StatControl />
      <StatList list={list.statList} />
    </div>
  );
})``;

export default Statistics;
