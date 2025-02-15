import React, { useState } from "react";

const ImageUploadPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [fetchedImages, setFetchedImages] = useState([]);
  const [generateStatus, setGenerateStatus] = useState("idle"); // idle, loading, success, error

  const handleGenerate = async () => {
    try {
      setGenerateStatus("loading");
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setGenerateStatus("success");
      // Reset success message after 5 seconds
      setTimeout(() => setGenerateStatus("idle"), 5000);
    } catch (error) {
      setGenerateStatus("error");
      // Reset error message after 5 seconds
      setTimeout(() => setGenerateStatus("idle"), 5000);
    }
  };

  const handleUpload = () => {
    console.log("Upload clicked");
  };

  const getGenerateButtonText = () => {
    switch (generateStatus) {
      case "loading":
        return "Cooking up something epic…";
      case "success":
        return "🔥 Done! Your panel is ready. Share it before it goes viral!";
      case "error":
        return "Glitch in the matrix! Try again";
      default:
        return "Generate Comic";
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* logo */}
      <div className="absolute top-4 left-4">
        <img src="./blix-logo.png" alt="Logo" className="h-16 w-auto" />
      </div>

      {/* BG-Img */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8) ), url("./bg-img.jpeg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.9,
          }}
        />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* HEADINGS */}
        <h1 className="text-7xl font-bold mb-8 text-white drop-shadow-lg">
          StripIt
        </h1>
        <h1 className="text-3xl font-bold mb-15 text-white drop-shadow-lg">
          Your character, your story in minutes
        </h1>

        {/* Child Container */}
        <div className="flex w-[100%] gap-20 ">
          {/* CARD SECTION */}
          <div className="w-[30%] min-w-xl p-8 space-y-6 text-white self-start ml-8">
            <div className="space-y-2">
              <label
                htmlFor="story-input"
                className="block text-3xl font-semibold"
              >
                Your story?
              </label>
              <textarea
                id="story-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="The masked vigilante smirks as the neon city glows behind him. 'You picked the wrong night,' he says."
                className="w-full p-4 border-2 border-gray-500 bg-gray-800/90 text-white text-xl rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-[120px] resize-y"
              />

              <p className="text-xl text-gray-300 italic">
                Go wild! Action, drama, humor—your story, your rules!
              </p>
            </div>

            {/* Buttons container */}
            <div className="flex flex-col items-start space-y-6">
              {/* Upload section */}
              <div className="flex flex-col items-start">
                <button
                  onClick={handleUpload}
                  className="px-4 py-2 text-white text-[23px] font-semibold rounded-none bg-gray-600/50 backdrop-blur-md hover:bg-gray-700/80 transition-all shadow-md border border-gray-500"
                >
                  Upload your character
                </button>
              </div>

              {/* Generate button with status */}
              <div className="flex flex-col items-start">
                <button
                  onClick={handleGenerate}
                  disabled={generateStatus === "loading"}
                  className={`px-4 py-2 text-white text-[18px] font-semibold rounded-none backdrop-blur-md border border-gray-500 transition-all shadow-md ${
                    generateStatus === "loading"
                      ? "bg-yellow-500 cursor-wait"
                      : generateStatus === "success"
                      ? "bg-green-600"
                      : generateStatus === "error"
                      ? "bg-red-600"
                      : "bg-gray-700/50 hover:bg-gray-600/80"
                  }`}
                >
                  {getGenerateButtonText()}
                </button>

                {/* Status message */}
                {generateStatus !== "idle" && (
                  <p
                    className={`mt-2 text-sm font-medium ${
                      generateStatus === "success"
                        ? "text-green-400"
                        : generateStatus === "error"
                        ? "text-red-400"
                        : "text-white"
                    }`}
                  >
                    {generateStatus === "loading" && "Working some magic..."}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* IMAGE Container */}
          <div className="space-y-6 p-8 w-[50%] flex flex-wrap ml-20 justify-center gap-4">
            {/* FIRST ROW */}
            {/* <div className="flex gap-6">
              <img
                src="./img1.jpeg"
                alt="Image 1"
                className="w-[30%] h-[100%] object-cover rounded-lg shadow-md"
              />
            </div> */}

            {/* SECOND ROW */}
            {/* <div className="flex gap-6">
              <img
                src="./img2.jpeg"
                alt="Image 2"
                className="w-[30%] ml-27 h-[100%] object-cover rounded-lg shadow-md"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadPage;
