import NoImageAvailable from '../../NoImageAvailable.svg'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {SearchItems} from "./HeaderSyncSearchStyle";

import {selectByIdSyncSearch} from "../../Redux/SyncSearchSlice";

const HeaderSyncSearch = ({InputValue , ids}) => {

    const SyncSearchData = useSelector(state => selectByIdSyncSearch(state , ids))
    const {Poster , Title ,Type , Year , imdbID} = SyncSearchData

    const CleanSearchInput = () => InputValue.unsubscribe()

    return (
        <Link onClick={CleanSearchInput} to={`/details/${imdbID}`}>
            <SearchItems>
                <img src={Poster === 'N/A'  ? NoImageAvailable : Poster} alt={Title}/>
                <section>
                    <h4>{Title}</h4>
                    <p>{Year}</p>
                    <p>Type : {Type}</p>
                </section>
            </SearchItems>
        </Link>
    );
};

export default HeaderSyncSearch;