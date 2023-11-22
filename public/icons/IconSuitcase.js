const IconSuitcase = ({ color, ...rest }) => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      <g 
        id="System / Suitcase">
        <path 
          id="Vector" 
          d="M20 8H4C3.44772 8 3 8.44772 3 9V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V9C21 8.44772 20.5523 8 20 8Z" 
          stroke={ color || "#24281D" } 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
        <path 
          id="Vector_2" 
          d="M8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8" 
          stroke={ color || "#24281D" } 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
      </g>
    </svg>
  )
}

export default IconSuitcase;
