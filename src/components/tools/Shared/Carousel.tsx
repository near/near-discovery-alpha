import { Tooltip } from '@near-pagoda/ui';
import React from 'react';
import styled from 'styled-components';

import { NftImage } from '@/components/NTFImage';

const CarouselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  white-space: nowrap;
  padding: 18px 12px 8px 12px;
  gap: 12px;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }
`;

const ImgCard = styled.div<{
  $selected: boolean;
}>`
  flex: 0 0 auto;
  cursor: pointer;
  border-radius: 50%;
  border: ${(p) => (p.$selected ? 'solid 2px #604cc8CC' : 'none')};
  transform: ${(p) => (p.$selected ? 'scale(1.1) translateY(-10px)' : 'scale(1)')};
  transition: transform 0.3s ease, border 0.3s ease;
`;

interface NFT {
  token_id: string;
  title: string;
  media?: string;
  contract_id: string;
}
interface CarouselProps {
  nfts: NFT[];
  contractId?: string;
  onSelect?: ((contractId: string, tokenId: string) => void);
  nftSelected?: string;
}

const empty = (contractId: string, tokenId: string) => { console.log(contractId, tokenId); };

const Carousel: React.FC<CarouselProps> = ({ nfts, onSelect = empty, nftSelected }) => {
   
  return (
    <CarouselContainer>
      {nfts.map((nft) => (
        <Tooltip key={`Carousel-${nft.token_id}`} content={nft.metadata.title} asChild>
          <ImgCard onClick={() => onSelect(nft.contract_id, nft.token_id)} $selected={nftSelected === nft.token_id}>
            <NftImage nft={nft} />
          </ImgCard>
        </Tooltip>
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
