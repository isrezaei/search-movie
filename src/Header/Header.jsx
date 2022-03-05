import {BiSearchAlt} from "react-icons/bi";
import SwitchControl from "./SwitchControl";
import {useDispatch , useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import { AsyncResultSearch} from "../Redux/SearchSlice";
import  {GetImdbMovieDataSync} from "../Redux/MovieSlice";
import {HeaderStyled , Logo , Input , SearchAndLogo , Search , SyncSearch , SearchInput} from "./HeaderStyled";
import HeaderSyncSearch from "./HeaderSyncSearch";
import {Link} from "react-router-dom";


export const Header = () => {

    const dispatch = useDispatch()
    const {register,watch , reset} = useForm();
    const InputValue = watch('InputValue')


    const DataSyncSearch = useSelector(state => state.MovieSlice.syncSearch).map(value => <HeaderSyncSearch InputValue={InputValue} key={value.imdbID} value={value}/>)



    const onSubmit = () => {

        dispatch(AsyncResultSearch(InputValue))
        reset({InputValue : ''})
    }

    useEffect(()=>{

        const subscription = watch(({InputValue}) => InputValue.length >=3 && dispatch(GetImdbMovieDataSync(InputValue)));
        return () => subscription.unsubscribe();

    } , [watch])





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
                        {DataSyncSearch}
                    </SyncSearch>

                </Search>

            </SearchAndLogo>

            <SwitchControl/>


        </HeaderStyled>
    );
};

export default Header;