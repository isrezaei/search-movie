import {
    DetailsParent,
    RightSideDetails,
    LeftSideDetails,
} from "./ResultDetailsStyle";

import ImdbLogo from '../ImdbLogo.png'

import {AiOutlineVideoCamera} from 'react-icons/ai'
import {RiBallPenLine , RiUserStarLine} from 'react-icons/ri'
import {BiWorld} from 'react-icons/bi'
import {FaTheaterMasks} from 'react-icons/fa'


const ResultDetailsShow = ({DetailsData}) => {


    const {Actors , Awards , Country , BoxOffice , Director , Genre , Language , Plot ,
        Poster , Rated  , Released , Runtime , Title , Type , Writer , Year , imdbRating , imdbVotes} = DetailsData


    console.log(DetailsData)


    return (
        <DetailsParent>


            <RightSideDetails>

                <img className='DetailsPoster' src={Poster} alt={Title}/>

            </RightSideDetails>

            <LeftSideDetails>

                <section className='DetailsTitle'> {Title} <p className='Year'>{Year}</p> </section>

                <section className='DetailsInfo'>
                    <div className='Options'>{Released ? Released : 'N/A'}</div>
                    <div className='Options'>{Genre ? Genre : 'N/A'}</div>
                    <div className='Options'>{Runtime ? Runtime : 'N/A'}</div>
                    <div className='Options'>Is your favorite</div>
                </section>

                <section className='DetailsImdbRate'>
                    <img className='ImdbLogo' src={ImdbLogo} alt={'Imdb Logo'}/>
                    <div className='ImdbRate'> <b className='BoldRate'>{imdbRating}</b> /10 </div>
                    <div>{imdbVotes}</div>
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


            </LeftSideDetails>


        </DetailsParent>

    );
};

export default ResultDetailsShow;