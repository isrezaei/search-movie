import React from "react";
import {BiSearchAlt} from "react-icons/bi";
import {useDispatch , useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useNavigate } from "react-router-dom";
import {selectIdsSyncSearch} from "../../Redux/SyncSearchSlice";
import {fetchSyncSearch , CleanSyncSearch} from "../../Redux/SyncSearchSlice";
import {fetchResultSearch, ActiveIcone , SearchValue} from "../../Redux/ResultSearchSlice";
import {RenderSearch} from "../HeaderSyncSearch/HeaderSyncSearchStyle";
import {
    HeaderStyle,
    HeaderLogo,
    HeaderSearchSection,
    HeaderSearchElements,
    HeaderBtnSearch, HeaderInputSearch, HeaderSelectTypeShow,
} from "./HeaderStyle";
import HeaderSyncSearch from "../HeaderSyncSearch/HeaderSyncSearch";
import HeaderSyncSearchSpinner from "../HeaderSyncSearch/HeaderSyncSearchSpinner";
import HeaderSyncSearchNotFound from "../HeaderSyncSearch/HeaderSyncSearchNotFound";


export const Header = () => {

    const SyncSearchId = useSelector(selectIdsSyncSearch)
    const SearchStatus = useSelector(state => state.SyncSearch.status)
    const Navigate = useNavigate();


    const {register,watch,reset} = useForm({
        defaultValues : {
            TypeOfShow : 'movie'
        }
    });

    const dispatch = useDispatch()

    const InputValue = watch('InputValue')
    const TypeOfShow = watch('TypeOfShow')

    const onSubmit = () => {
        if (InputValue)
        {
            dispatch(fetchResultSearch(InputValue))
            dispatch(ActiveIcone(TypeOfShow))
            dispatch(SearchValue(InputValue))
            reset({InputValue : ''})
            Navigate(`/search/${TypeOfShow}`)
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
        Render = <HeaderSyncSearchSpinner/>
    }
    else if (SearchStatus === 'success')
    {
        Render = SyncSearchId.map(ids => ids && <HeaderSyncSearch InputValue={InputValue} key={ids} ids={ids}/>)
    }
    else if (SearchStatus === 'reject')
    {
        Render = <HeaderSyncSearchNotFound/>
    }

    return (
        <HeaderStyle>
            <HeaderLogo onClick={()=> Navigate('/')}>MOV.</HeaderLogo>
            <HeaderSearchSection>
                <HeaderSearchElements>
                    <HeaderBtnSearch onClick={onSubmit}><BiSearchAlt/></HeaderBtnSearch>
                    <HeaderInputSearch  onKeyPress={e => e.key === 'Enter' && onSubmit()} {...register('InputValue')} placeholder='Search something here...' type='text'/>
                    <HeaderSelectTypeShow {...register('TypeOfShow')}>
                        <option>movie</option>
                        <option>series</option>
                    </HeaderSelectTypeShow>
                </HeaderSearchElements>
                <RenderSearch render={InputValue ? 'block' : 'none'}>
                    {Render}
                </RenderSearch>
            </HeaderSearchSection>
        </HeaderStyle>
    );
};

export default React.memo(Header);