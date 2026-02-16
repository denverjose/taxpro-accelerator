
'use client';

const SendEmailButton: React.FC = () => {

  const handleClick = async () => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: 'jtollinchi1971@gmail.com' }),
      });

      if (response.ok) {
        
        alert('Email sent successfully!');
      } else {
        alert('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div>
        <button
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded"
        >
        Send Email
        </button>
    </div>
  );
};

export default SendEmailButton;
