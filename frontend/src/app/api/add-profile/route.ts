import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const icon = searchParams.get('icon');
  const title = searchParams.get('title');
  const context = searchParams.get('context');

  try {
    if (!icon || !title || !context) throw new Error('All fields are required');
    await sql`INSERT INTO Profile (Icon, Title, Context) VALUES (${icon}, ${title}, ${context});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const data = await sql`SELECT * FROM Profile;`;
  return NextResponse.json({ data }, { status: 200 });
}
