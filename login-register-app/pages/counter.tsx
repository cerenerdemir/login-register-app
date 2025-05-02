import { useState } from "react";

export default function CounterPage() {
  const [sayi, setSayi] = useState(0);
  const [giris, setGiris] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGiris(e.target.value);
  };

  const handleArttir = () => {
    const yeniSayi = parseInt(giris) || sayi;
    setSayi(yeniSayi + 1);
  };

  const handleAzalt = () => {
    const yeniSayi = parseInt(giris) || sayi;
    setSayi(yeniSayi - 1);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4">
      <div className="bg-white rounded-xl shadow-lg w-[340px] p-6 space-y-6">
        <h1 className="text-xl font-semibold text-center">Sayı Sayfası</h1>

        <input
          type="number"
          value={giris}
          onChange={handleInputChange}
          placeholder="Bir Sayı Giriniz"
          className="w-full h-11 px-4 rounded-md bg-[#F3F4F6] border border-[#D1D5DB] text-sm outline-none"
        />

        <div className="flex justify-between gap-3">
          <button
            onClick={handleArttir}
            className="flex-1 h-10 bg-[#16A34A] text-white rounded-md font-semibold"
          >
            Arttır
          </button>
          <button
            onClick={handleAzalt}
            className="flex-1 h-10 bg-[#DC2626] text-white rounded-md font-semibold"
          >
            Azalt
          </button>
        </div>

        <div className="bg-[#E5E7EB] text-center py-3 rounded-md text-sm font-medium">
          Sonuç: {sayi}
        </div>
      </div>
    </div>
  );
}
