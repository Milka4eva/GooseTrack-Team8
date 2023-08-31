import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';


const TestSharedLayoutPage = () => {
    return <div>
        <p>Hello from test sharedLayout page</p>
        <Suspense>
            <Outlet />
        </Suspense>
    </div>
};

export default TestSharedLayoutPage;