import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getUserGuilds, hasAdmin } from '@/lib/discord';
import { bridge } from '@/lib/bridge';
import { NextResponse } from 'next/server';

const EDITABLE = ['description', 'inviteLink', 'tags', 'language', 'nsfw'];

async function guard(guildId) {
  const session = await getServerSession(authOptions);
  if (!session) { const e = new Error('unauthenticated'); e.status = 401; throw e; }
  const guilds = await getUserGuilds(session.accessToken);
  const guild = guilds.find((g) => g.id === guildId);
  if (!guild || !hasAdmin(guild.permissions)) { const e = new Error('forbidden'); e.status = 403; throw e; }
  return guild;
}

export async function GET(req, { params }) {
  try {
    await guard(params.guildId);
    const data = await bridge.getServerConfig(params.guildId);
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: err.status || 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    await guard(params.guildId);
    const body = await req.json();
    const patch = {};
    for (const field of EDITABLE) {
      if (Object.prototype.hasOwnProperty.call(body, field)) patch[field] = body[field];
    }
    const data = await bridge.putServerConfig(params.guildId, patch);
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: err.status || 500 });
  }
}
