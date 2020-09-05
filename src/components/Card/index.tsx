import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { RiDeleteBinLine } from 'react-icons/ri';

import {
 CardContainer, Avatar, Info, Title 
} from './style';

interface CardProps {
  avatar?: string;
  title: string;
  description: string;
  linkRepository: string;
  owner: string;
  buttonRemove?: () => void;
}

const Card: React.FC<CardProps> = ({
  avatar,
  title,
  description,
  owner,
  buttonRemove,
}) => (
  <CardContainer>
    { avatar && <Avatar src={avatar} alt={owner} /> }

    <Info>
      <Title>{title}</Title>
      <p>{description}</p>
    </Info>

    <div className="btns">
      {buttonRemove && (
        <div className="remove" onClick={() => buttonRemove()}>
          <RiDeleteBinLine size={18} color="#FFF" />
        </div> 
      )}

      <FiChevronRight size={25} color="#C9C9D4" />
    </div> 
  </CardContainer>
);

export default Card;
