const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4001';

export async function POST(request: Request) {
  const body = await request.text();

  const upstream = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
    cache: 'no-store',
  });

  const text = await upstream.text();

  const headers = new Headers();
  const contentType = upstream.headers.get('content-type');
  const setCookie = upstream.headers.get('set-cookie');

  if (contentType) {
    headers.set('content-type', contentType);
  }

  if (setCookie) {
    headers.set('set-cookie', setCookie);
  }

  return new Response(text, {
    status: upstream.status,
    headers,
  });
}
