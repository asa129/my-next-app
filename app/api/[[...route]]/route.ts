export async function GET(request: Request) {
  const url = request.url;
  return new Response(url);
}
