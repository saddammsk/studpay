import React from "react";

interface CircularProgressProps {
     value: number; // 28
     max: number;   // 100
     size?: number; // px
     strokeWidth?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
     value,
     max,
     size = 120,
     strokeWidth = 10,
}) => {
     const radius = (size - strokeWidth) / 2;
     const circumference = 2 * Math.PI * radius;

     const progress = Math.min(value / max, 1);
     const offset = circumference - progress * circumference;

     return (
          <div
               style={{ width: size, height: size }}
               className="relative flex items-center justify-center"
          >
               <svg width={size} height={size}>
                    {/* Background circle */}
                    <circle
                         cx={size / 2}
                         cy={size / 2}
                         r={radius}
                         stroke="#e5e7eb"
                         strokeWidth={strokeWidth}
                         fill="none"
                    />

                    {/* Progress circle */}
                    <circle
                         cx={size / 2}
                         cy={size / 2}
                         r={radius}
                         stroke="#16a34a"
                         strokeWidth={strokeWidth}
                         fill="none"
                         strokeDasharray={circumference}
                         strokeDashoffset={offset}
                         strokeLinecap="round"
                         transform={`rotate(-90 ${size / 2} ${size / 2})`}
                    />
               </svg>

               {/* Center text */}
               <div className="absolute text-center">
                    <div className="text-3xl font-bold text-green-600">{value}</div>
                    <div className="text-sm text-gray-400">/ {max}</div>
               </div>
          </div>
     );
};

export default CircularProgress;
