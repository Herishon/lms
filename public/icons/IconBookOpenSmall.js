const IconBookOpenSmall = ({ color, ...rest }) => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      <g 
        id="System / Book_Open" 
        opacity="0.8">
        <rect 
          width="24" 
          height="24" 
          fill="white"
        />
        <path 
          id="Vector" 
          d="M4 6H8.8C9.64869 6 10.4626 6.32778 11.0627 6.91122C11.6629 7.49467 12 8.28599 12 9.11111V20C12 19.3812 11.7471 18.7877 11.2971 18.3501C10.847 17.9125 10.2365 17.6667 9.6 17.6667H4V6Z" 
          stroke={ color || "#24281D" } 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          id="Vector_2" 
          d="M20 6H15.2C14.3513 6 13.5374 6.32778 12.9373 6.91122C12.3371 7.49467 12 8.28599 12 9.11111V20C12 19.3812 12.2529 18.7877 12.7029 18.3501C13.153 17.9125 13.7635 17.6667 14.4 17.6667H20V6Z" 
          stroke={ color || "#24281D" } 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default IconBookOpenSmall;





