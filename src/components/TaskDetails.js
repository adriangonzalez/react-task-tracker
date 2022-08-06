import { useState, useEffect } from 'react';
import {
    useParams,
    Navigate,
    useNavigate,
    useLocation,
} from 'react-router-dom';
import { Button } from './Button';

const TaskDetails = () => {
    const [loading, setLoading] = useState(true);
    const [task, setTask] = useState({});
    // const [error, setError] = useState(null);
    const { pathname } = useLocation();
    const apiUrl = 'https://my-json-server.typicode.com/adriangonzalez/ApiData';

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTask = async () => {
            console.log(`Fetch Task ${params.id}`);
            const res = await fetch(`${apiUrl}/tasks/${params.id}`);
            const data = await res.json();

            if (res.status === 404) {
                navigate('/');
            }

            setTask(data);
            setLoading(false);
        };

        fetchTask();
    }, []);

    // if (error) {
    //     return <Navigate to="/" />;
    // }
    return loading ? (
        <h3>Loading...</h3>
    ) : (
        <div>
            <p>{pathname}</p>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
            <Button
                onClick={() => {
                    navigate(-1);
                }}
                text="Go Back"
            />
        </div>
    );
};

export default TaskDetails;
