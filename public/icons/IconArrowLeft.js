const IconArrowLeft = ({ color, width, ...rest }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width={ width || "40" } 
      height={ width || "40" } 
      viewBox="0 0 40 40" 
      fill="none"
      >
      <path 
        d="M23.3333 11.6667L15 20.0001L23.3333 28.3334" 
        stroke={ color || "white" } 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default IconArrowLeft;