import React from "react";
import { StyledContent } from "./Content.styled";

const Content = ({
  searchData: { ip, isp, country, region, city, timezone },
}) => {
  const location = city + region + country && `${city}, ${region}, ${country}`;

  return (
    <StyledContent>
      <div>
        <p>IP ADDRESS</p>
        <h2>{ip || "-"}</h2>
      </div>
      <div>
        <p>LOCATION</p>
        <h2>{location || "-"}</h2>
      </div>
      <div>
        <p>TIMEZONE</p>
        <h2>{timezone || "-"}</h2>
      </div>
      <div>
        <p>ISP</p>
        <h2>{isp || "-"}</h2>
      </div>
    </StyledContent>
  );
};

export default Content;
