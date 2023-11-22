const IconCategory = ({ color, ...rest }) => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      <g 
        id="System / Category">
        <path 
          id="Vector" 
          d="M14 15C14 14.4477 14.4477 14 15 14H19C19.5523 14 20 14.4477 20 15V19C20 19.5523 19.5523 20 19 20H15C14.4477 20 14 19.5523 14 19V15Z" 
          stroke={ color || "#24281D" } 
          stroke-width="1.8" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
        <path 
          id="Vector_2" 
          d="M4 5C4 4.44772 4.44772 4 5 4H9C9.55228 4 10 4.44772 10 5V9C10 9.55228 9.55228 10 9 10H5C4.44772 10 4 9.55228 4 9V5Z" 
          stroke={ color || "#24281D" } 
          stroke-width="1.8" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
        <path 
          id="Vector_3" 
          d="M14 5C14 4.44772 14.4477 4 15 4H19C19.5523 4 20 4.44772 20 5V9C20 9.55228 19.5523 10 19 10H15C14.4477 10 14 9.55228 14 9V5Z" 
          stroke={ color || "#24281D" } 
          stroke-width="1.8" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
        <path 
          id="Vector_4" 
          d="M4 15C4 14.4477 4.44772 14 5 14H9C9.55228 14 10 14.4477 10 15V19C10 19.5523 9.55228 20 9 20H5C4.44772 20 4 19.5523 4 19V15Z" 
          stroke={ color || "#24281D" } 
          stroke-width="1.8" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
      </g>
    </svg>
  )
}

export default IconCategory;