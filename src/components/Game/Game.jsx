import { Physics } from '@react-three/rapier';
import useGame from '../../store/useGame';
import Lights from '../Lights/Lights.jsx';
import { Level } from '../Level/Level.jsx';
import Player from '../Player/Player.jsx';

const Game = () => {
  const blocksCount = useGame((state) => state.blocksCount);
  const blocksSeed = useGame((state) => state.blocksSeed);

  return (
    <>
      <color args={['#bdedfc']} attach='background' />

      <Physics debug={false}>
        <Lights />
        <Level count={blocksCount} seed={blocksSeed} />
        <Player />
      </Physics>
    </>
  );
};
export default Game;
