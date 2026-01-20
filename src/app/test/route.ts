export async function GET() {
  const response = await fetch(`${process.env.NEWS_URL}0/20`);
  const data = await response.text();
  return Response.json(data);
}
