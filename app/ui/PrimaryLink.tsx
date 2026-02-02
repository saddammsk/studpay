import Link from "next/link";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "default" | "primaryborder" | "success" | "bluebtn" | "disabled" | "cancel";

interface BaseButtonProps {
     children: React.ReactNode;
     variant?: ButtonVariant;
     className?: string;
      disabled?: boolean;
     onClick?: () => void;
}

interface ButtonProps extends BaseButtonProps {
     type?: "button" | "submit" | "reset";
     href?: never;
}

interface LinkProps extends BaseButtonProps {
     href: string;
     type?: never;
}

type AuthButtonProps = ButtonProps | LinkProps;

const PrimaryLink: React.FC<AuthButtonProps> = ({
     children,
     variant = "primary",
     className,
     type,
     href,
     disabled = false,
     onClick,
}) => {
     const baseClasses =
          "w-full py-2.5 px-4 flex items-center justify-center rounded-lg font-medium text-sm leading-5 transition-all duration-500 ease-in-out hover:shadow-3xl";

     const variants: Record<ButtonVariant, string> = {
          primary: "bg-blue-1000 cursor-pointer text-white hover:bg-blue-1000/[90%]",
          secondary:
               "bg-gray-1200 cursor-pointer text-blue-1100 hover:bg-blue-1000/[90%] hover:text-white",
          default:
               "bg-white cursor-pointer text-black-1000 hover:bg-blue-1000/[90%] hover:text-white",
          disabled:
               "bg-blue-1000 text-white cursor-not-allowed opacity-50 hover:shadow-none",
          primaryborder:
               "bg-blue-1300 cursor-pointer border border-blue-1000/[20%] text-blue-1100 hover:bg-blue-1000/[90%] hover:text-white",
          success:
               "bg-green-1700 cursor-pointer text-white hover:bg-blue-1000/[90%] hover:text-white",
          bluebtn:
               "bg-black-1300 cursor-pointer text-white hover:bg-blue-1000/[90%] hover:text-white",
          cancel:
               "bg-gray-1600 cursor-pointer text-black-1200 border border-gray-3300 hover:bg-gray-3300/50 hover:shadow-md",
     };

     const classes = clsx(baseClasses, variants[variant], className);

     if (href) {
          return (
               <Link href={href} className={classes}>
                    {children}
               </Link>
          );
     }

     // Render as button
     return (
            <button onClick={onClick} type={type || "button"} disabled={disabled} className={classes}>
               {children}
          </button>
     );
};

export default PrimaryLink;
