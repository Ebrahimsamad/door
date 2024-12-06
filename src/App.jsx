// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const phoneNumber = "+966594962551";
  const whatsappMessage =
    "مرحبًا! أود الاستفسار عن خدمات فك وتركيب الأبواب والنوافذ.";
  return (
    <>
      <div
        dir="rtl"
        className="min-h-screen bg-gray-900 text-white flex flex-col items-center"
      >
        {/* Header Section */}
        <div className="text-center p-8 bg-gradient-to-b from-gray-800 to-gray-900 w-full">
          <h1 className="text-4xl md:text-5xl font-bold">
            فك وتركيب ابواب ونوافذ وغرف
          </h1>
        </div>

        {/* Content Section */}
        <div className="bg-white text-gray-800 py-10 px-4 md:px-20 text-center w-full">
          <p className="text-lg md:text-xl font-semibold mb-4">
            متخصصون في فك وتركيب ابواب{" "}
            <span className="text-blue-600">WPC</span> ونوافذ
            <span className="text-blue-600"> WPVC</span>
          </p>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            فنحن على أعلى مستوى من الخبرة والمهارة، تواصل الآن!
          </p>

          <div className="my-6 text-sm md:text-base text-gray-700">
            <p>نقوم بفك (مع حق) ابواب النحت النبيلة</p>
            <p className="text-green-600 my-2">نتميز بسرعة التركيب</p>
            <p className="text-gray-600">نسعى لسرعة وقت</p>
            <p className="font-bold">داخل الرياض فقط</p>
          </div>

          {/* Buttons Section */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-6">
            {/* Call Button */}
            <a
              href={`tel:${phoneNumber}`}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded shadow-md text-center w-full md:w-auto"
            >
              اتصل الآن
            </a>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${phoneNumber.replace(
                "+",
                ""
              )}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded shadow-md text-center w-full md:w-auto"
            >
              واتساب
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
