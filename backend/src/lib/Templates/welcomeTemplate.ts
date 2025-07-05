export const WELCOME_EMAIL_TEMPLATE = (userName: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to Giglance!</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
          <tr>
            <td style="background-color: #4CAF50; padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0;">Welcome to Giglance, ${userName || "there"}!</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              <p style="font-size: 16px; color: #333;">We’re excited to have you join the Giglance community!</p>
              
              <p style="font-size: 16px; color: #333;">
                Giglance helps you <strong>find gigs, manage freelance work, and connect with top clients</strong> — all in one place.
              </p>

              <p style="font-size: 16px; color: #333;">
                Get started by setting up your profile and exploring your dashboard.
              </p>

              <div style="text-align: center; margin: 30px 0;">
                <a href="https://giglance.com/dashboard" style="display: inline-block; background-color: #4CAF50; color: white; text-decoration: none; padding: 12px 24px; border-radius: 5px; font-weight: bold;">
                  Explore Dashboard
                </a>
              </div>

              <p style="font-size: 14px; color: #777;">
                If you’re having trouble viewing this email, please visit the platform directly at 
                <a href="https://giglance.com" style="color: #4CAF50;">https://giglance.com</a>.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f0f0f0; text-align: center; padding: 20px; font-size: 12px; color: #888;">
              <p>This is an automated message. Please do not reply.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;
