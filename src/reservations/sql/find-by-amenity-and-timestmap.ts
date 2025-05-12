export const amenityIdAndTimestampQuery = (
  amenityId: number,
  timestamp: number,
) => `
      SELECT r.id, r."userId", r."startedAt", r.duration, a.name
      FROM reservation AS r
      LEFT JOIN amenity AS a
      ON r."amenityId" = a.id
      WHERE r."amenityId" = ${amenityId} AND r."startedAt" = ${timestamp};
`;

