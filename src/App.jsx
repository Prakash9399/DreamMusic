import Sidebar from './component/Sidebar';
import MiddleSide from './component/MiddleSide';
import Player from './component/Player';

function App() {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_50%_50%_at_100%_0%,rgba(255,0,0,0.5),rgba(255,255,255,0))]"></div>
      <div className="container flex flex-row h-screen">
        <div>
          <Sidebar />
        </div>
        <div className='w-[60%] px-4'>
          <MiddleSide />
        </div>
        <div className='flex flex-col justify-between w-[20%] mb-6'>
          <div className="flex-grow">
            {/* Additional Content can go here */}
          </div>
          <Player />
        </div>
      </div>
    </>
  );
}

export default App;
