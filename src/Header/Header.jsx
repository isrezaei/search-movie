import './Header.scss'

const Header = () => {
    return (
        <div className='header'>

            <section className='section1'>
                <div className='logo'>MOV</div>
                <div className='search'>
                    <input type='text'/>
                </div>
            </section>

            <section className='section2'>
                <div> Hello users</div>
            </section>

        </div>
    );
};

export default Header;