/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
export const onCreateBasket = /* GraphQL */ `
  subscription OnCreateBasket {
    onCreateBasket {
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
export const onUpdateBasket = /* GraphQL */ `
  subscription OnUpdateBasket {
    onUpdateBasket {
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
export const onDeleteBasket = /* GraphQL */ `
  subscription OnDeleteBasket {
    onDeleteBasket {
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
