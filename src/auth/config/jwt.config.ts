import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => {
  return {
    secret: 'secret',
    audience: 'localhost:8080',
    issuer: 'localhost:8080',
    accessTokenTtl: 3600,
  };
});
