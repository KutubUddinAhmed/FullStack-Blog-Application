import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ApiCards from "../ApiCards";

function AddBlogs() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    content: "",
    is_featured_blog: false,
    blogImage: null, // To store file input
  });

  const handleInputChange = (e: any) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData((prevData) => ({
        ...prevData,
        blogImage: files[0], // Store the file selected
      }));
    } else if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = new FormData();

    // Append all form fields to the FormData object
    data.append("title", formData.title);
    data.append("author", formData.author);
    data.append("category", formData.category);
    data.append("content", formData.content);
    data.append("is_featured_blog", formData.is_featured_blog);
    if (formData.blogImage) {
      data.append("blogImage", formData.blogImage);
    }

    try {
      const response = await fetch("http://localhost:4000/blog", {
        method: "POST",
        body: data, // Send FormData object
      });

      if (response.ok) {
        setTriggerFetchBlogs(!triggerFetchBlogs);
        console.log("Blog added successfully");
        // You can handle successful response (like redirecting or clearing the form)
      } else {
        console.error("Error adding blog");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setFormData({
      title: "",
      author: "",
      category: "",
      content: "",
      is_featured_blog: false,
      blogImage: null, // To store file input
    });
  };

  const [triggerFetchBlogs, setTriggerFetchBlogs] = useState(false);

  return (
    <main className="w-full min-h-full flex">
      <section className="w-[65%] min-h-full grid place-content-center">
        <Card className="sm:w-[300px] md:w-[400px] xl:w-[700px]">
          <CardHeader>
            <CardTitle>Add New Blog</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              method="POST"
              encType="multipart/form-data"
              onSubmit={handleSubmit} // Call the submit handler
            >
              {/* Form fields */}
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Title of your blog"
                    value={formData.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    name="author"
                    placeholder="Name of the author"
                    value={formData.author}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    name="category"
                    value={formData.category}
                    onValueChange={(value) =>
                      setFormData((prevData) => ({
                        ...prevData,
                        category: value,
                      }))
                    }
                    required
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="tech">Technologies</SelectItem>
                      <SelectItem value="fashion">Fashion</SelectItem>
                      <SelectItem value="sports">Sports</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="blogImage">Choose Image</Label>
                  <Input
                    id="blogImage"
                    type="file"
                    name="blogImage"
                    className="cursor-pointer"
                    onChange={handleInputChange} // Handle file selection
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="content">Content</Label>
                  <textarea
                    id="content"
                    name="content"
                    rows={5}
                    className="w-full p-2 border rounded-md cursor-pointer resize-none h-[120px]"
                    value={formData.content}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="is_featured"
                    name="is_featured_blog"
                    checked={formData.is_featured_blog}
                    onChange={handleInputChange}
                  />
                  <label
                    htmlFor="is_featured"
                    className="text-sm font-medium leading-none"
                  >
                    Is Featured Blog?
                  </label>
                </div>
              </div>
              <div className="text-center mt-8">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
      <div className="w-[2px] bg-gray-300 mx-4 h-[90vh] my-auto"></div>
      <section className=" bg-gray-200 border-[1.5px] border-black/50 w-[35%] grid place-content-center px-3 h-[90vh] overflow-y-hidden my-auto rounded-md ">
        <div className="h-full overflow-y-auto ">
          <ApiCards triggerFetchBlogs={triggerFetchBlogs} />
        </div>
      </section>
    </main>
  );
}

export default AddBlogs;
