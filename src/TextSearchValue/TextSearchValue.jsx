import {useSelector} from "react-redux";
import {TextSearch ,TextSearchStyle , TypeSearch} from "./TextSearchValueStyle";


const TextSearchValue = () => {

    const SearchValue = useSelector(state => state.ResultSearchSlice.searchValue)


    return (


  <TextSearchStyle>


      <TextSearch>
          {SearchValue}
      </TextSearch>


      <TypeSearch>

          <p>Your Search</p>
          <hr/>
          <div>Type of</div>

      </TypeSearch>


  </TextSearchStyle>


    );
};

export default TextSearchValue;