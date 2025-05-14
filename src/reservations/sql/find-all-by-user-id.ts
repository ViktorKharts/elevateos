export const findAllByUserIdQuery = (userId: number) => `
      SELECT * 
      FROM reservation AS r
      WHERE r.user_id = ${userId}
      GROUP BY r.id, r.date;
`;
