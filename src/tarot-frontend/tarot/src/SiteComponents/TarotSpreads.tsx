import './TopBar.css';
import { useNavigate } from "react-router-dom";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react'



function TarotSpreads() {

 let navigate = useNavigate();

  const handleCareer = () => {
      navigate("/Career");
  }

  const handleDaily = () => {
      navigate("/Daily");
  }

  const handleLove = () => {
      navigate("/Love");
  }


  return (
        <Menu>
        <MenuButton as={Button}>Tarot Spreads</MenuButton>
          <MenuList>
            <MenuItem className="Career" onClick={handleCareer}>Career</MenuItem>
            <MenuItem className="Daily" onClick={handleDaily}>Daily</MenuItem>
            <MenuItem className="Love" onClick={handleLove}>Love</MenuItem>
          </MenuList>
        </Menu>
  );
}

export default TarotSpreads;