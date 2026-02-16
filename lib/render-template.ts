

import { SendConfirmationEmailProps } from './types';

export function renderConfirmationEmail({ name, documentUploadUrl, serviceAgreementUrl, productName }: SendConfirmationEmailProps ) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Welcome to Your Accelerated Business Growth</title>
            <style>
            body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                margin: 0;
                padding: 0;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 800px;
                margin: 20px auto;
                padding: 20px;
                background: #fff;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .center {
                color: #333;
                text-align: center;
            }
            p {
                margin-bottom: 15px;
            }
            ul {
                margin-bottom: 20px;
                padding-left: 20px;
            }
            a {
                color: #007bff;
                text-decoration: none;
            }
            a:hover {
                text-decoration: underline;
            }
            footer {
                margin-top: 20px;
                padding: 10px;
                background: #fff;
                border-top: 1px solid #ddd;
                text-align: center;
            }
            .footer-logo {
                width: 150px;
                height: auto;
            }
            </style>
        </head>
        <body>
            <div class="container">
            <div class="center">
                <img
                src="https://taxproaccelerator.com/static/media/logo.3cb91a90d1d392e221b1.webp"
                alt="TaxPro Accelerator Logo"
                class="footer-logo"
                />
                <h1>Welcome!</h1>
                <h2>Next Steps To Setup Your Software</h2>
            </div>
            <p>
                Hi ${name}! We wanted to welcome you to your accelerated business
                growth. We're excited that you are entering this part of your business
                journey with us and we will help you learn and grow so that you can
                expand your business.
            </p>

            <p>
                Here are a few steps to ensure that we can set up your software app
                ASAP. Completion and accuracy of the information is what's really going
                to drive the setup.
            </p>

            <p>
                We use Jotform with high-level encryption to protect your data. The
                intake form and the Service Contract are both completed through Jotform.
            </p>

            <ul>
                <li>
                We need your information to create your Tax Software. Please click on
                <a
                    href="${documentUploadUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    >TaxPro Accelerator Document Upload</a
                >
                and submit the form to start your software build. You will need to
                upload some documents, but again our forms are encrypted so your data
                is secured.
                </li>
                <li>
                Click on the
                <a
                    href="${serviceAgreementUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                    >${productName} Service Agreement</a
                >
                link and fill out the information, initial, and sign it. You will
                receive a signed copy via email right after you complete it.
                </li>
            </ul>

            <p>
                We look forward to working with you to take your business to the next
                level. Let us know if you have any questions, and we can't wait to work
                with you!
            </p>
            <p>
                We look forward to working with you and taking your business to the next
                level. Let us know if you have any questions during the process.
            </p>
            </div>

            <footer class="container">
            <img
                src="https://taxproaccelerator.com/static/media/logo.3cb91a90d1d392e221b1.webp"
                alt="TaxPro Accelerator Logo"
                class="footer-logo"
            />
            <p>
                Copyright (C) <span id="current-year"></span> TaxPro Accelerator. All
                rights reserved.
            </p>
            </footer>
            <script>
            // Set the current year dynamically
                document.getElementById("current-year").textContent = new Date().getFullYear();
            </script>
        </body>
        </html>
    `;
  }
  