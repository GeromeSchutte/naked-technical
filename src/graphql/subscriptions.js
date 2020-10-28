/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo {
    onUpdateTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo {
    onDeleteTodo {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($owner: String!) {
    onCreateItem(owner: $owner) {
      id
      itemId
      title
      subtitle
      itemType
      premium
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($owner: String!) {
    onUpdateItem(owner: $owner) {
      id
      itemId
      title
      subtitle
      itemType
      premium
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($owner: String!) {
    onDeleteItem(owner: $owner) {
      id
      itemId
      title
      subtitle
      itemType
      premium
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateBasket = /* GraphQL */ `
  subscription OnCreateBasket($owner: String!) {
    onCreateBasket(owner: $owner) {
      id
      basketId
      startDate
      items {
        id
        itemId
        title
        subtitle
        itemType
        premium
        createdAt
        updatedAt
        owner
      }
      totalPremium
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateBasket = /* GraphQL */ `
  subscription OnUpdateBasket($owner: String!) {
    onUpdateBasket(owner: $owner) {
      id
      basketId
      startDate
      items {
        id
        itemId
        title
        subtitle
        itemType
        premium
        createdAt
        updatedAt
        owner
      }
      totalPremium
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteBasket = /* GraphQL */ `
  subscription OnDeleteBasket($owner: String!) {
    onDeleteBasket(owner: $owner) {
      id
      basketId
      startDate
      items {
        id
        itemId
        title
        subtitle
        itemType
        premium
        createdAt
        updatedAt
        owner
      }
      totalPremium
      createdAt
      updatedAt
      owner
    }
  }
`;
