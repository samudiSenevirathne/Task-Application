"use client";

type AnotherBarProps = {
  onPrev: () => void;
  onNext: () => void;
};

export default function AnotherBar({ onPrev, onNext }: AnotherBarProps) {
  return (
    <div className="w-full flex items-center justify-between px-6 py-2 text-sm text-gray-600 mt-10">
      {/* Left Links */}
      <div className="flex gap-6">
        <a href="#" className="text-gray-500">Facebook</a>
        <a href="#" className="text-gray-500">Twitter</a>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-6">
        <button onClick={onPrev} className="text-black">&lt; Prev</button>
        <button onClick={onNext} className="text-black">Next &gt;</button>
      </div>
    </div>
  );
}
