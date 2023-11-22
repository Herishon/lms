const IconDesign = ({ color, ...rest }) => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      <g 
        id="icon_design">
        <path 
          id="Vector" 
          d="M14 17H13.998V17.002H14V17Z" 
          stroke={ color || "#24281D" } 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
        <path 
          id="Vector_2" 
          d="M9 15H8.998V15.002H9V15Z" 
          stroke={ color || "#24281D" } stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        />
        <path 
          id="Vector_3" 
          d="M13 12H12.998V12.002H13V12Z" 
          stroke={ color || "#24281D" } stroke-width="2" 
          stroke-linecap="round" stroke-linejoin="round"
        />
        <path 
          id="Vector_4" 
          d="M8 10H7.998V10.002H8V10Z" stroke={ color || "#24281D" } stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        />
        <path 
          id="Vector_5" 
          d="M21 7H20.998V7.002H21V7Z" 
          stroke={ color || "#24281D" } 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
        <path 
          id="Vector_6" 
          d="M16 3H15.998V3.002H16V3Z" 
          stroke={ color || "#24281D" } 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
        <path 
          id="Vector_7" 
          d="M20 3H19.998V3.002H20V3Z" 
          stroke={ color || "#24281D" } 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
        <path 
          id="Vector_8" 
          d="M12.0146 21C16.9749 20.9944 20.9946 16.9682 21 12C20.6462 12.1 20.2804 12.1512 19.9128 12.1521C18.6966 12.161 17.554 11.5696 16.8578 10.5708C16.2353 9.67039 16.1038 8.51782 16.5073 7.49998C16.2493 7.54607 15.9877 7.56956 15.7256 7.57018C14.5603 7.57888 13.4543 7.05628 12.72 6.14998C12.0014 5.27046 11.7204 4.11168 11.9562 3C6.99377 3.01615 2.98397 7.05867 3.00005 12.0292C3.01622 16.9997 7.05218 21.0161 12.0146 21Z" 
          stroke={ color || "#24281D" } 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
      </g>
    </svg>
  )
}

export default IconDesign;
