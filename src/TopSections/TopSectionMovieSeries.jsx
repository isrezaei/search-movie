import {useSelector} from "react-redux";
import {TextSearch ,TextSearchStyle , TypeSearch} from "./TopSectionMovieSeriesStyle";


const TopSectionMovieSeries = () => {

    const SearchValue = useSelector(state => state.ResultSearchSlice.searchValue)
    const ActiveCategory = useSelector(state => state.ResultSearchSlice.activeCategory)


    return (


  <TextSearchStyle>


      <TextSearch>
          {SearchValue}
      </TextSearch>


      <TypeSearch>

          <p>Your Search</p>
          <hr/>
          <div>{ActiveCategory}</div>

      </TypeSearch>


  </TextSearchStyle>


    );
};

export default TopSectionMovieSeries;