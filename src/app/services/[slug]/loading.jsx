export default function Loading() {
  return (
    <div className="min-h-screen bg-[#E3F2FD] flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center">
        <div className="h-12 w-3/4 bg-gray-200 rounded-lg mb-6"></div>
        <div className="h-8 w-1/2 bg-gray-200 rounded-lg mb-8"></div>
        <div className="space-y-4 w-full max-w-4xl">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
