import React, { useId } from "react";
import styled from "styled-components";

const WinnersList = styled(({ list, ...props }) => {
  const id = useId();
  return (
    <div {...props}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>player</th>
            <th>wagered</th>
            <th>prize</th>
          </tr>
        </thead>
        <tbody>
          {list.map((player: any, index: number) => (
            <tr key={`${id}-${index}`}>
              <td className="position">{index + 1}th</td>
              <td>
                <img src={player.avatar} alt="avatar" />
              </td>
              <td className="username">{player.userName}</td>
              <td className="wagered">
                <img src="images/icons/btc.png" alt="btc icon" />
                {player.wagered}
              </td>
              <td className="prize">
                <img src="images/icons/btc.png" alt="btc icon" />
                {player.prize}
                <span className="percentage"> ({player.percentage})</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        onClick={() => {
          console.log("load logic");
        }}
        className="load-all-winners"
      >
        Load all the winners
      </div>
    </div>
  );
})`
  background-color: #191b20;
  text-align: center;
  font-family: Poppins;

  table {
    width: 100%;
  }

  th {
    font-family: Poppins;
    font-size: 14px;
    line-height: 40px;
    font-weight: 400;
    color: #565b6b;
  }

  .position {
    font-family: Poppins;
    font-size: 14px;
    line-height: 40px;
    font-weight: 400;
    color: #565b6b;
  }

  .username {
    font-family: Poppins;
    font-size: 20px;
    line-height: 40px;
    font-weight: 400;
    color: #ffffff;
  }

  .wagered {
    font-size: 14px;
    color: #30bd73;
  }

  .prize {
    font-size: 14px;
    color: #30bd73;
  }

  .percentage {
    font-size: 14px;
    color: #ffffff;
  }

  .load-all-winners {
    background-color: #18191e;
    width: 100%;
    text-transform: uppercase;
    padding: 32px 0;

    color: #565b6b;
    font-size: 20px;

    cursor: pointer;
  }

  @media screen and (max-width: 428px) {
    padding: 0 12px;

    .position {
      font-size: 10px;
    }

    img {
      width: 16px;
      height: 18px;
    }

    .username {
      font-size: 12px;
    }

    .wagered img {
      width: 11px;
      height: 10px;
    }

    .wagered {
      font-size: 12px;
    }

    .prize {
      font-size: 12px;
    }

    .percentage {
      font-size: 12px;
    }
  }
`;

export default WinnersList;
