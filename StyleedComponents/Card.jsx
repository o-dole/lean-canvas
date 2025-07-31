import styled from 'styled-components';

const CardContainer = styled.div.attrs({ className: 'card-container' })`
  border: 2px solid #393939;
  padding: 2px;
  border-radius: 6px;
  ${props => {
    console.log('props', props);

    return (
      props.$dark &&
      `
      background-color:black;
      color:#fff`
    );
  }}
`;

export default function Card() {
  return (
    <CardContainer $dark={true}>
      <h2>Styled Components</h2>
      <p>이것은 styled-components로 만든 카드</p>
    </CardContainer>
  );
}
