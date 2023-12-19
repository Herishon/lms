const IconTime = ({ color, ...rest }) => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      <g 
        id="icon_time" 
        opacity="0.8">
        <circle 
          id="Vector" 
          cx="12" 
          cy="12" 
          r="9" 
          stroke={ color || "#24281D" } 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          id="Vector_2" 
          d="M11 8V13H16" 
          stroke={ color || "#24281D" } 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default IconTime;

