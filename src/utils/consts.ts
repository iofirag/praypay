export const CollectionsNames = {
  User: 'user',
  Synagogue: 'synagogue',
  Member: 'member',
  Role: 'role',
  Debt: 'debt',
  Payment: 'payment',
  Counter: 'counter',
};

export enum DBConnectionStatusEnum {
  'disconnected' = 0,
  'connected' = 1,
  'connecting' = 2,
  'disconnecting' = 3,
};
