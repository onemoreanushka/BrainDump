import Grass from '../components/Grass';
import Intro from '../components/Intro';

function Home(){
    return(
        <>
            <div className='relative'>
                <Intro></Intro>
            </div>
            <div className='absolute bottom-0 w-full'>
                <Grass></Grass>
            </div>
        </>
    )
}

export default Home;