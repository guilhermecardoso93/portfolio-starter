export function Navbar() {
  return (
    <div className="nav-wrapper">
      <div className="nav-left">
        <div className="nav-name">Guilherme</div>
        <span>Toggle</span>
      </div>

      <div className="nav-right">
        <div className="nav-list">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <div className="button">Contato</div>
      </div>
    </div>
  );
}
