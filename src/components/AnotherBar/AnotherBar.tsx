"use client";

type AnotherBarProps = {
  onPrev: () => void;
  onNext: () => void;
};

export default function AnotherBar({ onPrev, onNext }: AnotherBarProps) {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-2 text-sm text-gray-600 mt-10 gap-2 sm:gap-0">

      {/* Left Links */}
      <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start">
        <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Facebook</a>
        <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">Twitter</a>
      </div>

      {/* Right Buttons */}
      <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-end mt-2 sm:mt-0">
        <button onClick={onPrev} className="text-black">&lt; Prev</button>
        <button onClick={onNext} className="text-black">Next &gt;</button>
      </div>
    </div>
  );
}
