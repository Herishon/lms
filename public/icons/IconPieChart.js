const IconPieChart = ({ color, ...rest }) => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      <g 
        id="Maths / Pie_Chart">
        <path 
          id="Vector" 
          d="M20 15.5845C19.437 16.919 18.5565 18.0949 17.4353 19.0095C16.3142 19.9241 14.9866 20.5495 13.5687 20.831C12.1507 21.1125 10.6855 21.0415 9.30124 20.6243C7.91695 20.2071 6.6557 19.4564 5.62775 18.4377C4.5998 17.419 3.83646 16.1635 3.40445 14.7808C2.97244 13.3981 2.88493 11.9304 3.14956 10.506C3.41418 9.08153 4.0229 7.74377 4.92248 6.60963C5.82206 5.47549 6.98512 4.5795 8.30998 4" 
          stroke={ color || "#24281D" } 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
        <path 
          id="Vector_2" 
          d="M21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3V12H21Z" 
          stroke={ color || "#24281D" } 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
      </g>
    </svg>
  )
}

export default IconPieChart;







