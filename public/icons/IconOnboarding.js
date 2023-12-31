const IconOnboarding = ({ color, ...rest }) => {
    
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none">
            <path
                d="M3 21C3 18.7909 6.13401 17 10 17C13.866 17 17 18.7909 17 21"
                stroke={ color || "#24281D" }
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19 17L19 11"
                stroke={ color || "#24281D" } 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M16 14L22 14" 
                stroke={ color || "#24281D" } 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path
                d="M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13Z" 
                stroke={ color || "#24281D" } 
                strokeWidth="1.8" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    );  
};

export default IconOnboarding;