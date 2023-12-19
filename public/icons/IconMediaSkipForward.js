const IconMediaSkipForward = ({ width, height, color, ...rest }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg" 
            width={ width || "48" } 
            height={ height || "48" } 
            viewBox="0 0 48 48" 
            fill="none">
            <path 
                d="M38 10L38 38" 
                stroke={ color || "#9ACA3C" } 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
            <path 
                d="M28.0478 25.5617C29.0486 24.7611 29.0486 23.2389 28.0478 22.4382L13.2494 10.5995C11.9399 9.55187 10 10.4842 10 12.1612V35.8387C10 37.5157 11.9399 38.4481 13.2494 37.4005L28.0478 25.5617Z" 
                fill={ color || "#9ACA3C" }
                stroke={ color || "#9ACA3C" }
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    );  
};

export default IconMediaSkipForward;