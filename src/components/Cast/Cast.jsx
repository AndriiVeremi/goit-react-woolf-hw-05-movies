import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCats } from 'api/theMoviedAPI';

const Cast = () => {
  const { movId } = useParams();
//   const [details, setDetails] = useState([]);

  useEffect(() => {

    const getCats = async () => {
      const data = await getMoviesCats(movId);
      console.log('result', data)
    //   setDetails(data.data);
    };

    getCats();
  }, [movId]);

  return <div>dfsfsd</div>
};



export default Cast;
