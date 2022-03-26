import {FallingLines} from "react-loader-spinner";
import {HeaderSearchSpinner} from "./HeaderSyncSearchStyle";


const HeaderSyncSearchSpinner = () => {
    return (
        <HeaderSearchSpinner>
            <FallingLines width="80" color="#8bc34a" />
        </HeaderSearchSpinner>
    );
};

export default HeaderSyncSearchSpinner;