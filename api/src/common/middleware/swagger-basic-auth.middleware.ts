export function swaggerBasicAuthMiddleware(user: string, pass: string) {
  const trimmedUser = user.trim();
  const trimmedPass = pass.trim();
  const basic =
    'Basic ' + Buffer.from(`${trimmedUser}:${trimmedPass}`).toString('base64');

  return (req: any, res: any, next: any) => {
    if (req.path.startsWith('/api-docs')) {
      const auth = req.headers.authorization;
      if (auth === basic) {
        return next();
      }

      res.set('WWW-Authenticate', 'Basic realm="Swagger"');
      return res.status(401).send('Authentication required.');
    }

    next();
  };
}
