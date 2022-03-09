import {BiSearchAlt} from "react-icons/bi";
import {useDispatch , useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {Link , useNavigate } from "react-router-dom";
import {selectIdsSyncSearch} from "../../Redux/SyncSearchSlice";
import {fetchSyncSearch , CleanSyncSearch} from "../../Redux/SyncSearchSlice";
import {fetchResultSearch} from "../../Redux/ResultSearchSlice";
import {GetImdbMovieData} from "../../Redux/MovieSlice";
import {GetImdbSeriesData} from "../../Redux/SeriesSlice";
import {HeaderMasterStyle,LeftSide,Logo,Search,ReadyToSearch,RenderSearch} from "./HeaderMasterStyle";
import HeaderSyncSearch from "../HeaderSyncSearch/HeaderSyncSearch";





export const HeaderMaster = () => {

    const SyncSearchId = useSelector(selectIdsSyncSearch)
    const SearchStatus = useSelector(state => state.SyncSearch.status)
    const Navigate = useNavigate();


    const {register,watch , reset} = useForm();
    const dispatch = useDispatch()

    const InputValue = watch('InputValue')


    const onSubmit = () => {
        if (InputValue)
        {
            dispatch(fetchResultSearch(InputValue))
            dispatch(GetImdbSeriesData(InputValue))
            reset({InputValue : ''})
            Navigate('/search/movie')
        }
    }

    useEffect(()=>{

        watch(({InputValue}) => {

            if (InputValue.length)
            {
                dispatch(fetchSyncSearch(InputValue))
            }
            else if (!InputValue.length)
            {
                dispatch(CleanSyncSearch())
            }
        }) ;

    },[watch , dispatch])


    let Render ;

    if (SearchStatus === 'pending')
    {
        Render = <h3>Loading ... </h3>
    }
    else if (SearchStatus === 'success')
    {
        Render = SyncSearchId.map(ids => ids && <HeaderSyncSearch InputValue={InputValue} key={ids} ids={ids}/>)
    }
    else if (SearchStatus === 'reject')
    {
        Render = <h3>Not Found Search</h3>
    }





    return (
        <HeaderMasterStyle>

            <LeftSide>

                <Logo onClick={()=> Navigate('/')}>MOV</Logo>

                <Search>

                    <ReadyToSearch>
                        <span onClick={onSubmit}><BiSearchAlt/></span>
                        <input  onKeyPress={e => e.key === 'Enter' && onSubmit()} {...register('InputValue')} placeholder='Search something here...' type='text'/>
                    </ReadyToSearch>

                    <RenderSearch render={InputValue ? 'block' : 'none'}>
                        {Render}
                    </RenderSearch>

                </Search>

            </LeftSide>



        </HeaderMasterStyle>
    );
};

export default HeaderMaster;