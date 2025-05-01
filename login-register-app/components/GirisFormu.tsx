import { useState } from "react";

export default function GirisFormu() {
  const [aktifSekme, setAktifSekme] = useState<"giris" | "kayit">("giris");

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-xl space-y-6">
      <h2 className="text-2xl font-bold text-center">Hoş Geldiniz</h2>

      {/* Sekmeler */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setAktifSekme("giris")}
          className={`px-4 py-2 rounded-md border font-semibold ${
            aktifSekme === "giris"
              ? "bg-[#1B3C73] text-white"
              : "bg-white text-[#1B3C73] border-[#1B3C73]"
          }`}
        >
          Giriş Yap
        </button>
        <button
          onClick={() => setAktifSekme("kayit")}
          className={`px-4 py-2 rounded-md border font-semibold ${
            aktifSekme === "kayit"
              ? "bg-[#1B3C73] text-white"
              : "bg-white text-[#1B3C73] border-[#1B3C73]"
          }`}
        >
          Kayıt Ol
        </button>
      </div>

      {/* Form Alanı */}
      <form className="space-y-4">
        {aktifSekme === "kayit" && (
          <input
            type="email"
            placeholder="E-posta"
            className="w-full p-3 border rounded-md bg-gray-100"
          />
        )}
        <input
          type="text"
          placeholder={
            aktifSekme === "kayit" ? "Kullanıcı Adı" : "Kullanıcı Adı veya E-posta"
          }
          className="w-full p-3 border rounded-md bg-gray-100"
        />
        <input
          type="password"
          placeholder="Şifre"
          className="w-full p-3 border rounded-md bg-gray-100"
        />
        {aktifSekme === "kayit" && (
          <input
            type="password"
            placeholder="Şifre Tekrar"
            className="w-full p-3 border rounded-md bg-gray-100"
          />
        )}
        <button
          type="submit"
          className="w-full bg-[#1B3C73] text-white py-2 rounded-md font-semibold"
        >
          {aktifSekme === "giris" ? "Giriş Yap" : "Kayıt Ol"}
        </button>
      </form>

      <p className="text-sm text-center">
        {aktifSekme === "giris" ? (
          <>
            Hesabınız yok mu?{" "}
            <span
              onClick={() => setAktifSekme("kayit")}
              className="text-blue-700 font-medium cursor-pointer underline"
            >
              Kayıt olun
            </span>
          </>
        ) : (
          <>
            Hesabınız var mı?{" "}
            <span
              onClick={() => setAktifSekme("giris")}
              className="text-blue-700 font-medium cursor-pointer underline"
            >
              Giriş Yapın
            </span>
          </>
        )}
      </p>
    </div>
  );
}
