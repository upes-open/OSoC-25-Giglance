/**
 * CONTACT_USER_TEMPLATE:
 * This template is sent to the user who submitted the contact form.

 * Placeholders:
 * - {firstName}: The first name of the user.
 */
export const CONTACT_USER_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giglance - Message Received</title>
    <style>
        /* Basic reset for email clients */
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        /* Mobile-specific styles */
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
            }
            .content-padding {
                padding: 15px !important;
            }
            .header-padding {
                padding: 15px !important;
            }
            h1 {
                font-size: 24px !important;
            }
            p {
                font-size: 14px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif; -webkit-font-smoothing: antialiased; width: 100% !important;">
    <!-- Fallback message for non-HTML viewers -->
    <div style="display:none;font-size:1px;color:#fefefe;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;">
        Thank you for contacting Giglance! We've received your message and will respond shortly.
    </div>

    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <table border="0" cellpadding="0" cellspacing="0" width="600" class="email-container" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td align="center" style="background-color: #007bff; padding: 25px 20px; color: #ffffff; border-top-left-radius: 8px; border-top-right-radius: 8px;" class="header-padding">
                            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">Message Received</h1>
                        </td>
                    </tr>
                    <!-- Content -->
                    <tr>
                        <td style="padding: 20px 30px;" class="content-padding">
                            <p style="margin-top: 0; margin-bottom: 15px; font-size: 16px; line-height: 1.6; color: #333333;">Hello {firstName},</p>
                            <p style="margin-bottom: 15px; font-size: 16px; line-height: 1.6; color: #333333;">Thank you for contacting Giglance!</p>
                            <p style="margin-bottom: 15px; font-size: 16px; line-height: 1.6; color: #333333;">We've successfully received your message and appreciate you reaching out to us.</p>
                            <p style="margin-bottom: 20px; font-size: 16px; line-height: 1.6; color: #333333;">Our team will review your inquiry and get back to you as soon as possible. We aim to respond within 24-48 business hours.</p>
                            <p style="margin-bottom: 0; font-size: 16px; line-height: 1.6; color: #333333;">Best regards,<br>The Giglance Team</p>
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td align="center" style="background-color: #f9f9f9; padding: 20px 30px; font-size: 12px; color: #777777; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                            <p style="margin: 0;">This is an automated message, please do not reply directly to this email.</p>
                            <p style="margin: 5px 0 0;">&copy; 2025 Giglance. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

/**
 * CONTACT_ADMIN_TEMPLATE:
 * This template is sent to the Giglance platform administrators.

 * Placeholders:
 * - {firstName}: The first name of the user.
 * - {lastName}: The last name of the user.
 * - {email}: The email address of the user.
 * - {message}: The message submitted by the user.
 */
export const CONTACT_ADMIN_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giglance - New Contact Form Submission</title>
    <style>
        /* Basic reset for email clients */
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        /* Mobile-specific styles */
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
            }
            .content-padding {
                padding: 15px !important;
            }
            .header-padding {
                padding: 15px !important;
            }
            h1 {
                font-size: 24px !important;
            }
            p, .data-label, .data-value {
                font-size: 14px !important;
            }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif; -webkit-font-smoothing: antialiased; width: 100% !important;">
    <!-- Fallback message for non-HTML viewers -->
    <div style="display:none;font-size:1px;color:#fefefe;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;mso-hide:all;">
        New contact form submission received on Giglance!
    </div>

    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <table border="0" cellpadding="0" cellspacing="0" width="600" class="email-container" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td align="center" style="background-color: #28a745; padding: 25px 20px; color: #ffffff; border-top-left-radius: 8px; border-top-right-radius: 8px;" class="header-padding">
                            <h1 style="margin: 0; font-size: 28px; font-weight: bold;">New Contact Form Submission</h1>
                        </td>
                    </tr>
                    <!-- Content -->
                    <tr>
                        <td style="padding: 20px 30px;" class="content-padding">
                            <p style="margin-top: 0; margin-bottom: 20px; font-size: 16px; line-height: 1.6; color: #333333;">A new message has been submitted through the Giglance contact form. Details are below:</p>

                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">
                                        <span class="data-label" style="font-weight: bold; color: #555555; font-size: 16px;">First Name:</span>
                                        <span class="data-value" style="color: #333333; font-size: 16px;"> {firstName}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">
                                        <span class="data-label" style="font-weight: bold; color: #555555; font-size: 16px;">Last Name:</span>
                                        <span class="data-value" style="color: #333333; font-size: 16px;"> {lastName}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0; border-bottom: 1px solid #eeeeee;">
                                        <span class="data-label" style="font-weight: bold; color: #555555; font-size: 16px;">Email:</span>
                                        <span class="data-value" style="color: #007bff; text-decoration: none; font-size: 16px;"><a href="mailto:{email}" style="color: #007bff; text-decoration: none;"> {email}</a></span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 8px 0;">
                                        <span class="data-label" style="font-weight: bold; color: #555555; font-size: 16px;">Message:</span>
                                        <p class="data-value" style="margin-top: 5px; margin-bottom: 0; color: #333333; font-size: 16px; line-height: 1.6; background-color: #f9f9f9; padding: 10px; border-radius: 4px; border: 1px solid #e0e0e0;">{message}</p>
                                    </td>
                                </tr>
                            </table>

                            <p style="margin-bottom: 0; font-size: 16px; line-height: 1.6; color: #333333;">Please review this submission and respond as necessary.</p>
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td align="center" style="background-color: #f9f9f9; padding: 20px 30px; font-size: 12px; color: #777777; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                            <p style="margin: 0;">This is an automated notification from Giglance.</p>
                            <p style="margin: 5px 0 0;">&copy; 2025 Giglance. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;
