// File: app/api/subscribe/route.ts
import { NextResponse } from 'next/server';
import crypto from 'crypto';
console.log('API_KEY:', process.env.MAILCHIMP_API_KEY);
console.log('AUDIENCE_ID:', process.env.MAILCHIMP_AUDIENCE_ID);


export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const DATACENTER = API_KEY?.split('-')[1];

    if (!API_KEY || !AUDIENCE_ID || !DATACENTER) {
      return NextResponse.json(
        { error: 'Mailchimp not configured properly' },
        { status: 500 }
      );
    }

    const subscriberHash = crypto
      .createHash('md5')
      .update(email.toLowerCase())
      .digest('hex');

    // Try creating/updating the subscriber
    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${subscriberHash}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status_if_new: 'subscribed',
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('Mailchimp error:', data); // Log full error in server console
      return NextResponse.json(
        { error: data.detail || 'Subscription failed', mailchimp: data },
        { status: response.status }
      );
    }

    // Tag the subscriber
    await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members/${subscriberHash}/tags`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tags: [{ name: 'FYNX-waitlist', status: 'active' }],
        }),
      }
    );

    return NextResponse.json({ message: 'Successfully subscribed!' }, { status: 200 });
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
