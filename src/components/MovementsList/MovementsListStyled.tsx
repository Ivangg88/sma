import styled from "styled-components";

const MovementsListStyled = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .form {
    width: 100%;
    background-color: white;
  }

  img {
    flex: 0.5;
  }

  .movements-list {
    &__title {
      font-size: 1rem;
    }

    &__buttons {
      display: flex;
      gap: 15px;
    }
  }

  .list-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    list-style: none;
    padding: 0;

    &__movement {
      width: 100%;
      display: flex;
      justify-content: space-between;
      gap: 0px;
    }

    .movement-data {
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 4;

      &__name {
        font-weight: bold;
      }

      &__date {
        font-size: 0.7rem;
      }
    }
  }

  .movement-quantity {
    color: #18de4f;
    align-self: center;
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    flex: 2;
  }

  .movement-quantity--expense {
    color: #f7487a;
  }

  .movement__icon {
    align-self: center;
    flex: 0.5;
  }

  .clear {
    margin: 0;
    font-size: 1, 2rem;
    background-color: transparent;
    border: none;
    padding: 0;
  }
`;

export default MovementsListStyled;
