export const SELLER_CONFIRMATION_TEMPLATE = (
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
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Thank you for registering</title>
  </head>
  <body
    style="
      font-family: Arial, sans-serif;
      margin-inline: auto;
      padding-block: 2rem;
      background-color: #f4f4f4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    "
  >
    <div
      style="
        background-color: #4caf50;
        padding: 30px;
        width: 700px;
        margin-inline: auto;
        margin-bottom: 2rem;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
      "
    >
      <img
        src="https://osoc-25-giglance.netlify.app/logo.png"
        alt="Giglance Logo"
        width="50"
        height="50"
      />
      <h1 style="text-align: center; color: white">
        Thank you for registering in Giglance!
      </h1>
    </div>
    <h1 style="color: black; margin: 0; text-align: center; margin-block: 2rem">
      Hey ${userName} 👋 We have received your request.
    </h1>
    <h2 style="color: black; margin: 0; text-align: left; margin-block: 2rem">
      You submitted the following details:
    </h2>
    <div
      style="
        display: flex;
        flex-direction: column;
        gap: 3rem;
        margin-inline: auto;
      "
    >
      <div style="border: 1px solid black; border-radius: 2rem; padding: 2rem">
        <h2>Personal Details</h2>
        <div style="margin-bottom: 1rem; width: auto; text-wrap: nowrap">
          <span style="margin-right: 10px"><strong>Full Name : </strong></span
          ><span>${fullName}</span>
        </div>
        <div style="margin-bottom: 1rem; width: auto; text-wrap: nowrap">
          <span style="margin-right: 10px"><strong>Email : </strong></span
          ><span>${email}</span>
        </div>
        <div style="margin-bottom: 1rem; width: auto; text-wrap: nowrap">
          <span style="margin-right: 10px"
            ><strong>Phone Number : </strong></span
          ><span>${phoneNumber ?? ''}</span>
        </div>
        <div style="margin-bottom: 1rem; width: auto; text-wrap: nowrap">
          <span style="margin-right: 10px"><strong>Location : </strong></span
          ><span>${location}</span>
        </div>
        <div style="margin-bottom: 1rem; width: auto; text-wrap: nowrap">
          <span style="margin-right: 10px"
            ><strong>Profile Picture : </strong></span
          ><span>${profilePicture}</span>
        </div>
      </div>
      <div style="border: 1px solid black; border-radius: 2rem; padding: 2rem">
        <h2>Professional Details</h2>
        <div style="margin-bottom: 1rem; width: auto; text-wrap: nowrap">
          <span style="margin-right: 10px"><strong>Skills : </strong></span
          ><span>${skills}</span>
        </div>
        <div style="margin-bottom: 1rem; width: auto; text-wrap: nowrap">
          <span style="margin-right: 10px"
            ><strong>Years of Experience : </strong></span
          ><span>${experience}</span>
        </div>
        <div style="margin-bottom: 1rem; width: auto; text-wrap: nowrap">
          <span style="margin-right: 10px"
            ><strong>Hourly Rate (in ₹) : </strong></span
          ><span>${hourlyRate}</span>
        </div>
        <div style="margin-bottom: 1rem; width: auto; text-wrap: nowrap">
          <span style="margin-right: 10px"
            ><strong>Available Hours/Week : </strong></span
          ><span>${availableHours ?? ''}</span>
        </div>
        <div style="margin-bottom: 1rem; text-wrap: wrap">
          <span style="margin-right: 10px"><strong>About/Bio : </strong></span
          ><span>${bio}</span>
        </div>
        <div style="margin-bottom: 1rem; width: auto; text-wrap: nowrap">
          <span style="margin-right: 10px"
            ><strong>Resume/Portfolio URL : </strong></span
          ><span>${resume}</span>
        </div>
      </div>

      <div style="border: 1px solid black; border-radius: 2rem; padding: 2rem">
        <h2>Service Categories</h2>
        <div style="margin-bottom: 1rem; width: auto; text-wrap: nowrap">
          <span style="margin-right: 10px"
            ><strong>Primary Category : </strong></span
          ><span>${primaryCategory}</span>
        </div>
        <div style="margin-bottom: 1rem; width: auto; text-wrap: nowrap">
          <span style="margin-right: 10px"
            ><strong>Subcategories : </strong></span
          ><span>${subCategories ?? ''}</span>
        </div>
        <div style="margin-bottom: 1rem; width: auto; text-wrap: nowrap">
          <span style="margin-right: 10px"
            ><strong>Preferred Project Types : </strong></span
          ><span>${projectTypes ?? ''}</span>
        </div>
      </div>
      <div style="border: 1px solid black; border-radius: 2rem; padding: 2rem">
        <h2>Social Links</h2>
        <div style="margin-bottom: 1rem; width: auto; text-wrap: nowrap">
          <span style="margin-right: 10px"><strong>LinkedIn : </strong></span
          ><span>${linkedin ?? ''}</span>
        </div>
        <div style="margin-bottom: 1rem; width: auto; text-wrap: nowrap">
          <span style="margin-right: 10px"
            ><strong>GitHub/Portfolio : </strong></span
          ><span>${github ?? ''}</span>
        </div>
        <div style="margin-bottom: 1rem; width: auto; text-wrap: nowrap">
          <span style="margin-right: 10px"><strong>Twitter/X : </strong></span
          ><span>${twitter ?? ''}</span>
        </div>
      </div>
    </div>
  </body>
</html>

`;
