# 🖼️ Family Photo Frame Creator

Create stunning AI-generated family photo frames from individual portraits using Google Gemini Nano Banana.
Built with Angular for the frontend and Node.js + Express + TypeScript for the backend.

## 📸 Overview
Family Photo Frame Creator is a full-stack web application where users can:
- Upload multiple individual photos of family members
- Select a frame style (Modern, Classic, Minimal, Vintage)
- Generate a realistic family photo frame using Gemini Nano Banana AI
- Preview and download the generated result
  
No user authentication or cloud storage is used — all images are processed locally and in-memory.

## 🧠 Tech Stack
| Layer | Technology |
|---|---|
| Frontend | Angular, TypeScript, Angular Material, TailwindCSS |
| Backend | Node.js, Express.js, TypeScript |
| AI Integration | Google Gemini Nano Banana API |
| Utilities | Multer, Axios, dotenv, CORS |

## ⚙️ Project Structure
```
family-photo-frame/
 ├── frontend/              → Angular 19 app
 │    ├── src/
 │    ├── angular.json
 │    └── package.json
 ├── backend/               → Node.js + Express API
 │    ├── src/
 │    ├── .env
 │    └── package.json
 └── README.md
```

## 🧩 Setup Instructions
🪄 Prerequisites
- Node.js v24+
- Angular CLI v20+
- Google Gemini Nano Banana API key

## 🚀 Step 1: Clone the Repository
```
git clone https://github.com/sachinksamad1/family-photo-frame.git
cd family-photo-frame
```

## 🧰 Step 2: Setup the Backend
```
cd backend
npm install
```
Create a .env file inside backend/:
```
PORT=5000
GEMINI_API_KEY=your_gemini_nano_banana_api_key_here
```
Start the backend:
```
npm run dev
```
The backend will run on http://localhost:5000

## 💅 Step 3: Setup the Frontend
```
cd ../frontend
npm install
```
Start the Angular app:
```
ng serve
```
The frontend will run on http://localhost:4200

## 🧠 How It Works
- User uploads individual family member photos.

- Angular sends the files and selected style to the backend.

- Backend calls Gemini Nano Banana API with the uploaded files and a generation prompt:

- Combine these portraits into one realistic [style] family photo frame with consistent lighting.

- The AI returns a generated family photo.

- The Angular app displays it, allowing the user to download the final image.

## 🖥️ Example API Flow
Endpoint:
`POST /api/ai/generate`
Request (multipart/form-data):
```
photos[]: image1.jpg  
photos[]: image2.jpg  
style: modern
```
Response (JSON):
```
{
  "image": "data:image/png;base64,..."
}
```
## 🎨 Frame Styles Supported
| Option |	Description |
|---|---|
| Modern |	Clean, balanced, studio lighting |
| Classic |	Warm tones, elegant frame |
| Minimal |	Neutral background, simple frame |
| Vintage |	Aged tone, soft lighting

## 🧩 Folder Breakdown
🔹 Frontend

- components/upload/ — Handles photo upload & preview

- components/result/ — Displays generated image

- services/ai.service.ts — Sends images to backend API

- pages/editor/ — Editor page for generation process

🔹 Backend

- middlewares/upload.ts — Handles file upload with Multer

- controllers/aiController.ts — Processes generation request

- utils/geminiClient.ts — Communicates with Gemini Nano Banana API

- routes/aiRoutes.ts — Defines /generate route

## 🧪 Development Scripts
| Command |	Description |
|---|---|
| npm run dev (in /backend) |	Start Express API with nodemon |
| ng serve (in /frontend) |	Start Angular development server |
| ng build |	Build Angular app for production |
| npm run build (backend) |	Compile TypeScript backend |

## 🛠️ Environment Variables
Variable	Description
```
PORT	Backend server port
GEMINI_API_KEY	Your Google Gemini Nano Banana API key
```

## ⚡ Future Enhancements
- Add background selection (living room, garden, studio)
- Add image history (localStorage-based)
- Add dark/light theme toggle
- Export as framed printable PDF

## 🧑‍💻 Author
[Sachin Samad](https://github.com/sachinksamad1)

Full-stack developer passionate about AI-driven creative tools.

## 📜 License
This project is licensed under the MIT [License](LICENSE).

You can freely modify and distribute it with attribution.
