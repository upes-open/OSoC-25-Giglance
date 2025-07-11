/**
 * CONTACT_USER_TEMPLATE:
 * This template is sent to the admin when a new user registered.
 */

 export const SELLER_REGISTRATION_ADMIN_TEMPLATE = `
 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Giglance - New Seller Registration</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
          <tr>
            <td style="background-color: #eeb701; padding: 25px 20px; color: #ffffff; text-align: center;">
              <h1 style="margin: 0; font-size: 26px;">New Seller Registered</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 20px 30px; color: #333333; font-size: 16px;">
              <p style="margin-top: 0;">Hello Admin,</p>
              <p>A new user has registered and submitted their seller registration form.</p>
              <p>Please find the details below:</p>
            </td>
          </tr>
          
          <!-- Seller Info Table -->
           <!-- Personal Details -->
           <tr>
               <td style="padding: 0 30px 5px 30px;"><h4> Personal Details</h4></td>
            </tr>
          <tr>
            <td style="padding: 0 30px 20px 30px;">
              <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
                <tr>
                  <td style="width: 200px; font-weight: bold; background-color: #f2f2f2; border: 1px solid #ddd;">Full Name</td>
                  <td style="border: 1px solid #ddd;">{Full name}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; background-color: #f2f2f2; border: 1px solid #ddd;">Email</td>
                  <td style="border: 1px solid #ddd;">{Email}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; background-color: #f2f2f2; border: 1px solid #ddd;">Phone Number</td>
                  <td style="border: 1px solid #ddd;">{Phone Number}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; background-color: #f2f2f2; border: 1px solid #ddd;">Location</td>
                  <td style="border: 1px solid #ddd;">{Location}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; background-color: #f2f2f2; border: 1px solid #ddd;">Profile Picturess</td>
                  <td style="border: 1px solid #ddd;">{Profile Picture}</td>
                </tr>
              </table>
              <!-- Professional Details -->
           <tr>
               <td style="padding: 0 30px 5px 30px;"><h4> Professional Details</h4></td>
            </tr>
          <tr>
            <td style="padding: 0 30px 20px 30px;">
              <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
                <tr>
                  <td style="width: 200px; font-weight: bold; background-color: #f2f2f2; border: 1px solid #ddd;">Skills</td>
                  <td style="border: 1px solid #ddd;">{Skills}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; background-color: #f2f2f2; border: 1px solid #ddd;">Years of Experience</td>
                  <td style="border: 1px solid #ddd;">{Years of Experience}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; background-color: #f2f2f2; border: 1px solid #ddd;">Hourly Rate (in Rs)</td>
                  <td style="border: 1px solid #ddd;">{Hourly Rate}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; background-color: #f2f2f2; border: 1px solid #ddd;">Available Hours/Week</td>
                  <td style="border: 1px solid #ddd;">{Available Hours/Week}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; background-color: #f2f2f2; border: 1px solid #ddd;">About / Bio</td>
                  <td style="border: 1px solid #ddd;">{About / Bio}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; background-color: #f2f2f2; border: 1px solid #ddd;">Resume / Portfolio URL</td>
                  <td style="border: 1px solid #ddd;">{URL}</td>
                </tr>
              </table>
              <!--Service Categories -->
           <tr>
               <td style="padding: 0 30px 5px 30px;"><h4> Service Categories</h4></td>
            </tr>
          <tr>
            <td style="padding: 0 30px 20px 30px;">
              <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
                <tr>
                  <td style="width: 200px; font-weight: bold; background-color: #f2f2f2; border: 1px solid #ddd;">Primary Category</td>
                  <td style="border: 1px solid #ddd;">{Primary Category}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; background-color: #f2f2f2; border: 1px solid #ddd;">Subcategories</td>
                  <td style="border: 1px solid #ddd;">{Subcategories}</td>
                </tr>Date
                <tr>
                  <td style="font-weight: bold; background-color: #f2f2f2; border: 1px solid #ddd;">Preferred Project Types</td>
                  <td style="border: 1px solid #ddd;">{Preferred Project Types}</td>
                </tr>
              </table>
              <!-- Social Links -->
           <tr>
               <td style="padding: 0 30px 5px 30px;"><h4> Social Links</h4></td>
            </tr>
          <tr>
            <td style="padding: 0 30px 20px 30px;">
              <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
                <tr>
                  <td style="width: 200px; font-weight: bold; background-color: #f2f2f2; border: 1px solid #ddd;">LinkedIn</td>
                  <td style="border: 1px solid #ddd;">{URL}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; background-color: #f2f2f2; border: 1px solid #ddd;">GitHub / Portfolio</td>
                  <td style="border: 1px solid #ddd;">{URL}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold; background-color: #f2f2f2; border: 1px solid #ddd;">Twitter / X</td>
                  <td style="border: 1px solid #ddd;">{URL}</td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #f9f9f9; padding: 20px 30px; font-size: 12px; color: #777777; text-align: center;">
              <p style="margin: 0;">This is an automated notification from Giglance.</p>
              <p style="margin: 5px 0 0;">© 2025 Giglance. All rights reserved.</p>
            </td>
          </tr>
          <tr>
          <td>
              <p style="margin: 20px 20px 20px 20px;"> You can view or manage this seller’s registration from the admin dashboard:<br><br>
              <a href="https://your-admin-dashboard-link.com" style="color: #2E86C1; text-decoration: none; margin-left:200px;">
              Dashboard
              </a>
              </p>
  
          </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html> 
`;
