import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Importing components
import Header from './features/curriculum/Header';
import Loader from './features/curriculum/Loader';
import TabPanel from './features/curriculum/TabPanel';

// Importing Redux actions and selectors
import { loadCurriculum, map_view } from './features/curriculum/curriculumSlice';

// Importing styles
import './css/files.css';
import './css/files_mobile.css';
import './css/reset.css';
import './css/reset_m.css';

function App() {
    // Initializing dispatch and selector hooks
    const dispatch = useDispatch(); // Hook to dispatch actions to the Redux store
    const view = useSelector(map_view); // Hook to select the current view state from the Redux store

    // useEffect to load curriculum data on component mount
    useEffect(() => {
        // Dispatch the action to load curriculum data when the component is mounted
        dispatch(loadCurriculum());
    }, [dispatch]); // Dependency array ensures this effect runs only once when the component is mounted

    return (
        // App container with dynamic class based on the current view state
        <div className={`App ${view}`} role="main">
            {/* Loader component to show a loading state */}
            <Loader />
            
            {/* Header component to display the app header */}
            <Header />
            
            {/* Horizontal rule for visual separation */}
            <hr className="headerLongerLine" />
            
            {/* TabPanel component for displaying tabbed content */}
            <TabPanel />
        </div>
    );
}

export default App;
