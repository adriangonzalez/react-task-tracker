import { useState } from 'react';
import Header from './components/Header';
import { Tasks } from './components/Tasks';

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        },
    ]);

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Toggle Remidner
    const toggleReminder = (id) => {
        console.log('toggle reminder', id);
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task
            )
        );
    };

    return (
        <div className='container'>
            <Header></Header>
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggleReminder={toggleReminder}
                />
            ) : (
                'No Tasks To Show'
            )}
        </div>
    );
}

export default App;