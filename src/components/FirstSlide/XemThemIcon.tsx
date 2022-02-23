import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "@mui/material";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const XemThem = styled("a")`
  svg {
    margin-left: 10px;
    display: none;
  }
  padding: 9px 27px;
  background-image: -webkit-linear-gradient(
    -45deg,
    #d1a32c 25%,
    #effac2 50%,
    #d1a32c 84%
  );
  transition: background 1s ease-out;
  &:hover {
    background-image: -webkit-linear-gradient(
      45deg,
      #d1a32c 25%,
      #effac2 50%,
      #d1a32c 84%
    );
    background-position: 100px;
    font-weight: bold;
    svg {
      display: inline-block;
    }
  }
  color: rgb(182, 28, 28);
  font-size: 14px;
  font-family: Montserrat;
  width: auto;
  align-self: flex-start;
  line-height: 19px;
  letter-spacing: 1px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 0.7em;
  display: inline-block;
  text-decoration: none;
`;

export default function XemThemIcon() {
  return (
    <XemThem href="/vi-tri">
      XEM THÊM
      <FontAwesomeIcon icon={faChevronRight} />
    </XemThem>
  );
}
