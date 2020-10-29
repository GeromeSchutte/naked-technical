/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getItem = /* GraphQL */ `
  query GetItem($itemId: ID!) {
    getItem(itemId: $itemId) {
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
export const listItems = /* GraphQL */ `
  query ListItems(
    $itemId: ID
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listItems(
      itemId: $itemId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        itemId
        title
        subtitle
        itemType
        premium
        basket {
          basketId
          startDate
          totalPremium
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBasket = /* GraphQL */ `
  query GetBasket($basketId: ID!) {
    getBasket(basketId: $basketId) {
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
export const listBaskets = /* GraphQL */ `
  query ListBaskets(
    $basketId: ID
    $filter: ModelBasketFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBaskets(
      basketId: $basketId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        basketId
        startDate
        items {
          nextToken
        }
        totalPremium
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
