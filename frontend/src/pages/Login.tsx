import DotGrid from "../components/Background/DotGrid";
import LoginPage from "../components/Login/LoginPage";

export default function Login() {
  return (
    <div className="">
       <DotGrid
    className="bg-green-500"
    dotSize={5}
    gap={15}
    baseColor="#2F293A"
    activeColor="#5227FF"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />
      <LoginPage/>
    </div>
  )
}
