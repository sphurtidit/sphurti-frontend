import HeroPage from "../HeroPage/HeroPage";
import Mobile_HeroPage from "../Mobile_HeroPage/Mobile_HeroPage";
import {useEffect, useState} from 'react';

function MyComponent() {
    const [isDesktopView, setIsDesktopView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
              setIsDesktopView(true);
            } else {
              setIsDesktopView(false);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="home" id="home-section">
            {isDesktopView ? <HeroPage /> : <Mobile_HeroPage />}
        </div>
    );
}

export default MyComponent;