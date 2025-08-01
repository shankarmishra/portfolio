// EmailJS Configuration
// 1. Sign up at https://www.emailjs.com/
// 2. Create a Gmail service and connect your email: xshankarmishra@gmail.com
// 3. Create an email template with the variables: user_name, user_email, message
// 4. Replace these values with your actual EmailJS credentials
export const emailConfig = {
  // Your EmailJS service ID (from Email Services tab)
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  
  // Your EmailJS template ID (from Email Templates tab)
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  
  // Your EmailJS public key (from Account → API Keys)
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  
  // Your email address where you'll receive messages
  toEmail: 'xshankarmishra@gmail.com'
}; 