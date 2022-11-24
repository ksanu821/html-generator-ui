import FadeLoader from 'react-spinners/FadeLoader'
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function PageLoader(props){
    const {color,size}=props;
    return(
        <FadeLoader
            color={color}
            size={size}
            css={override}
        />
    )
}

export default PageLoader;
