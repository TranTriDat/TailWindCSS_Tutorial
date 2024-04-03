import { ReactNode } from "react";

export interface JobProps {
  title: string;
  icon: ReactNode;
  bgClass: string;
}

export const Job: React.FC<JobProps> = ({ title, icon, bgClass:bgColor }) => {
  return (
    <div className={`${bgColor} text-[#281A51] border aspect-square p-4 flex flex-col justify-center items-center rounded-lg`}>
      {icon}
      <p className="pt-2 font-popi">{title}</p>
    </div>
  );
};
