import { memo } from 'react';
import { StyledContainer, StyledTitle, StyledSubtitle, StyledLearnMore, StyledImg } from './styles';

const Decentralised = () => {
  return (
    <StyledContainer>
      <StyledTitle>Decentralised Front-End</StyledTitle>
      <StyledSubtitle>
        <div>Powered by</div>
        <svg xmlns="http://www.w3.org/2000/svg" width="108" height="27" viewBox="0 0 108 27" fill="none">
          <path
            d="M44.2782 3.79712C42.3233 3.79712 40.8571 4.29671 39.6842 5.39581L37.5338 7.29426C37.3383 7.39418 36.9474 7.59402 36.7519 7.29426C36.4586 7.09443 36.4586 6.79467 36.6541 6.49492L37.8271 4.69638C38.0225 4.39663 37.827 4.09687 37.5338 4.09687H34.797C34.5037 4.09687 34.2105 4.39663 34.2105 4.69638V21.8823C34.2105 22.1821 34.5037 22.4819 34.797 22.4819H37.6316C37.9248 22.4819 38.218 22.1821 38.218 21.8823V12.1903C38.218 7.79385 41.8346 7.09443 43.203 7.09443C46.1353 7.09443 47.1128 9.19271 47.1128 10.7914V21.8823C47.1128 22.1821 47.406 22.4819 47.6992 22.4819H50.6316C50.9248 22.4819 51.218 22.1821 51.218 21.8823V10.3917C51.218 6.29508 48.5789 3.79712 44.2782 3.79712Z"
            fill="white"
          />
          <path
            d="M62.8496 3.69678C57.2782 3.69678 53.7594 7.19392 53.7594 11.8901V14.488C53.7594 19.4839 57.2782 22.8811 62.8496 22.8811C67.7368 22.8811 71.2556 20.2832 71.5488 16.7861C71.5488 16.3864 71.3533 16.1866 70.9624 16.1866H68.2255C67.9323 16.1866 67.7368 16.2865 67.6391 16.5862C67.2481 17.7853 65.5864 19.4839 62.8496 19.4839C60.1127 19.4839 57.4736 17.3856 57.5714 14.488V11.1907C57.5714 8.6927 60.1127 7.094 62.8496 7.094C65.2932 7.094 67.7368 8.49286 68.03 10.8909C68.03 11.1907 67.8345 11.3905 67.6391 11.4904L59.5263 13.0891C59.233 13.189 58.9398 13.4888 58.9398 13.7885C58.9398 14.0883 59.233 14.388 59.7218 14.388H71.3533C71.6466 14.388 71.9398 14.0883 71.9398 13.7885V11.4904C71.9398 7.19392 68.2255 3.69678 62.8496 3.69678Z"
            fill="white"
          />
          <path
            d="M82.985 3.69678C78.4887 3.69678 74.5789 6.39457 74.5789 9.89172C74.5789 10.1915 74.8722 10.3913 75.1654 10.3913H78.0977C78.391 10.3913 78.5865 10.1915 78.6842 9.89172C78.8797 8.29302 80.8346 7.094 82.8872 7.094C85.3308 7.094 86.9925 8.59278 86.9925 11.2906V14.488C86.9925 17.7853 84.6466 19.384 81.7143 19.384C79.3684 19.384 78.0977 18.4847 78.0977 17.0858C78.0977 15.8868 78.7819 14.7877 81.421 14.1882L85.2331 13.0891C85.6241 12.9892 85.8195 12.6894 85.7218 12.2898C85.7218 11.99 85.3308 11.8901 85.0376 11.8901H81.0301C77.609 11.8901 74.188 14.0883 74.188 17.2857V17.7853C74.188 21.0826 77.218 22.7812 80.7368 22.7812C82.985 22.7812 84.8421 21.8819 86.015 20.8827L87.7744 19.384C88.0677 19.0842 88.3609 19.0842 88.5564 19.384C88.7519 19.5838 88.6541 19.9835 88.5564 20.1833L87.4812 21.8819C87.2857 22.1817 87.4812 22.4814 87.7744 22.4814H90.4135C90.7068 22.4814 91 22.1817 91 21.8819V10.791C91 6.49449 87.9699 3.69678 82.985 3.69678Z"
            fill="white"
          />
          <path
            d="M106.541 4.09668H102.534C101.165 4.09668 99.797 4.99594 98.8195 5.79529L97.2556 7.19415C97.0601 7.29407 96.7669 7.4939 96.5714 7.29407C96.2782 7.09423 96.1804 6.69456 96.4736 6.49472L97.6466 4.69619C97.8421 4.39643 97.6466 4.09668 97.3533 4.09668H94.6165C94.3233 4.09668 94.03 4.39643 94.03 4.69619V21.8822C94.03 22.1819 94.3233 22.4817 94.6165 22.4817H97.5488C97.8421 22.4817 98.1353 22.1819 98.1353 21.8822V13.0893C98.1353 9.29244 99.6015 7.59382 102.925 7.59382H106.639C106.932 7.59382 107.226 7.29407 107.226 6.99431V4.69619C107.128 4.39643 106.835 4.09668 106.541 4.09668Z"
            fill="white"
          />
          <path
            d="M23.3609 0C22.3835 0 21.5038 0.499592 21.015 1.39886L15.5414 9.69208C15.3459 9.99184 15.4436 10.2916 15.7368 10.4914C15.9323 10.5913 16.2256 10.5913 16.4211 10.4914L21.797 5.69535C21.8947 5.59543 21.9925 5.59543 22.0902 5.69535C22.0902 5.69535 22.188 5.79527 22.188 5.89518V20.783C22.188 20.8829 22.0902 20.9829 21.9925 20.9829C21.8947 20.9829 21.8947 20.9829 21.797 20.8829L5.47368 0.999184C4.98496 0.399673 4.20301 0 3.32331 0H2.83459C1.27068 0 0 1.29894 0 2.79771V23.6807C0 25.2793 1.27068 26.4784 2.73684 26.4784C3.71429 26.4784 4.59399 25.9788 5.08271 25.0795L10.5564 16.7863C10.7519 16.4865 10.6541 16.1868 10.3609 15.9869C10.1654 15.887 9.87218 15.887 9.67669 15.9869L4.30075 20.783C4.20301 20.8829 4.10526 20.8829 4.00752 20.783C4.00752 20.783 3.90977 20.6831 3.90977 20.5832V5.89518C3.90977 5.79527 4.00752 5.69535 4.10526 5.69535C4.20301 5.69535 4.20301 5.69535 4.30075 5.79527L20.5263 25.5791C21.015 26.1786 21.797 26.5783 22.6767 26.5783H23.2632C24.8271 26.5783 26 25.2793 26 23.7806V2.79771C26.0977 1.29894 24.9248 0 23.3609 0Z"
            fill="white"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="23" viewBox="0 0 44 23" fill="none">
          <path
            d="M21.9661 6.44069C19.3317 6.44069 17.6975 8.16487 17.6975 11.1666C17.6975 14.1683 19.3333 15.8925 21.9661 15.8925C24.5989 15.8925 26.2347 14.1683 26.2347 11.1666C26.2347 8.16487 24.5989 6.44069 21.9661 6.44069ZM40.2141 0H3.7859C1.69577 0 0 1.67889 0 3.74822V18.7411C0 20.8104 1.69577 22.4893 3.7859 22.4893H40.2141C42.3042 22.4893 44 20.8104 44 18.7411V3.74822C44 1.67889 42.3058 0 40.2141 0ZM10.1478 17.4667H4.24336V4.86488H10.05C12.3389 4.86488 14.063 5.88939 14.063 8.02431C14.063 10.0281 12.7458 10.6934 12.0218 10.8511V10.9917C12.8342 11.1759 14.3375 11.8147 14.3375 13.9934C14.3375 16.3204 12.4808 17.4667 10.1478 17.4667ZM21.9661 17.7119C18.0145 17.7119 15.478 15.3052 15.478 11.1666C15.478 7.02791 18.0145 4.62124 21.9661 4.62124C25.9176 4.62124 28.4621 7.02791 28.4621 11.1666C28.4621 15.3052 25.9255 17.7119 21.9661 17.7119ZM35.0574 17.6682C31.8315 17.6682 29.7272 16.1892 29.5868 13.7388V13.4764H31.6201C31.7873 15.2881 33.2291 15.9799 35.0322 15.9799C36.8352 15.9799 37.9489 15.2802 37.9489 13.9668C37.9489 12.6534 36.9503 12.2083 35.3319 11.9896L33.9437 11.7975C31.3456 11.4383 29.896 10.3185 29.896 8.18361C29.896 6.04869 31.6107 4.66653 34.7577 4.66653C37.9047 4.66653 39.7693 6.09242 39.9112 8.50846V8.77083H37.8779C37.7895 7.00292 36.4818 6.35479 34.775 6.35479C33.0682 6.35479 32.0176 6.98418 32.0176 8.13988C32.0176 9.29559 32.9546 9.77661 34.5368 9.98588L35.925 10.178C38.542 10.5372 40.0611 11.5773 40.0611 13.8622C40.0611 16.147 38.2928 17.6682 35.059 17.6682H35.0574ZM9.85595 11.9709H6.39027V15.6894H9.85595C11.2173 15.6894 12.1985 15.1912 12.1985 13.8247C12.1985 12.4581 11.2173 11.9693 9.85595 11.9693V11.9709ZM11.9855 8.41788C11.9855 7.106 11.0312 6.64216 9.74868 6.64216H6.39027V10.1952H9.74868C11.0296 10.1952 11.9855 9.73132 11.9855 8.41944V8.41788Z"
            fill="#00EC97"
          />
        </svg>
        <div>enables DapDap to realise the Open Web vision.</div>
      </StyledSubtitle>
      <StyledLearnMore
        data-bp="1001-011"
        onClick={() => {
          window.open('https://near.org/', '_blank');
        }}
      >
        Learn more
      </StyledLearnMore>
      <StyledImg src="/images/home/decentralised.png" />
    </StyledContainer>
  );
};

export default memo(Decentralised);
