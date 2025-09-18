import ArchiveCard from "./ArchiveCard";

const Archive = () => {
  return (
    <div className="py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Additional Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen hidden md:flex">
          Explore More
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lg:px-10">
        <ArchiveCard
          title="Advanced AI Q&A System"
          des=" End-to-end Retrieval-Augmented Generation (RAG) system using Llama 2, Mistral, and 
          Groq for optimized, context-aware Q&A about websites. Deployed with Streamlit for a smooth 
          user experience."
          listItem={["Llama 2", "Mistral", "Groq", "Streamlit", "RAG"]}
          link="https://github.com/EteneshJeg/AdvancedRAG_Q-A_Project"
        />
        <ArchiveCard
          title="Fetan Ethiopian Food Delivery"
          des=" A responsive Ethiopian food delivery platform with a vibrant menu and an interactive 
          Dialogflow chatbot for seamless ordering. Built to highlight the rich flavors of Ethiopian 
          cuisine."
          listItem={["HTML", "CSS", "JavaScript", "Dialogflow"]}
          link="https://github.com/EteneshJeg/ethioFoodChatbot"
        />
        <ArchiveCard
          title="AI-Powered Video Summarizer"
          des=" A web app that leverages Google's Gemini AI to analyze and summarize video content. 
          Users can upload videos, ask questions, and receive AI-driven insights with support for 
          query-based analysis."
          listItem={[
            "Python",
            "Streamlit",
            "Google Gemini AI",
            "DuckDuckGo API",
          ]}
          link="https://github.com/EteneshJeg/VideoSummarizerByAgenticAI/tree/main"
        />
        <ArchiveCard
          title="Netflix Clone"
          des=" A minimal React + Vite setup with fast refresh and ESLint configuration. 
          Built to explore modern React development workflows using Vite plugins for 
          optimal performance."
          listItem={[
            "React",
            "Vite",
            "ESLint",
            "@vitejs/plugin-react",
            "@vitejs/plugin-react-swc",
          ]}
          link="https://netflixclonebyetu.vercel.app"
        />
        <ArchiveCard
          title="Object Detection with YOLOv5"
          des=" Implemented YOLOv5 models for webcam and car detection,
          gaining hands-on experience in 
          object detection workflows."
          listItem={["YOLOv5", "Python", "Google Colab", "Object Detection"]}
          link="https://www.youtube.com/watch?v=a5SGL1wHV04"
        />
        <ArchiveCard
          title="Tic-Tac-Toe Web Application"
          des="An engaging web-based Tic-Tac-Toe game built with HTML, CSS, 
          and JavaScript. Users can challenge each other or play against an 
          AI opponent, with smooth interactions, real-time tracking of moves, 
          and automatic win validation to enhance gameplay."
          listItem={[
            "HTML5 Markup",
            "CSS Styling",
            "JavaScript Logic",
            "Interactive UI",
          ]}
          link="https://prodigy-wd-03.onrender.com/"
        />
      </div>
    </div>
  );
};

export default Archive;
