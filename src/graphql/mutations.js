/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
      itemId
      title
      subtitle
      itemType
      premium
      basket {
        basketId
        startDate
        items {
          nextToken
        }
        totalPremium
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
      itemId
      title
      subtitle
      itemType
      premium
      basket {
        basketId
        startDate
        items {
          nextToken
        }
        totalPremium
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
      itemId
      title
      subtitle
      itemType
      premium
      basket {
        basketId
        startDate
        items {
          nextToken
        }
        totalPremium
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createBasket = /* GraphQL */ `
  mutation CreateBasket(
    $input: CreateBasketInput!
    $condition: ModelBasketConditionInput
  ) {
    createBasket(input: $input, condition: $condition) {
      basketId
      startDate
      items {
        items {
          itemId
          title
          subtitle
          itemType
          premium
          createdAt
          updatedAt
        }
        nextToken
      }
      totalPremium
      createdAt
      updatedAt
    }
  }
`;
export const updateBasket = /* GraphQL */ `
  mutation UpdateBasket(
    $input: UpdateBasketInput!
    $condition: ModelBasketConditionInput
  ) {
    updateBasket(input: $input, condition: $condition) {
      basketId
      startDate
      items {
        items {
          itemId
          title
          subtitle
          itemType
          premium
          createdAt
          updatedAt
        }
        nextToken
      }
      totalPremium
      createdAt
      updatedAt
    }
  }
`;
export const deleteBasket = /* GraphQL */ `
  mutation DeleteBasket(
    $input: DeleteBasketInput!
    $condition: ModelBasketConditionInput
  ) {
    deleteBasket(input: $input, condition: $condition) {
      basketId
      startDate
      items {
        items {
          itemId
          title
          subtitle
          itemType
          premium
          createdAt
          updatedAt
        }
        nextToken
      }
      totalPremium
      createdAt
      updatedAt
    }
  }
`;
