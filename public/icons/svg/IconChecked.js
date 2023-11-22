const IconChecked = ({ color, ...rest }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="28" 
      height="29" 
      viewBox="0 0 28 29" 
      fill="none">
      <g 
        clip-path="url(#clip0_1149_5315)">
        <rect 
          x="3.20703" y="3.70837" 
          width="21.5833" 
          height="21.5833" 
          rx="10.7917" 
          fill={ color || "#9ACA3C" }
        />
        <path 
          d="M18.9596 9.54163L20.7096 11.2916L12.5546 19.4583L7.29297 14.2083L9.04297 12.4583L12.5546 15.9583L18.9596 9.54163Z" 
          fill="white"
        />
        <path 
          d="M14 2.5C7.376 2.5 2 7.876 2 14.5C2 21.124 7.376 26.5 14 26.5C20.624 26.5 26 21.124 26 14.5C26 7.876 20.624 2.5 14 2.5ZM14 24.1C8.696 24.1 4.4 19.804 4.4 14.5C4.4 9.196 8.696 4.9 14 4.9C19.304 4.9 23.6 9.196 23.6 14.5C23.6 19.804 19.304 24.1 14 24.1Z" 
          fill={ color || "#9ACA3C" }
        />
      </g>
      <defs>
        <clipPath 
          id="clip0_1149_5315">
          <rect 
            width="28" 
            height="28" 
            fill="white" 
            transform="translate(0 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default IconChecked;