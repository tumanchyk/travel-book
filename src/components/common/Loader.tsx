import MoonLoader from "react-spinners/MoonLoader"

export default function Loader() {
  return (
    <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <MoonLoader size={80}/>
    </div>
  );
}
