import {BiSearchAlt} from "react-icons/bi";
import {useDispatch , useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {Link} from "react-router-dom";
import {selectIdsSyncSearch} from "../../Redux/SyncSearchSlice";
import {fetchSyncSearch , CleanSyncSearch} from "../../Redux/SyncSearchSlice";
import {GetImdbMovieData} from "../../Redux/MovieSlice";
import {GetImdbSeriesData} from "../../Redux/SeriesSlice";
import {HeaderMasterStyle,LeftSide,Logo,Search,ReadyToSearch,RenderSearch,RightSide} from "./HeaderMasterStyle";
import HeaderSyncSearch from "../HeaderSyncSearch/HeaderSyncSearch";
import HeaderDMControl from "../HeaderDMControl/HeaderDMControl";




export const HeaderMaster = () => {

    const SyncSearchId = useSelector(selectIdsSyncSearch)
    const SearchStatus = useSelector(state => state.SyncSearch.status)


    const {register,watch , reset} = useForm();
    const dispatch = useDispatch()

    const InputValue = watch('InputValue')


    const onSubmit = () => {
        dispatch(GetImdbMovieData(InputValue))
        dispatch(GetImdbSeriesData(InputValue))
        reset({InputValue : ''})
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

                <Link style={{textDecoration : 'none'}} to='/'>
                    <Logo>MOV</Logo>
                </Link>

                <Search>

                    <ReadyToSearch>
                        <span onClick={onSubmit}><BiSearchAlt/></span>
                        <input {...register('InputValue')} placeholder='Search something here...' type='text'/>
                    </ReadyToSearch>

                    <RenderSearch render={InputValue ? 'block' : 'none'}>
                        {Render}
                    </RenderSearch>

                </Search>

            </LeftSide>

            <RightSide>
                <HeaderDMControl/>
            </RightSide>

        </HeaderMasterStyle>
    );
};

export default HeaderMaster;