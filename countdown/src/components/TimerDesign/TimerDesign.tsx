import { useEffect, useState } from "react";

interface Props {
    value: number;
    label: string;
}

const TimerDesign = ({ value, label }: Props) => {
    const [num, setNum] = useState(value);

    useEffect(() => {
        setNum(value);
    }, [value]);

    const pad = (n: number) => (n < 10 ? `0${n}` : n.toString());

    return (
        <div className="flex flex-col items-center">
            <div className="relative flex items-center justify-center bg-[#343650] text-[#FB5E84] rounded-lg shadow-[0_10px_#191A23] w-[70px] h-[66px] sm:w-[148px] sm:h-[140px] text-[36px] sm:text-[80px] font-bold overflow-hidden">
                <span className="
                    absolute inset-x-0 top-0
                    h-[33px] sm:h-[70px]
                    bg-black/25
                    rounded-t-lg
                " />
                <span className="
                    absolute
                    bg-[#191A23] rounded-2xl
                    w-1.5 h-1.5 sm:w-3 sm:h-3
                    left-[68px] sm:-left-1.5
                " />
                 <div className="absolute w-[148px] h-[1px] bg-black z-1 opacity-[0.25]"></div>
                <span className="
                    absolute
                    bg-[#191A23] rounded-2xl
                    w-1.5 h-1.5 sm:w-3 sm:h-3
                    right-[68px] sm:-right-1.5
                " />
                <span className="relative bottom-[3px] sm:bottom-2">
                    {pad(num)}
                </span>
            </div>
            <p className="
                mt-4 text-[#8385A9]
                text-[7px] sm:text-[14px]
                tracking-[5.92px] font-bold
            ">
                {label}
            </p>
        </div>
    );
};

export default TimerDesign;
