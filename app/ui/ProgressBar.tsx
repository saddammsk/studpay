import React from "react";

interface ProgressProps {
     width: string;
     bgColor?: string;
     height?: string;
     className?: string;
}

const ProgressBar: React.FC<ProgressProps> = ({
     width,
     bgColor = "bg-green-700",
     height = "h-1.5",
     className = "",
}) => {
     return (
          <div className={`bg-lightgray w-full block rounded-full ${height} ${className}`}>
               <div
                    className={`${bgColor} h-full block rounded-full`}
                    style={{ width }}
               />
          </div>
     );
};

export default ProgressBar;
