import {BiSearchAlt} from "react-icons/bi";
import SwitchControl from "./SwitchControl";
import {useDispatch , useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import { AsyncResultSearch} from "../Redux/SearchSlice";
import  {GetImdbMovieDataSync} from "../Redux/MovieSlice";
import {HeaderStyled , Logo , Input , Search_Logo , Search , SyncSearch , SearchInput} from "./HeaderStyled";
import HeaderSyncSearch from "./HeaderSyncSearch";


export const Header = () => {

    const dispatch = useDispatch()

    const DataSyncSearch = useSelector(state => state.MovieSlice.syncSearch).map(value => <HeaderSyncSearch key={value.imdbID} value={value}/>)




    const { register, watch, formState: { errors }, handleSubmit } = useForm();




    useEffect(()=>{

        const subscription = watch(({InputValue}) => InputValue.length >=3 && dispatch(GetImdbMovieDataSync(InputValue)));
        return () => subscription.unsubscribe();

    } , [watch])


    const InputValue = watch('InputValue')
    const onSubmit = () => dispatch(AsyncResultSearch(InputValue))

    return (
        <HeaderStyled>

            {/*logo_search*/}
            <Search_Logo>

                <Logo>MOV</Logo>

                <Search>

                    <SearchInput>
                        <BiSearchAlt onClick={onSubmit} style={{fontSize : '1vw' , color : 'lightseagreen' , cursor : 'pointer'}}/>
                        <Input {...register('InputValue')} placeholder='Search something here...' type='text'/>
                    </SearchInput>

                    <SyncSearch render={InputValue ? 'block' : 'none'}>
                        {DataSyncSearch}
                    </SyncSearch>

                </Search>

            </Search_Logo>

                <SwitchControl/>


        </HeaderStyled>
    );
};

export default Header;