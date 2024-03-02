import { useParams } from "react-router-dom";


const MoviesPageDetails = () => {

const {movId} = useParams()



console.log('movId',movId)
    
    return <h3>MoviesPageDetails</h3>
}

export default MoviesPageDetails;