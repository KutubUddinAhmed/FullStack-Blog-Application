"use server"
const url = "http://localhost:4000/blog";
export const submitFormAction = async (e: any) => {
    console.log("my E:", e.get('blogImage'));
    console.log("Featured results: ", e.get("is_featured"))

    // Create a new FormData object
    const formData = new FormData();

    // Append fields to formData, including the image
    formData.append("title", e.get("title"));
    formData.append("author", e.get("author"));
    formData.append("category", e.get("category"));
    formData.append("content", e.get("content"));
    formData.append("is_featured_blog", e.get("is_featured_blog"));
    
    // Assuming 'blogImage' is the input field name for the file
    formData.append("blogImage", e.get("blogImage"));

    try {
        // Send the formData without setting Content-Type, fetch will handle it
        const response = await fetch(url, {
            method: "POST",
            body: formData,  // Send formData directly
        });

        // Check if the response is OK (status 2xx)
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
