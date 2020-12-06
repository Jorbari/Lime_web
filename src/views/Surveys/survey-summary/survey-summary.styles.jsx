import styled from 'styled-components';

export const SurveyComponent = styled.div`

.section__two {
  display: flex;
  gap: 0 2rem;
  margin-top: 5.4rem;
}
.section__two > .flex__two {
  flex: 1;
}
.section__two > .flex__two > h4 {
  color: #5B5656;
  font-size: 2.4rem;
  font-weight: 600;
  margin-bottom: .5rem;
  padding-left: 1.5rem;
}
.section__two > .flex__two > .container__curved {
  padding: 2rem 2rem;
  border: .07rem solid #9BADAE;
  border-radius: 1rem;
  height: 100%;
}
.section__two > .flex__two > .container__curved > .details__grid > section > h4 {
  color: #7FCD91;
  font-size: 2.4rem;
  font-weight: 500;
  margin-bottom: .6rem;
}
.section__two > .flex__two > .container__curved > .details__grid > section > p {
  color: #5B5656;
  font-size: 2rem;
  font-weight: normal;
}
.section__two > .flex__two > .container__curved > .details__grid > section:nth-child(2) {
  border-bottom: .07rem solid #9BADAE;
}
.section__two > .flex__two > .container__curved > .details__grid {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100%;
}
.section__two > .flex__two > .container__curved > .details {
  margin-top: 1.6rem;
}
.section__two > .flex__two > .container__curved > .details:not(:last-child) {
  border-bottom: 0.5px solid #9BADAE;
}
.section__two > .flex__two > .container__curved > .details > p {
  font-size: 1.8rem;
  font-weight: 300;
  color: #5B5656;
  margin-bottom: .5rem;
}
.section__two > .flex__two > .container__curved > .details > h4 {
  font-size: 2rem;
  font-weight: 500;
  color: #5B5656;
  margin-bottom: .5rem;
}

`;
