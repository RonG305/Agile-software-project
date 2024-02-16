import { Flowbite } from "flowbite-react";
import { Outlet } from "react-router-dom";
import theme from '../Theme';

function ThemeWrapper() {
    const dark = localStorage.getItem('theme' === 'dark')

    return (
        <Flowbite theme={{ dark, theme}}>
            <Outlet />
        </Flowbite>
    )
}

export default ThemeWrapper;