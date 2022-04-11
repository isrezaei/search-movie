import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {SearchItems} from "./HeaderSyncSearchStyle";

import {selectByIdSyncSearch} from "../../Redux/SyncSearchSlice";

const HeaderSyncSearch = ({reset , ids}) => {

    const SyncSearchData = useSelector(state => selectByIdSyncSearch(state , ids))
    const {Poster , Title ,Type , Year , imdbID} = SyncSearchData

    const CleanSearchInput = () => {
        reset({InputValue : ''})
    }

    return (
        <Link onClick={CleanSearchInput} to={`/details/${imdbID}`}>
            <SearchItems>
                <img src={Poster === 'N/A'  ?'https://user-images.githubusercontent.com/77073972/162730581-cb29a828-6101-4fa0-bd2e-c57c7d7ed811.svg' : Poster} alt={Title}/>
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