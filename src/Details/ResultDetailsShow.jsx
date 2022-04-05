import {
    DetailsParent,
    RightSideDetails,
    LeftSideDetails,
} from "./ResultDetailsStyle";

import ImdbLogo from '../ImdbLogo.png'



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

                <section className='DetailsTitle'> {Title} </section>

                <section className='DetailsInfo'>
                    <div className='Options'>{Released ? Released : 'N/A'}</div>
                    <div className='Options'>{Genre ? Genre : 'N/A'}</div>
                    <div className='Options'>{Runtime ? Runtime : 'N/A'}</div>
                    <div className='Options'>Is your favorite</div>
                </section>

                <section className='DetailsImdbRate'>
                    <img className='ImdbLogo' src={ImdbLogo} alt={'Imdb Logo'}/>
                    <div className='ImdbRate'> <b className='BoldRate'>{imdbRating}</b> /10 </div>
                </section>

                <section className='DetailsOverview'>
                    <div className='OverviewText'>Overview</div>
                    <div className='OverviewPlot'>{Plot}</div>
                </section>


            </LeftSideDetails>


        </DetailsParent>

    );
};

export default ResultDetailsShow;