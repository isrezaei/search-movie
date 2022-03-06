import {BiSearchAlt} from "react-icons/bi";
import SwitchControl from "./SwitchControl";
import {useDispatch , useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import { AsyncResultSearch} from "../Redux/SearchSlice";
import  {GetImdbMovieDataSync , CleanSyncSearch} from "../Redux/MovieSlice";
import {HeaderStyled , Logo , Input , SearchAndLogo , Search , SyncSearch , SearchInput} from "./HeaderStyled";
import HeaderSyncSearch from "./HeaderSyncSearch";
import {Link} from "react-router-dom";

export const Header = () => {

    const dispatch = useDispatch()
    const {register,watch , reset} = useForm();
    const InputValue = watch('InputValue')


    const DataSyncSearch = useSelector(state => state.MovieSlice.syncSearch)
    const SearchStatus = useSelector(state => state.MovieSlice.searchStatus)



    const onSubmit = () => {

        dispatch(AsyncResultSearch(InputValue))
        reset({InputValue : ''})
    }

    useEffect(()=>{
        watch(({InputValue}) => {

            if (InputValue.length)
            {
                dispatch(GetImdbMovieDataSync(InputValue))
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
        Render = DataSyncSearch.map(value => value && <HeaderSyncSearch InputValue={InputValue} key={value.imdbID} value={value}/>)
    }
    else if (SearchStatus === 'reject')
    {
        Render = <h3>Not Found Search</h3>
    }





    return (
        <HeaderStyled>

            <SearchAndLogo>

                <Link style={{textDecoration : 'none'}} to='/'><Logo>MOV</Logo></Link>

                <Search>

                    <SearchInput>
                        <BiSearchAlt onClick={()=> onSubmit()} style={{fontSize : '1vw' , color : 'lightseagreen' , cursor : 'pointer'}}/>
                        <Input {...register('InputValue')} placeholder='Search something here...' type='text'/>
                    </SearchInput>

                    <SyncSearch render={InputValue ? 'block' : 'none'}>
                        {Render}
                    </SyncSearch>

                </Search>

            </SearchAndLogo>

            <SwitchControl/>


        </HeaderStyled>
    );
};

export default Header;