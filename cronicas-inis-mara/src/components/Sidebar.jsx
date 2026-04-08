import { FaDragon, FaUsers, FaMountain } from 'react-icons/fa';

export default function Sidebar({ currentPage, onNavigate }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">
          <FaMountain /> Inis Mara
        </h2>
      </div>
      
      <nav className="sidebar-nav">
        <button 
          className={`nav-button ${currentPage === 'clas' ? 'active' : ''}`}
          onClick={() => onNavigate('clas')}
        >
          <FaDragon /> Clãs
        </button>
        <button 
          className={`nav-button ${currentPage === 'personagens' ? 'active' : ''}`}
          onClick={() => onNavigate('personagens')}
        >
          <FaUsers /> Personagens
        </button>
      </nav>
    </aside>
  );
}