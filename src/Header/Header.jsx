import './Header.scss'
import {BiSearchAlt} from "react-icons/bi";
import SwitchControl from "./SwitchControl";
import {useDispatch} from "react-redux";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {SyncResultSearch , AsyncResultSearch} from "../Redux/SearchSlice";


export const Header = () => {

    const dispatch = useDispatch()

    const { register, watch, formState: { errors }, handleSubmit } = useForm();



    useEffect(()=>{

        const subscription = watch((SearchItems) => dispatch(SyncResultSearch(SearchItems)));
        return () => subscription.unsubscribe();

    } , [watch])


    const SearchItems = watch('SearchItems')
    const onSubmit = () => dispatch(AsyncResultSearch(SearchItems))

    return (
        <div className='header'>

            {/*logo_search*/}
            <section className='logo_search'>
                <div className='logo'>MOV</div>
                <div className='search'>
                    <BiSearchAlt onClick={onSubmit} className='magnifier'/>
                    <input {...register('SearchItems')} placeholder='Search something here...' type='text'/>
                </div>
            </section>

            {/*dark-control*/}
            <section className='dark-control'>
                <SwitchControl/>
            </section>

        </div>
    );
};

export default Header;