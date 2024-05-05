import Background from "./Background";
export default function Header() {
  return (
    <div className="header-container">
      <Background />
      <h1 className="header">
        Lexi<span className="header-thin">Loom</span>
      </h1>
    </div>
  );
}
