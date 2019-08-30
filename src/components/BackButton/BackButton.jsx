/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import iconBack from "../../assets/iconBack.svg";

const BackButton = () => {
  return (
    <a
      className="mt-3 mb-2"
      href="/"
      css={css`
        color: #1a2225;
        display: inline-block;
        font-size: 14px;
        &:hover {
          color: #1a2225;
          text-decoration: none;
        }
      `}
    >
      <img src={iconBack} alt="Back icon" aria-hidden="true" />
      <span
        css={css`
          border-bottom: 1px solid #c5cfd4;
          margin-left: 0.5rem;

          &:hover {
            border-bottom: 0;
          }
        `}
      >
        Go back
      </span>
    </a>
  );
};

export default BackButton;
