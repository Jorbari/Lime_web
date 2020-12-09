import styled from "styled-components";

export const ProfileContainer = styled.div`
  /* border: 1px solid #7fcd91; */
  /* border-radius: 10px; */

  .card-header-text {
    position: absolute;
    width: 116px;
    height: 36px;
    left: 30px;
    top: 526px;

    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */

    color: #5b5656;
  }

  .table-card-container {
    /* border: 1px solid #7fcd91; */
    width: 1000px;
    /* height: 447px; */
    border-radius: 4px;
    margin-top: 4.5rem;
    /* margin-left: 1rem; */
  }

  .details-card-table {
    width: 1191px;
    /* border: 0.5px solid #7fcd91; */
    border-left: none;
    border-right: none;
  }

  .details-card-table h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: #5b5656;
  }
`;
// **************

export const ProfileContainerStyle = styled.div`
  .content__wrapper {
    margin-top: 8.7rem;
  }

  .flex__right {
    display: flex;
    justify-content: flex-end;
    padding: 2.6rem 0;
  }
  .flex__right > button {
    background-color: #b6e6bd;
    border-radius: 1rem;
    color: #5b5656;
    font-size: 1.8rem;
    padding: 1.1rem 1.8rem;
  }

  .tab {
    display: flex;
    border-bottom: 0.5px solid rgba(91, 86, 86, 0.5);
  }
  .tab > .tab__list {
    color: #5b5656;
    font-size: 1.8rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  .tab__list.react-tabs__tab--selected {
    color: #5b5656;
    font-size: 2rem;
    font-weight: bold;
    border-bottom: 1px solid #5b5656;
  }
  .tab > .tab__list:not(:last-child) {
    margin-right: 4.2rem;
  }

  /* Tab One */

  .content {
    margin: 2.5rem 0;
    display: flex;
    gap: 0 3rem;
  }

  .content > .flex__one {
    border: 1.5px solid #a4d4ae;
    border-radius: 1rem;
    padding: 4.2rem 5rem;
    width: 65%;
  }

  .content > .flex__two {
    border: 1.5px solid #a4d4ae;
    border-radius: 1rem;
    padding: 4.2rem 3.6rem;
    flex: 1;
  }

  .content > .flex__one > .key__info,
  .content > .flex__two > .key__info {
    padding-bottom: 2.1rem;
    border-bottom: 1px solid rgba(91, 86, 86, 0.5);
    width: 100%;
  }
  .content > .flex__one > .key__info > p,
  .content > .flex__two > .key__info > p {
    color: #5b5656;
    font-size: 2.2rem;
    font-weight: 600;
  }

  .content > .flex__one > .profile__detail,
  .content > .flex__two > .profile__detail {
    margin-top: 1.7rem;
    width: 100%;
  }

  /* Profile Picture section */
  .grid__profile {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  .detail > h4 {
    color: #5b5656;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  .detail > label {
    color: #3391d0;
    text-decoration: underline;
    font-size: 1.4rem;
    font-weight: 500;
  }
  .detail > input {
    display: none;
  }
  .displayImage {
    width: 9.8rem;
    height: 9.8rem;
    overflow: hidden;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e2e8f0;
  }
  .displayImage > h4 {
    font-size: 3rem;
    font-weight: 500;
    text-transform: uppercase;
  }
  .displayImage > img {
    width: inherit;
    height: inherit;
    object-fit: cover;
  }

  /* End Of Profile picture section */

  .grid__2 {
    display: flex;
    justify-content: space-between;
    gap: 0 5.8rem;
  }
  .grid__2 > * {
    flex: 1;
  }
  .form__space:not(:last-child) {
    margin-bottom: 3.6rem;
  }

  .form-group > label {
    color: #5b5656;
    font-size: 1.8rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }
  .form-group > input {
    background: rgba(247, 247, 247, 0.8);
    border: 1.5px solid #f5f5f5;
    border-radius: 1rem;
    color: #5b5656;
    font-size: 2rem;
    font-weight: normal;
    width: 100%;
  }

  .flex__two .grid__profile:not(:last-child) {
    margin-bottom: 3rem;
  }

  .flex__two .grid__profile > h4 {
    color: #5b5656;
    font-size: 1.6rem;
  }

  .flex__two .grid__profile > button {
    color: #5b5656;
    font-size: 1.8rem;
    background: #bbe8ce;
    border: 1px solid #bbe8ce;
    border-radius: 0.5rem;
    padding: 1.1rem 2.7rem;
  }
`;
