import Image from "next/image";

export default function FormattedCard({
  logo,
  company,
  time,
  isFront,
  flipCard,
  title,
  children,
}) {
  return (
    <div
      className="relative bg-white border border-blue-500 shadow-lg p-6 rounded-lg hover:shadow-xl min-h-[500px] flex flex-col justify-between transition-shadow duration-300 cursor-pointer"
      onClick={flipCard}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={logo}
            alt={company + " Logo"}
            width={50}
            height={50}
            className="mr-3 rounded-full"
          />
          <p className="text-lg font-bold text-gray-800">{company}</p>
        </div>
        <p className="text-sm text-gray-600">{time}</p>
      </div>

      <div className="flex-grow mt-4">
        <p className="text-xl font-semibold text-gray-900">
          {isFront && title}
        </p>
        <div className="mt-3 text-gray-700">{children}</div>
      </div>

      {isFront ? (
        <div className="mt-6 bg-blue-100 border-t border-blue-300 py-2 text-center">
          <p>🌐 Click for more technical details</p>
        </div>
      ) : (
        <div className="mt-6 bg-blue-100 border-t border-blue-300 py-2 text-center">
          <p>⬅ Click again to go back</p>
        </div>
      )}
    </div>
  );
}
