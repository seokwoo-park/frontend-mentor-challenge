import React, { useState } from "react";
import { StyledButton } from "../Reusable/Button.styled";
import { StyledShortenbar } from "./Shortenbar.styled";

import { getShortURL } from "../../api/getShortURL";

const Shortenbar = ({ setShortLink }) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeHandle = (e) => {
    setInputValue(() => e.target.value);
  };

  const onClickHandle = (e) => {
    if (inputValue.length === 0) {
      alert("Please type the Link");
    } else {
      getShortURL(inputValue)
        .then(
          ({
            data: {
              result: { original_link, full_short_link },
            },
          }) =>
            setShortLink((prev) => [
              ...prev,
              { original_link, full_short_link },
            ])
        )

        .catch((Error) => {
          alert("Invalid Link " + Error);
        });

      setInputValue("");
    }
  };

  return (
    <>
      <StyledShortenbar>
        <label>Please add a link</label>
        <input
          onChange={onChangeHandle}
          value={inputValue}
          type={"url"}
          placeholder="Shorten a link here..."
        />
        <StyledButton
          onClick={onClickHandle}
          radius={"10px"}
          padding={"0.9rem"}
          width={"10em"}
        >
          Shorten It!
        </StyledButton>
      </StyledShortenbar>
    </>
  );
};

export default Shortenbar;
