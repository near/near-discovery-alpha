import { Accordion } from '@near-pagoda/ui';

import Carousel from '../Shared/Carousel';

interface NFT {
  token_id: string;
  title: string;
  media?: string;
  contract_id: string;
}

const ListToken = ({ tokens }: { tokens: NFT[] }) => {

  return (
    <Accordion.Root type="multiple">
      <Accordion.Item value="one">
        <Accordion.Trigger>NFT you minted</Accordion.Trigger>
        <Accordion.Content>
          <Carousel nfts={tokens} />
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default ListToken;
