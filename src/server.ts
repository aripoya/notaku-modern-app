import { Hono } from 'hono';

// Define the type for the environment variables (bindings)
// Adjust this based on your actual Cloudflare bindings (KV, D1, etc.)
type Bindings = {
  // Example: If you have a KV namespace named 'NOTAKU_KV'
  // NOTAKU_KV: KVNamespace;
  // Example: If you have a D1 database named 'NOTAKU_DB'
  // NOTAKU_DB: D1Database;
}

const app = new Hono<{ Bindings: Bindings }>();

// Simple health check endpoint
app.get('/api/health', (c) => {
  return c.json({ status: 'ok', message: 'NotaKu API is running!' });
});

// --- Contact Form Endpoint --- 
app.post('/api/contact', async (c) => {
  try {
    const body = await c.req.json();
    console.log('Received contact form data:', body);

    // **TODO:** Implement actual data storage logic here
    // Example using KV (uncomment and adjust if KV binding exists):
    /*
    if (c.env.NOTAKU_KV) {
      const id = crypto.randomUUID();
      await c.env.NOTAKU_KV.put(`contact-${id}`, JSON.stringify(body), { 
        metadata: { submittedAt: new Date().toISOString() }
      });
      console.log(`Contact form data stored in KV with ID: contact-${id}`);
    } else {
      console.warn('KV binding NOTAKU_KV not found. Skipping data storage.');
    }
    */
   
    // **TODO:** Implement D1 storage if preferred

    return c.json({ success: true, message: 'Pesan Anda telah diterima!' });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return c.json({ success: false, message: 'Gagal mengirim pesan.' }, 500);
  }
});

// --- Newsletter Subscription Endpoint --- 
app.post('/api/newsletter', async (c) => {
    try {
      const body = await c.req.json();
      const email = body?.email;
  
      if (!email || typeof email !== 'string') {
        return c.json({ success: false, message: 'Alamat email tidak valid.' }, 400);
      }
  
      console.log('Received newsletter subscription:', email);
  
      // **TODO:** Implement actual data storage logic here (KV or D1)
      /*
      if (c.env.NOTAKU_KV) {
        await c.env.NOTAKU_KV.put(`newsletter-${email}`, JSON.stringify({ subscribedAt: new Date().toISOString() }));
        console.log(`Newsletter subscription for ${email} stored in KV.`);
      } else {
        console.warn('KV binding NOTAKU_KV not found. Skipping data storage.');
      }
      */
     
      // **TODO:** Implement D1 storage if preferred
  
      return c.json({ success: true, message: 'Terima kasih telah berlangganan!' });
  
    } catch (error) {
      console.error('Error processing newsletter subscription:', error);
      return c.json({ success: false, message: 'Gagal berlangganan.' }, 500);
    }
  });


// Serve the app using the Vite dev server adapter
export default app;
