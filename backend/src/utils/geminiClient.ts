import axios from "axios";
import FormData from "form-data";

export async function generateFamilyPhoto(files: Express.Multer.File[], style: string) {
  const formData = new FormData();
  files.forEach((file, i) => formData.append(`photo${i}`, file.buffer, file.originalname));
  formData.append("prompt", `Combine these individual portraits into a realistic ${style} family photo frame.`);
  
  const response = await axios.post(
    "https://gemini-nano-banana.googleapis.com/v1/generate",
    formData,
    {
      headers: {
        Authorization: `Bearer ${process.env.GEMINI_API_KEY}`,
        ...formData.getHeaders(),
      },
    }
  );
  return response.data;
}
