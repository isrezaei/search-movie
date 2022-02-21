import {Link} from "react-router-dom";
import './Choice.scss'

const Choice = () => {
    return (
        <div className='parent'>

            <div className='select_type'>

                <div className='result'>
                    <h1>Search your movies or series</h1>
                </div>

                <div className='chose'>
                    <Link to='/' style={{textDecoration : 'none'}}><p>Movie</p></Link>

                    <Link to='/series' style={{textDecoration : 'none'}}><p>Series</p></Link>
                </div>

            </div>
        </div>
    );
};

export default Choice;