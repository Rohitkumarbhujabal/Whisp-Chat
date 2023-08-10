import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
    return (
        <div 
        className="
          flex 
          min-h-screen 
          flex-col 
          justify-center 
          py-12 
          sm:px-6 
          lg:px-8 
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...
        "
      >
        <div
        className="sm:mx-auto sm:w-full sm:max-w-md"
        >
            <Image
          height="65"
          width="65"
          className="mx-auto w-auto"
          src="/images/logo.png"
          alt="Logo"
        />
        <h2 
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-gray-900
            font-mono
          "
          >
            SIGN IN TO YOUR ACCOUNT
        </h2>
        </div>
        <AuthForm />
      </div>
    )
  }
  