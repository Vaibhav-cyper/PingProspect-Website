interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<Response> => {
  try {
    const response = await fetch("https://pingprospect-air.gvaibhav2435.workers.dev/websitesupport", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              "Full Name": data.fullName,
              "Email": data.email,
              "Subject": data.subject,
              "Message": data.message
            },
          },
        ],
      }),
    });

    if (!response.ok) {
      let errorMessage = 'Failed to submit form';
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } catch {
        // If parsing JSON fails, use default error message
      }
      throw new Error(errorMessage);
    }

    return await  response;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};