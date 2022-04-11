import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import {useSelector} from "react-redux";

const PreLoadedDetails = () => {

    const isDarkMood = useSelector(state => state.DarkMoodSlice.darkMood)

    const override = css`
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50% , -50%);
    `;

    return (
        <div className="HashLoader">
            <HashLoader color={isDarkMood ? '#20e28c' : '#eb8307'} loading={true} css={override} size={150} />
        </div>
    );
};

export default PreLoadedDetails;