const IconMonitor = ({ color, ...rest }) => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      <g 
        id="System / Monitor">
        <path 
          id="Vector" 
          d="M20 4H4C2.89543 4 2 4.89543 2 6V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V6C22 4.89543 21.1046 4 20 4Z" 
          stroke={ color || "#24281D" } 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
        <path 
          id="Vector_2" 
          d="M8 21H16" 
          stroke={ color || "#24281D" } 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
        <path 
          id="Vector_3" 
          d="M12 18V21" 
          stroke={ color || "#24281D" } 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
      </g>
    </svg>
  )
}

export default IconMonitor;


