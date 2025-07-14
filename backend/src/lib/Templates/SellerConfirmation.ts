export const SELLER_CONFIRMATION_TEMPLATE = (formData: {
  fullName: string;
  email: string;
  phoneNumber?: string;
  location: string;
  profilePicture: string;
  
  skills: string[];
  yearsOfExperience: string;
  hourlyRate: number;
  availableHoursPerWeek?: number;
  aboutBio: string;
  resumePortfolioUrl: string;
  
  primaryCategory: string;
  subcategories?: string[];
  preferredProjectTypes?: string[];
  
  linkedIn?: string;
  githubPortfolio?: string;
  Portfolio?: string;
  twitterX?: string;
}) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seller Registration Confirmation</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; line-height: 1.6;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">Welcome to Our Platform!</h1>
            <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">Thank you for registering as a seller</p>
        </div>

        <!-- Main Content -->
        <div style="padding: 40px 30px;">
            
            <!-- Thank You Message -->
            <div style="text-align: center; margin-bottom: 40px;">
                <h2 style="color: #2d3748; margin: 0 0 15px 0; font-size: 24px; font-weight: 600;">Registration Received!</h2>
                <p style="color: #4a5568; margin: 0; font-size: 16px;">
                    Hi ${formData.fullName}, we've successfully received your seller registration request. 
                    Our team will review your application and get back to you within 2-3 business days.
                </p>
            </div>

            <!-- Registration Details -->
            <div style="margin-bottom: 40px;">
                <h3 style="color: #2d3748; margin: 0 0 20px 0; font-size: 20px; font-weight: 600; border-bottom: 3px solid #667eea; padding-bottom: 10px;">Your Registration Details</h3>
                
                <!-- Personal Details Section -->
                <div style="margin-bottom: 30px;">
                    <h4 style="color: #4a5568; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Personal Information</h4>
                    <table style="width: 100%; border-collapse: collapse; background-color: #f7fafc; border-radius: 8px; overflow: hidden;">
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #2d3748; background-color: #edf2f7; width: 40%;">Full Name</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; color: #4a5568;">${formData.fullName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #2d3748; background-color: #edf2f7;">Email Address</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; color: #4a5568;">${formData.email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #2d3748; background-color: #edf2f7;">Phone Number</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; color: #4a5568;">${formData.phoneNumber ?? 'Not provided'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #2d3748; background-color: #edf2f7;">Location</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; color: #4a5568;">${formData.location}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; font-weight: 600; color: #2d3748; background-color: #edf2f7;">Profile Picture</td>
                            <td style="padding: 12px 15px; color: #4a5568;">
                                <a href="${formData.profilePicture}" style="color: #667eea; text-decoration: none;">View Profile Picture</a>
                            </td>
                        </tr>
                    </table>
                </div>

                <!-- Professional Details Section -->
                <div style="margin-bottom: 30px;">
                    <h4 style="color: #4a5568; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Professional Details</h4>
                    <table style="width: 100%; border-collapse: collapse; background-color: #f7fafc; border-radius: 8px; overflow: hidden;">
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #2d3748; background-color: #edf2f7; width: 40%;">Skills</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; color: #4a5568;">${formData.skills.join(', ')}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #2d3748; background-color: #edf2f7;">Years of Experience</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; color: #4a5568;">${formData.yearsOfExperience}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #2d3748; background-color: #edf2f7;">About/Bio</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; color: #4a5568;">${formData.aboutBio}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; font-weight: 600; color: #2d3748; background-color: #edf2f7;">Resume/Portfolio</td>
                            <td style="padding: 12px 15px; color: #4a5568;">
                                <a href="${formData.resumePortfolioUrl}" style="color: #667eea; text-decoration: none;">View Resume/Portfolio</a>
                            </td>
                        </tr>
                    </table>
                </div>

                <!-- Social Links Section -->
                <div style="margin-bottom: 30px;">
                    <h4 style="color: #4a5568; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Social Links</h4>
                    <table style="width: 100%; border-collapse: collapse; background-color: #f7fafc; border-radius: 8px; overflow: hidden;">
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #2d3748; background-color: #edf2f7; width: 40%;">LinkedIn</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; color: #4a5568;">
                                ${formData.linkedIn ? `<a href="${formData.linkedIn}" style="color: #667eea; text-decoration: none;">${formData.linkedIn}</a>` : 'Not provided'}
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #2d3748; background-color: #edf2f7;">GitHub</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; color: #4a5568;">
                                ${formData.githubPortfolio ? `<a href="${formData.githubPortfolio}" style="color: #667eea; text-decoration: none;">${formData.githubPortfolio}</a>` : 'Not provided'}
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #2d3748; background-color: #edf2f7;">Portfolio</td>
                            <td style="padding: 12px 15px; border-bottom: 1px solid #e2e8f0; color: #4a5568;">
                                ${formData.Portfolio ? `<a href="${formData.Portfolio}" style="color: #667eea; text-decoration: none;">${formData.Portfolio}</a>` : 'Not provided'}
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 15px; font-weight: 600; color: #2d3748; background-color: #edf2f7;">Twitter/X</td>
                            <td style="padding: 12px 15px; color: #4a5568;">
                                ${formData.twitterX ? `<a href="${formData.twitterX}" style="color: #667eea; text-decoration: none;">${formData.twitterX}</a>` : 'Not provided'}
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <!-- Next Steps -->
            <div style="background-color: #edf2f7; padding: 25px; border-radius: 8px; border-left: 4px solid #667eea; margin-bottom: 30px;">
                <h4 style="color: #2d3748; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">What Happens Next?</h4>
                <ul style="color: #4a5568; margin: 0; padding-left: 20px;">
                    <li style="margin-bottom: 8px;">Our team will review your application within 2-3 business days</li>
                    <li style="margin-bottom: 8px;">We may contact you for additional information if needed</li>
                    <li style="margin-bottom: 8px;">Once approved, you'll receive login credentials and onboarding instructions</li>
                    <li>You'll be able to start creating your seller profile and listing services</li>
                </ul>
            </div>

            <!-- Contact Information -->
            <div style="text-align: center; padding: 20px 0; border-top: 1px solid #e2e8f0;">
                <p style="color: #4a5568; margin: 0 0 10px 0;">Have questions? We're here to help!</p>
                <p style="color: #4a5568; margin: 0;">
                    Email us at <a href="mailto:osoc25giglance@gmail.com" style="color: #667eea; text-decoration: none;">osoc25giglance@gmail.com</a>
                    or call us at <a href="tel:+1234567890" style="color: #667eea; text-decoration: none;">+91 9876545678</a>
                </p>
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #2d3748; padding: 30px; text-align: center;">
            <p style="color: #a0aec0; margin: 0 0 10px 0; font-size: 14px;">
                © 2025 Your Platform Name. All rights reserved.
            </p>
            <p style="color: #718096; margin: 0; font-size: 12px;">
                This email was sent to ${formData.email}. If you have any questions, please contact our support team.
            </p>
        </div>
    </div>
</body>
</html>
  `;
};

// Export interface for type safety
export interface SellerRegistrationData {
  // Personal Details
  fullName: string;
  email: string;
  phoneNumber?: string;
  location: string;
  profilePicture: string;
  
  // Professional Details
  skills: string[];
  yearsOfExperience: string;
  hourlyRate: number;
  availableHoursPerWeek?: number;
  aboutBio: string;
  resumePortfolioUrl: string;
  
  // Service Categories
  primaryCategory: string;
  subcategories?: string[];
  preferredProjectTypes?: string[];
  
  // Social Links
  linkedIn?: string;
  githubPortfolio?: string;
  twitterX?: string;
}
