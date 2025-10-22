import { LogoSpinLoader } from "react-loadly";

export default function Loading() {
    return (
      <div className="h-screen flex justify-center items-center">
      <LogoSpinLoader
        color="#064746"
        size={50}
        speed={1}
        loadingText="Loading..."
        src="https://upload.wikimedia.org/wikipedia/commons/7/75/Flag_of_Palestine.png"
        alt="Logo"
        animationType="spin"
        glowIntensity={0.5}
      />
    </div>
  );
}