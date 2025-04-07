export const addSubscriber = async (fullName: string, email: string): Promise<any> => {
  try {
    const response = await fetch("https://pingprospect-air.gvaibhav2435.workers.dev/addsubscriber", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specifies JSON data
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              "Full Name": fullName, // Corrected to fullName
              "Email": email,
            },
          },
        ],
      }), // Data sent in the body
    });

    if (response.ok) {
      console.log("Data saved successfully!");
      return await response; // Return the response if needed
    } else {
      const errorText = await response.text();
      console.error("Failed to save data:", errorText);
      throw new Error(`Failed to save data: ${errorText}`); // Throw an error for non-OK responses
    }
  } catch (error) {
    console.error("Error:", error);
    throw error; // Re-throw the error for the caller to handle
  }
};
