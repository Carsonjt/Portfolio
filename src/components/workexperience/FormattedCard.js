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
    <>
      <div
        className="bg-white border border-2 p-3 rounded border-blue-400 min-h-[500px] flex flex-col justify-between"
        onClick={flipCard}
      >
        <div className="flex justify-between items-center h-10">
          <div className="flex items-center">
            <Image
              src={logo} // Path to your image
              alt={company + " Logo"}
              width={50} // Desired width of the image
              height={50} // Desired height of the image
              className="mr-2"
            />
            <p>{company}</p>
          </div>
          <p>{time}</p>
        </div>

        <div className="flex-grow">
          <div className="mx-5">
            <p className="text-xl my-4">{title}</p>
            {children}
          </div>
        </div>

        {isFront && (
          <div className="mx-5 bg-indigo-100 border border-gray-300 rounded p-3 w-full text-center mx-auto">
            <p> 🌐 Click for more information!</p>
          </div>
        )}

        {!isFront && (
          <div className="mx-5 bg-indigo-100 border border-gray-300 rounded p-3 w-72 text-center mx-auto">
            <p> ⬅ Click again to go back</p>
          </div>
        )}
      </div>
    </>
  );
}
