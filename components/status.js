export default function Status() {
  const isOnline = true;

  return (
      <div className="inline-block">
        <div className="blur-[1.5px] inline-block">
          <div
            className={`w-2.5 h-2.5  rounded-full ${
              isOnline ? "bg-green-300 animate-pulse" : "bg-gray-300"
            }`}
          >
          </div>
        </div>
        <div className="inline-block ml-1 text-gray-400">
          <p className="text-sm">online, 1:33pm</p>
        </div>
      </div>
  );
}
