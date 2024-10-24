"use client";

import { useEffect, useState } from "react";

// Define the URL for fetching data
const url = "http://localhost:4000/contact";

export default function FeedBackContact() {
  // Local state to store fetched data
  const [feedBackData, setFeedbackData]: any = useState();

  useEffect(() => {
    // Fetch the data when the component is mounted
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFeedbackData(data);
      } catch (error) {
        console.error("Error fetching feedback data:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures the fetch happens only once when the component mounts

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6">
      {feedBackData?.map((contact: any) => {
        return (
          <div className="" key={contact._id}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                {contact.first_name} {contact.last_name}
              </h2>
              <span className="text-sm text-gray-500">
                {new Date(contact.createdAt).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> {contact.email}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Phone:</strong> {contact.phone_number}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Details:</strong> {contact.details}
            </p>
          </div>
        );
      })}
    </div>
  );
}
