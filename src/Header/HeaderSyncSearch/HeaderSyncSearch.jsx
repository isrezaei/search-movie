import NoImageAvailable from '../../NoImageAvailable.svg'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {SearchItems , Info , Image} from "./HeaderSyncSearchStyle";

import {selectByIdSyncSearch} from "../../Redux/SyncSearchSlice";

const HeaderSyncSearch = ({InputValue , ids}) => {

    const SyncSearchData = useSelector(state => selectByIdSyncSearch(state , ids))
    const {Poster , Title ,Type , Year , imdbID} = SyncSearchData
    const CleanSearchInput = () => InputValue.unsubscribe()

    return (
        <Link onClick={CleanSearchInput} style={{textDecoration : 'none'}} to={`Details/${imdbID}`}>
            <SearchItems>
                <img src={Poster === 'N/A'  ? NoImageAvailable : Poster} alt={Title}/>
                <section>
                    <h4>{Title}</h4>
                    <div>{Year}</div>
                    <div>Type : {Type}</div>
                </section>
            </SearchItems>
        </Link>
    );
};

export default HeaderSyncSearch;