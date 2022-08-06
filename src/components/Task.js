import { FaTimes } from 'react-icons/fa';
import {Link} from 'react-router-dom'

const Task = ({ task, onDelete, onToggleReminder }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}>
            <h3 onDoubleClick={() => onToggleReminder(task.id)}>
                {task.text}{' '}
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
            <p><Link to={`/task/${task.id}`}>View Details</Link></p>
        </div>
    );
};

export default Task;
