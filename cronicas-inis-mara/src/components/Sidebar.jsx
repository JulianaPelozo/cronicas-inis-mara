import { FaDragon, FaUsers, FaMountain } from 'react-icons/fa';
import { SidebarContainer, SidebarTitle, NavButton } from './styles';

export default function Sidebar({ currentPage, onNavigate }) {
  return (
    <SidebarContainer>
      <SidebarTitle>
        <FaMountain /> Inis Mara
      </SidebarTitle>
      
      <nav>
        <NavButton 
          $active={currentPage === 'clas'}
          onClick={() => onNavigate('clas')}
        >
          <FaDragon /> Clãs
        </NavButton>
        <NavButton 
          $active={currentPage === 'personagens'}
          onClick={() => onNavigate('personagens')}
        >
          <FaUsers /> Personagens
        </NavButton>
      </nav>
    </SidebarContainer>
  );
}