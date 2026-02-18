export function GET() {
	return new Response("idk: " + process.env.DATABASE_URL);
}
