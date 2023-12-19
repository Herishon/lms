const IconFolder = ({ color, ...rest }) => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg">
      <g 
        id="File / Folder_Simple_Profile" 
        opacity="0.8">
        <path 
          id="Vector" 
          d="M21 18.2222C21 18.6937 20.8104 19.1459 20.4728 19.4793C20.1352 19.8127 19.6774 20 19.2 20H4.8C4.32261 20 3.86477 19.8127 3.52721 19.4793C3.18964 19.1459 3 18.6937 3 18.2222V5.77778C3 5.30628 3.18964 4.8541 3.52721 4.5207C3.86477 4.1873 4.32261 4 4.8 4H9.3L11.1 6.66667H19.2C19.6774 6.66667 20.1352 6.85397 20.4728 7.18737C20.8104 7.52076 21 7.97295 21 8.44444V18.2222Z" 
          stroke={ color || "#24281D" } 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          id="Vector_2" 
          d="M16.2562 13L14 14.5793L14 11.4207L16.2562 13Z" 
          stroke={ color || "#24281D" } 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path id="Vector_3" 
          d="M7 11H9" stroke={ color || "#24281D" } 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          id="Vector_4" 
          d="M7 15H9" 
          stroke={ color || "#24281D" } 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default IconFolder;
