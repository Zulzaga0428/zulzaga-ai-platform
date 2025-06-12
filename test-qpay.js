// Using Node.js built-in fetch (available in Node 18+)

async function testQPay() {
  const username = process.env.QPAY_MERCHANT_USERNAME;
  const password = process.env.QPAY_MERCHANT_PASSWORD;
  const invoiceCode = process.env.QPAY_INVOICE_CODE;

  console.log('Testing QPay with credentials:', {
    username: username?.substring(0, 5) + '***',
    password: password?.substring(0, 3) + '***',
    invoiceCode: invoiceCode?.substring(0, 5) + '***'
  });

  const credentials = `${username}:${password}`;
  const base64Credentials = Buffer.from(credentials).toString('base64');

  const invoiceData = {
    invoice_code: invoiceCode,
    sender_invoice_no: 'TEST_' + Date.now(),
    amount: 1000,
    callback_url: "https://zulzaga-ai.pro/api/payment/callback",
    invoice_description: "QPay Test Payment",
    sender_branch_code: "BRANCH1",
    invoice_receiver_code: "terminal"
  };

  try {
    const response = await fetch('https://merchant.qpay.mn/v2/invoice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${base64Credentials}`
      },
      body: JSON.stringify(invoiceData)
    });

    const result = await response.text();
    console.log('QPay Response Status:', response.status);
    console.log('QPay Response:', result);

    if (response.ok) {
      console.log('✅ QPay integration working!');
    } else {
      console.log('❌ QPay integration failed');
    }
  } catch (error) {
    console.error('QPay test error:', error.message);
  }
}

testQPay();