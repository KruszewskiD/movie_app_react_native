import Heading from './Heading';
import {Text} from 'react-native';

const MovieDescription = ({overview}) => {
  return (
    <>
      <Heading style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
        Description:
      </Heading>
      <Text style={{color: 'white', letterSpacing: 1, fontSize: 20}}>
        {overview}
      </Text>
    </>
  );
};

export default MovieDescription;
