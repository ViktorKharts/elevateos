export const findAllByUserIdQuery = (userId: number) => `
      SELECT * 
      FROM reservation AS r
      WHERE r."userId" = ${userId}
      GROUP BY r.id, r."startedAt";
`;
