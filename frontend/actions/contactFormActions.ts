"use server"
const url = "http://localhost:4000/contact";
export const contactFormData = async (e: any) => {
    console.log("my E:", e)
    // console.log("Featured results: ", e.get("is_featured"))

    // Create a new FormData object
     const formData = {
        first_name: e.get("first_name"),
        last_name: e.get("last_name"),
        email: e.get("email"),
        phone_number: e.get("phone_number"),
        details: e.get("details"),
    };
    
    try {
        // Send the formData without setting Content-Type, fetch will handle it
        const response = await fetch(url, {
            method: "POST",
             headers: {
                "Content-Type": "application/json", // Set the content type to JSON
            },
            body: JSON.stringify(formData),  // Send formData directly
        });

        // Check if the response is OK
        if (!response.ok) {
            // If not, log the error and return
            const errorText = await response.text();
            console.error("Error from server:", errorText);
            return;
        }

        // Try to parse the response as JSON
        const result = await response.json();
   
        console.log(result);
    } catch (err) {
        // Handle any network or other errors
        console.error("Fetch error:", err);
    }
};


