import { useState } from 'react';

const Tooltip = ({ content, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    console.log(isVisible)

    return (
        <div
            className="TooltipContainer"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && (
                <div className="TooltipContent">
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;