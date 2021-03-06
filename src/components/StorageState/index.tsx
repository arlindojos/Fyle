import React from 'react';
import { Container, UsedStorage, StateContainer, Dot, State, Storage, Arrow, StorageLeft } from './styles';


const StorageState: React.FC = () => {
  return (
    <Container>
      <UsedStorage>
        You´ve used <span>942 GB</span> of your storage
      </UsedStorage>

      <StateContainer>
        <State>
          <Dot></Dot>
        </State>
      </StateContainer>

      <Storage>
        <span>0 GB</span>
        <span>1000 GB</span>
      </Storage>

      <Arrow></Arrow>
      
      <StorageLeft>
        <strong>185</strong>
        <span>GB left</span>
      </StorageLeft>
    </Container>
  )
}

export default StorageState;