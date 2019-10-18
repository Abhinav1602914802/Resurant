import {useState, useEffect} from 'react';
import Zomato from '../api/Zomato';

export default() => {
    const [result, setResult] = useState( [] );
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        console.log('Hi there!');
        try{
            const response = await Zomato.get('/search');
            setResult(response.data.restaurants);
        }
        catch(err)
        {
            console.log(err);
            setErrorMessage('Something went to wrong');
        }
    }

    //call search api when call first time rendered :BAD CODE
    // searchApi('pasta');

    useEffect(() => {
        searchApi('pasta');
    },[]);

    return [searchApi, result, errorMessage];

}