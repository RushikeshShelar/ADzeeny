import { cn } from "@/lib/utils";

const Button = ({
  label,
  variant,
  classname,
}: {
  label: string;
  variant?: string;
  classname?: string;
}) => {
  return (
    <button className={cn(`relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none`, classname)}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg ${variant !== 'default' ? 'bg-[rgb(4,7,29)]' : ''}  px-7 py-1 text-sm font-medium text-white backdrop-blur-xl`}>
        {label}
      </span>
    </button>
  );
}

export default Button;