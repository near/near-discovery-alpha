import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.div`
  text-align: center;
  font-family: Trans-America;
  font-size: 90px;
  font-style: normal;
  background: linear-gradient(180deg, #fff 39.2%, #33c5f4 80%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-left: 14px;
  margin-right: 30px;
  .small {
    font-size: 36px;
  }
`;
const StyledRules = styled.div`
  cursor: pointer;
  position: relative;
  &:active {
    right: -2px;
    bottom: -2px;
  }
`;

export default function Header({ onOpenRules }: any) {
  return (
    <StyledContainer>
      <svg xmlns="http://www.w3.org/2000/svg" width="110" height="72" viewBox="0 0 110 72" fill="none">
        <rect x="37" y="1" width="54.2221" height="54.2221" rx="6" fill="black" stroke="#33C5F4" strokeWidth="2" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M73.8768 23.5761C76.5679 23.5761 78.7494 21.3945 78.7494 18.7034C78.7494 16.0123 76.5679 13.8307 73.8768 13.8307C71.1857 13.8307 69.0041 16.0123 69.0041 18.7034C69.0041 21.3945 71.1857 23.5761 73.8768 23.5761ZM50.9839 18.1369H56.5365V37.7409H73.8741V42.8402H50.9839V18.1369Z"
          fill="#33C5F4"
        />
        <path d="M99 67H109V57" stroke="white" strokeWidth="2" />
        <path d="M99 67H109V57" stroke="white" strokeWidth="2" />
        <path d="M11 1H1V11" stroke="white" strokeWidth="2" />
        <path d="M11 1H1V11" stroke="white" strokeWidth="2" />
        <rect
          x="18"
          y="13.0337"
          width="54.2221"
          height="54.2221"
          rx="6"
          fill="black"
          stroke="#33C5F4"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M54.8773 35.6098C57.5684 35.6098 59.7499 33.4282 59.7499 30.7371C59.7499 28.046 57.5684 25.8644 54.8773 25.8644C52.1862 25.8644 50.0046 28.046 50.0046 30.7371C50.0046 33.4282 52.1862 35.6098 54.8773 35.6098ZM31.9844 30.1706H37.537V49.7746H54.8746V54.8739H31.9844L31.9844 30.1706Z"
          fill="#33C5F4"
        />
        <path
          d="M91.3429 8.12214C98.62 6.02668 103.481 5.75017 104.587 7.75287C107.258 12.587 87.0448 28.8699 59.4397 44.1219C31.8346 59.3738 7.29113 67.8192 4.62027 62.9851C3.17954 60.3775 8.39763 54.4384 17.8429 47.1268"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
      <StyledTitle>
        FLIP<span className="small"> and </span>Match
      </StyledTitle>
      <StyledRules
        onClick={(e) => {
          e.stopPropagation();
          onOpenRules();
        }}
      >
        <svg width="95" height="74" viewBox="0 0 95 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M71.4331 2.25835L11.2789 14.3028L2.1109 27.1037L9.24429 62.7304L22.7797 71.7417L82.9339 59.6972L92.1747 47.2599L84.8229 10.5426L71.4331 2.25835Z"
            fill="#33C5F4"
          />
          <path
            d="M32.8564 25.7245L32.4674 23.8576L25 24.791L28.1114 40.9705L35.5789 38.7925L34.9955 35.9922M32.8564 25.7245L40.5572 19.5016H45.8466M32.8564 25.7245L34.9955 35.9922M45.8466 19.5016L50.8249 23.8576M45.8466 19.5016C48.7506 18.6719 55.1809 17.0124 57.6701 17.0124C60.7815 17.0124 63.8929 16.7013 63.5818 19.1904C63.3611 20.956 56.765 22.6889 52.3806 23.5651M50.8249 23.8576C50.3063 25.3096 48.7091 27.9647 46.4689 26.969C45.9859 26.7544 45.5328 26.5455 45.1139 26.3468M50.8249 23.8576C51.2953 23.7753 51.8199 23.6772 52.3806 23.5651M42.1129 24.791C42.5197 25.0351 43.5901 25.6237 45.1139 26.3468M52.3806 23.5651C53.2103 23.7664 54.6209 24.6044 53.6252 26.3468C53.5118 26.5451 53.3779 26.7538 53.2258 26.969M43.6686 28.5248C43.4612 29.4582 43.6064 31.3873 45.8466 31.6362C46.3423 31.6913 46.8672 31.6294 47.4023 31.4781M43.6686 28.5248L45.1139 26.3468M43.6686 28.5248C42.8864 29.3545 40.5468 30.8272 37.4457 30.0805M53.2258 26.969C54.2924 26.8653 56.3633 27.218 56.1143 29.4582C56.0773 29.792 55.965 30.1169 55.7929 30.4293M53.2258 26.969C52.0038 28.6989 49.6153 30.8526 47.4023 31.4781M47.4023 31.4781C47.0912 32.0494 46.8423 33.3164 48.3358 33.8142C48.5867 33.8979 48.9052 33.9309 49.2692 33.9186M55.7929 30.4293C56.6261 30.8316 57.919 32.0718 56.4255 33.8142C54.5586 35.9922 50.8249 37.2368 49.8915 35.9922M55.7929 30.4293C54.7152 32.3856 51.2901 33.8505 49.2692 33.9186M49.8915 35.9922C49.1447 34.9965 49.1655 34.195 49.2692 33.9186M49.8915 35.9922C46.9045 37.2368 42.0092 36.5108 39.9349 35.9922H34.9955"
            stroke="black"
            strokeWidth="1.5"
          />
          <path
            d="M29.356 24.1688L25 24.7911L28.1114 40.9705L35.5789 38.7925L34.9566 36.6145L31.8452 36.3034L29.356 24.1688Z"
            fill="black"
          />
          <path
            d="M16.3727 48.8867L27.5218 46.7183C27.9841 46.7384 28.3395 46.9627 28.6055 47.3877L29.5368 52.176C29.4926 52.5147 29.4102 52.7508 29.2929 52.9019C29.179 53.0708 28.9243 53.1753 28.5532 53.2475L26.2563 53.6942L30.4474 56.8583L26.4366 57.6384L22.242 54.4566L21.7368 51.8593L26.0127 51.0277L25.7687 49.7732L20.097 50.8763L21.5953 58.5799L18.3796 59.2054L16.3727 48.8867ZM29.8659 46.2624L33.0817 45.637L34.58 53.3406L40.2163 52.2444L38.7181 44.5407L41.9338 43.9153L43.7586 53.2975C43.7203 53.8551 43.4607 54.2173 42.9689 54.423L32.8446 56.392C32.2905 56.3715 31.9106 56.1153 31.6907 55.6446L29.8659 46.2624ZM46.5749 43.0126L48.0732 50.7163L55.1055 49.3486L55.614 51.9636L45.3661 53.9567L43.3592 43.6381L46.5749 43.0126ZM66.4723 45.8359L59.5107 47.1898L59.7547 48.4443L68.6069 46.7227L69.1154 49.3377L57.0476 51.6848L55.7933 45.2356L65.9706 43.2562L66.4723 45.8359ZM55.5493 43.9811L55.0407 41.3661L67.1086 39.019L67.6172 41.634L55.5493 43.9811ZM70.5408 49.0604L70.0322 46.4454L76.3047 45.2255L69.6021 41.6881C69.1981 41.3082 68.9605 40.841 68.8575 40.3109C68.8265 40.1519 68.8275 39.9683 68.8957 39.7533C68.9497 39.5595 69.039 39.3587 69.1494 39.1722C69.2633 39.0034 69.3806 38.8522 69.5367 38.7118C69.6927 38.5714 69.8414 38.4875 70.0181 38.4531L79.63 36.5837L80.1386 39.1987L73.7778 40.4358L80.5791 44.0091C80.7794 44.1902 80.9477 44.3958 81.0665 44.6294C81.1887 44.8807 81.2722 45.1212 81.3168 45.3509C81.3512 45.5276 81.3537 45.7288 81.3174 45.9193C81.281 46.1097 81.2094 46.307 81.1309 46.469C81.0524 46.631 80.9527 46.7787 80.832 46.9122C80.7113 47.0457 80.5768 47.1085 80.4354 47.136L70.5408 49.0604Z"
            fill="black"
          />
        </svg>
      </StyledRules>
    </StyledContainer>
  );
}
