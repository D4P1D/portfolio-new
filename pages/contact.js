import { useState } from "react";
import { Element } from "react-scroll";

function Contact() {
  // State untuk nama, pesan, rating, dan data yang sudah disubmit
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [submittedData, setSubmittedData] = useState([]);

  // Handle input perubahan
  const handleNameChange = (e) => setName(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  // Handle rating bintang
  const handleRatingClick = (value) => {
    setRating(value);
  };

  // Handle form submission
  const handleSubmit = () => {
    // Menambahkan data ke list submittedData
    setSubmittedData([
      ...submittedData,
      { name, message, rating },
    ]);

    // Reset form setelah submit
    setName("");
    setMessage("");
    setRating(0);
  };

  // Fungsi untuk menghitung rata-rata rating
  const calculateAverageRating = () => {
    if (submittedData.length === 0) return 0;
    const totalRating = submittedData.reduce((acc, data) => acc + data.rating, 0);
    return (totalRating / submittedData.length).toFixed(1); // Mengembalikan rata-rata dengan satu desimal
  };

  return (
    <Element id="contact" name="contact">
      <div>
        <div className="w-full my-20 h-auto flex flex-col justify-center items-center">
          <h1 className="text-indigo-900 text-6xl font-bold text-center">Ulasan</h1>

          {/* Form */}
          <div className="flex justify-center text-center md:w-1/2 w-full my-5">
            <div className="w-full max-w-md space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nama Anda"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full h-10 border-2 border-indigo-900 rounded-lg px-4 text-lg"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Pesan Anda"
                  value={message}
                  onChange={handleMessageChange}
                  className="w-full h-24 border-2 border-indigo-900 rounded-lg p-4 text-lg"
                />
              </div>
              <div className="flex justify-center items-center space-x-1">
                <p className="text-lg font-semibold">Rating:</p>
                {/* Rating Stars */}
                {[1, 2, 3, 4, 5].map((value) => (
                  <span
                    key={value}
                    onClick={() => handleRatingClick(value)}
                    className={`cursor-pointer text-3xl ${
                      value <= rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div>
                <button
                  onClick={handleSubmit}
                  className="mt-5 text-xl w-full bg-indigo-900 text-white py-2 rounded-lg hover:bg-black"
                >
                  Kirim
                </button>
              </div>
            </div>
          </div>

          {/* Data yang sudah disubmit */}
          {submittedData.length > 0 && (
            <div className="w-full my-10 flex justify-center">
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-indigo-900 text-4xl font-bold text-center">Data Submitted</h2>
                {submittedData.map((data, index) => (
                  <div key={index} className="border-2 border-indigo-900 p-4 rounded-lg">
                    <p className="text-lg font-semibold">Nama: {data.name}</p>
                    <p className="text-lg font-semibold">Pesan: {data.message}</p>
                    <p className="text-lg font-semibold">Rating: {data.rating}</p>
                  </div>
                ))}
                <div className="border-2 border-indigo-900 p-4 rounded-lg mt-4">
                  <h3 className="text-lg font-semibold">Rata Rata Ulasan:</h3>
                  <p className="text-xl font-bold">
                    {submittedData.length > 0 ? calculateAverageRating() : "0.0"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Element>
  );
}

export default Contact;
