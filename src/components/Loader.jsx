// src/components/Loader.jsx
export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bgblack">
      <h1 className="text-4xl font-bold text-[#1B5795] animate-bounce mb-6">Husnain.Dev</h1>
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
