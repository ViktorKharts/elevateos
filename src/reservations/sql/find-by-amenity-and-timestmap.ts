export const amenityIdAndTimestampQuery = (
  amenityId: number,
  timestamp: string,
) => `
      SELECT r.id, r.user_id, r.date, a.name
      FROM reservation AS r
      LEFT JOIN amenity AS a
      ON r.amenity_id = a.id
      WHERE r.amenity_id = ${amenityId} AND r.date = '${timestamp}';
`;
