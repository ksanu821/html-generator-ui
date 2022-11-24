import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
function MiniLoader(props){
    const {color,size}=props;
    return(
        <BeatLoader 
        color={color} 
        css={override} 
        size={size}
        />
    )
}

export default MiniLoader;