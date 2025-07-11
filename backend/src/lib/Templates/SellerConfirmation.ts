export const WELCOME_EMAIL_TEMPLATE = (
  userName: string,
  fullName: string,
  email: string,

  location: string,
  profilePicture: string,
  skills: string,
  experience: string,
  hourlyRate: number,
  bio: string,
  resume: string,
  primaryCategory: string,
  phoneNumber?: string,
  availableHours?: number,
  subCategories?: string,
  projectTypes?: string,
  linkedin?: string,
  github?: string,
  twitter?: string,
) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Thank you for registering</title>
</head>
<body style="font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f4;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
          <table>
            <tr>
                <td style="background-color: #4CAF50; padding: 30px; text-align: center;">
                    <h1 style="color: white; margin: 0;">Thank you for registering with Giglance!, ${userName || 'there'}!</h1>
                </td>
            </tr>
            <tr>
                <td style="background-color: #4CAF50; padding: 30px; text-align: center;">
                <h1 style="color: white; margin: 0;">We have recieved your request.</h1>
                </td>
            </tr>
            </table>

          <table>
          <tr>
            <th style="padding: 30px;">Personal Details</th>
          </tr>
          <tr>
            <td style="padding: 30px;">
              Full Name : ${fullName}
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              Email : ${email}
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              Phone Number : ${phoneNumber ?? ''}
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              Location : ${location}
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              Profile Picture : ${profilePicture}
            </td>
          </tr>
          </table>

          <table>
          <tr>
            <th style="padding: 30px;">Professional Details</th>
          </tr>
          <tr>
            <td style="padding: 30px;">
              Skills : ${skills}
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              Years of Experience : ${experience}
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              Hourly Rate (in ₹) : ${hourlyRate}
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              Available Hours/Week : ${availableHours ?? ''}
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              About/Bio : ${bio}
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              Resume/Portfolio URL : ${resume}
            </td>
          </tr>
          </table>

          <table>
          <tr>
            <th style="padding: 30px;">Service Categories</th>
          </tr>
          <tr>
            <td style="padding: 30px;">
              Primary Category : ${primaryCategory}
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              Subcategories : ${subCategories ?? ''}
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              Preferred Project Types : ${projectTypes ?? ''}
            </td>
          </tr>
          </table>

          <table>
          <tr>
            <th style="padding: 30px;">Social Links</th>
          </tr>
          <tr>
            <td style="padding: 30px;">
              Linkedin : ${linkedin ?? ''}
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              Github/Portfolio : ${github ?? ''}
            </td>
          </tr>
          <tr>
            <td style="padding: 30px;">
              Twitter/X : ${twitter ?? ''}
            </td>
          </tr>
          </table>

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
