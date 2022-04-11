import {
    DetailsParent,
    RightSideDetails,
    LeftSideDetails,
} from "./ResultDetailsStyle";
import { Rating } from 'react-simple-star-rating'
import {useSelector , useDispatch} from "react-redux";
import {AddFavorite ,RemoveFavorite, selectFavoriteById} from "../../Redux/FavoriteSlice";
import {AiOutlineVideoCamera} from 'react-icons/ai'
import {RiBallPenLine , RiShareForwardFill , RiHeartAddFill , RiHeartFill} from 'react-icons/ri'
import {BiWorld} from 'react-icons/bi'
import {FaTheaterMasks} from 'react-icons/fa'
import {IoLanguage , IoWarningOutline} from 'react-icons/io5'
import {CgDollar} from 'react-icons/cg'
import {toast} from "react-toastify";


const ResultDetailsShow = ({DetailsData}) => {

    const dispatch = useDispatch()
    const isDarkMood = useSelector(state => state.DarkMoodSlice.darkMood)

    const {Actors , Country , Metascore , BoxOffice , Director , Genre , Language , Plot , Poster , Rated , Ratings  , Released , Runtime , Title , Type , Writer , Year , imdbRating , imdbVotes , imdbID} = DetailsData
    const Favorite = useSelector(state => selectFavoriteById(state , imdbID))
    const RottenTomatoes = Ratings[1] ? Ratings[1].Value : 'N/A'

    const AddNotify = () => toast.success(`" ${Title} " Added to your favorites list`, {
        position: "top-center",
        autoClose: 1000,
    });

    const RemoveNotify = () => toast.error(`" ${Title} " Removed to your favorites list`, {
        position: "top-center",
        autoClose: 1000,
    });

    const ClipboardNotify = () => toast('The page url was copied', {
        position: "top-center",
        autoClose: 2000,
    });


    const AddFavoriteOnList = () =>
    {
        dispatch(AddFavorite({imdbID , Type , Year , Title , Poster , favorite : true }))
        AddNotify()
    }

    const DeleteFavoriteOnList = () =>
    {
        dispatch(RemoveFavorite({imdbID , Type , Year , Title , Poster , favorite : false}))
        RemoveNotify()
    }

    const ClipboardUrl = () =>
    {
        const CurrentUrl = window.location.href
        navigator.clipboard.writeText(CurrentUrl)
        ClipboardNotify()
    }

    return (
        <DetailsParent>


            <LeftSideDetails Favorite={Favorite}>

                <img className='DetailsPoster' src={Poster} alt={Title}/>
                <div className='DetailsFavorite'>{Favorite ? <RiHeartFill onClick={DeleteFavoriteOnList} className='Icon'/> : <RiHeartAddFill onClick={AddFavoriteOnList} className='Icon'/>}</div>

                <section className='DetailsRate'>
                    <div className='Imdb'>

                        <img className='ImdbLogo' src='https://user-images.githubusercontent.com/77073972/162730044-a6a49b8b-6e11-4147-aeee-ff2c4e00a145.png' alt={'Imdb Logo'}/>

                        <div className='RateAndVotes'>
                            <div className='ImdbRate'> <b className='BoldRate'>{imdbRating}</b> / 10</div>
                            <div className='ImdbVotes'> Votes : {imdbVotes}</div>
                        </div>
                    </div>

                    <div className='RottenTomatoes'>
                        <img className='RottenTomatoesLogo' src='https://user-images.githubusercontent.com/77073972/162730038-38c966d5-980e-4c59-8228-fe6c56e51b59.png' alt={'Imdb Logo'}/>
                        <div className='RottenTomatoesRate'> {RottenTomatoes} </div>
                    </div>

                    <div className='Metacritic'>
                        <img className='MetacriticLogo' src='https://user-images.githubusercontent.com/77073972/162730041-f88fe757-f35c-4d08-858d-014ee2359ad0.png' alt={'Imdb Logo'}/>
                        <div className='MetacriticRate'>{Metascore}%</div>
                    </div>

                    <div onClick={ClipboardUrl} className='ShareSection'>
                        <RiShareForwardFill className='ShareIcone'/>
                        <div className='ShareText'>Share This Page</div>
                    </div>
                    <div className='GetTickets'> Get Tickets </div>

                    <section className='StarRate'>
                        <p className='RateText'>Rate This</p>
                        <Rating
                                iconsCount={8}
                                size={20}
                                emptyClassName={'Stars'}
                                allowHover={true}
                                transition={true}
                                showTooltip={false}
                                ratingValue={false}
                                emptyColor={isDarkMood ? 'rgb(33,33,33)' : 'rgb(185,185,185)'}
                                tooltipArray={[ 'Awful' , 'bad', 'good' , 'very good' , 'Excellent']}
                        />
                    </section>
                </section>

            </LeftSideDetails>

            <RightSideDetails>

                <section className='DetailsTitle'> {Title} {Year}</section>

                <section className='DetailsInfo'>
                    <div className='Options'>{Released ? Released : 'N/A'}</div>
                    <div className='Options'>{Genre ? Genre : 'N/A'}</div>
                    <div className='Options'>{Runtime ? Runtime : 'N/A'}</div>
                    <div className='Options'>{Type}</div>
                </section>

                <section className='DetailsAdditionInfo'>
                    <div className='Options'>
                        <IoLanguage className='Icon'/>
                        <p className='Text'>{Language}</p>
                    </div>

                    <div className='Options'>
                        <CgDollar className='Icon'/>
                        <p className='Text'>{BoxOffice}</p>
                    </div>

                    <div className='Options'>
                        <IoWarningOutline className='Icon'/>
                        <p className='Text'>{Rated}</p>
                    </div>

                </section>

                <section className='DetailsOverview'>
                    <div className='OverviewText'>Overview</div>
                    <div className='OverviewPlot'>{Plot}</div>
                </section>

                <section className='DetailsActor'>

                    <div className='IconAndText'>
                        <FaTheaterMasks className='Icone'/>
                        <p className='Text'>Actors</p>
                    </div>
                    <div className='ActorName'> {Actors} </div>
                </section>

                <section className='DetailsCreator'>
                    <div className='Options'>
                        <div className='IconAndText'>
                            <AiOutlineVideoCamera className='Icone'/>
                            <p className='Text'>Director</p>
                        </div>
                        <div className='DirectorName'>{Director}</div>
                    </div>

                    <div className='Options'>
                        <div className='IconAndText'>
                            <RiBallPenLine className='Icone'/>
                            <p className='Text'>Writer</p>
                        </div>
                        <div className='DirectorName'>{Writer}</div>
                    </div>

                    <div className='Options'>
                        <div className='IconAndText'>
                            <BiWorld className='Icone'/>
                            <p className='Text'>Country</p>
                        </div>
                        <div className='DirectorName'>{Country}</div>
                    </div>
                </section>

            </RightSideDetails>
        </DetailsParent>

    );
};

export default ResultDetailsShow;