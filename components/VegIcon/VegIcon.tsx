import clsx from "clsx";

interface IProps {
  isVeg: boolean;
}

const VegIcon = ({ isVeg }: IProps) => {
  return (
    <div
      className={clsx(
        "inline-flex items-center border-2  w-4 h-4 justify-center md:w-6 md:h-6 ",
        isVeg ? "border-green-700" : "border-red-700"
      )}
    >
      <div
        className={clsx(
          "w-2 h-2 md:w-3 md:h-3 rounded-full",
          isVeg ? "bg-green-700" : "bg-red-700"
        )}
      ></div>
    </div>
  );
};

export default VegIcon;
