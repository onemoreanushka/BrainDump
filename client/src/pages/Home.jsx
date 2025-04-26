import Grass from '../components/Grass';
import Intro from '../components/Intro';
import Stars from '../components/Stars';

function Home(){
    return(
        <>
            <div className='home'>
                <div className='absolute top-0 left-0 w-full h-full'>
                    <Stars></Stars>
                </div>
                <div className='relative z-10'>
                    <Intro></Intro>
                </div>
                <div className='absolute bottom-0 w-full'>
                    <Grass></Grass>
                </div>
            </div>
        </>
    )
}

export default Home;