import { useState } from "react";
import ProjectGallery from "./components/ProjectGallery";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Project descriptions
  const projectDescriptions: Record<string, string> = {
    "yarn plantery": "YARN PLANTERY\nBRAND IDENTITY\nPACKAGE DESIGN\nGRAPHIC DESIGN",
    "Negative Freak": "NEGATIVE FREAK\nBRAND IDENTITY\nEDITORIAL DESIGN\nWEB DESIGN",
    "Citir": "CITIR\nBRAND IDENTITY\nPACKAGE DESIGN\nGRAPHIC DESIGN",
    "dr.br": "DR.BR\nBRAND IDENTITY\nPACKAGE DESIGN\nGRAPHIC DESIGN",
    "sin su ru": "SIN SU RU\nBRAND IDENTITY\nSPACE DESIGN\nGRAPHIC DESIGN",
    "puresome": "PURESOME\nBRAND IDENTITY\nPACKAGE DESIGN\nGRAPHIC DESIGN",
    "0100": "0100\nBRAND IDENTITY\nEDITORIAL DESIGN\nGRAPHIC DESIGN",
    "hyudo": "HYUDO\nBRAND IDENTITY\nPACKAGE DESIGN\nGRAPHIC DESIGN",
    "un deux trois": "UN DEUX TROIS\nBRAND IDENTITY\nSPACE DESIGN\nGRAPHIC DESIGN",
    "the garage tapes": "THE GARAGE TAPES\nBRAND IDENTITY\nEDITORIAL DESIGN\nGRAPHIC DESIGN",
  };

  const projects = [
    { name: "yarn plantery", year: "2025" },
    { name: "Negative Freak", year: "2025" },
    { name: "Citir", year: "2025" },
    { name: "dr.br", year: "2025" },
    { name: "sin su ru", year: "2023" },
    { name: "puresome", year: "2023" },
    { name: "0100", year: "2022" },
    { name: "hyudo", year: "2021" },
    { name: "un deux trois", year: "2023" },
    { name: "the garage tapes", year: "2025" },
  ];

  const handleProjectClick = (projectName: string) => {
    setSelectedProject(projectName);
  };

  const currentDescription = selectedProject ? projectDescriptions[selectedProject] : null;

  return (
    <div className="bg-black relative size-full font-['Pretendard:Bold',sans-serif] flex">
      {/* Left Panel */}
      <div className="w-[28.57%] relative overflow-hidden flex flex-col">
        {/* Left Panel - Header */}
        <div className="absolute content-stretch flex flex-col items-start leading-[0] left-[20px] not-italic text-[23px] top-[20px] tracking-[-0.46px] uppercase w-[251px]">
          <div className="flex flex-col h-[30px] justify-center relative shrink-0 text-white w-full">
            <p className="leading-[35px]">Parksolbi</p>
          </div>
          <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center relative shrink-0 text-[#949494] w-full">
            <p className="leading-[35px]">end to end designer</p>
          </div>
          <div className="flex flex-col font-['Pretendard:Regular',sans-serif] justify-center relative shrink-0 text-[#949494] w-full">
            <p className="leading-[35px]">Ai creator</p>
          </div>
        </div>

        {/* Left Panel - Description */}
        <div className="absolute left-[20px] top-[200px] w-[calc(100%-40px)] max-w-[251px] font-['Pretendard:Regular',sans-serif] leading-[25px] not-italic text-[13px] text-white tracking-[-0.26px] uppercase">
          {currentDescription ? (
            <p className="whitespace-pre-line m-0">{currentDescription}</p>
          ) : (
            <p className="text-[#949494] m-0">프로젝트를 선택해주세요.</p>
          )}
        </div>

        {/* Left Panel - Projects List */}
        <div className="absolute content-stretch flex flex-col items-start left-[20px] top-[66.67%] right-[20px]">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project.name)}
              className={`content-stretch flex items-center justify-center leading-[0] not-italic relative shrink-0 text-[13px] uppercase w-full cursor-pointer transition-colors ${
                selectedProject === project.name ? "text-white" : "text-[#949494] hover:text-white"
              }`}
            >
              <div className="flex flex-col h-[30px] justify-center relative shrink-0 w-[180px]">
                <p className="leading-[35px]">{project.name}</p>
              </div>
              <div className="flex flex-col h-[30px] justify-center relative shrink-0 text-right w-[160px]">
                <p className="leading-[35px]">{project.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Panel - Scrollable */}
      <div className="w-[57.14%] bg-white h-full overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
        <div className="w-full">
          {selectedProject && (
            <ProjectGallery 
              projectName={selectedProject} 
            />
          )}
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-[14.29%] relative overflow-hidden flex flex-col">
        {/* Right Panel - Contact */}
        <div className="absolute flex flex-col h-[30px] justify-center leading-[0] right-[20px] not-italic text-[23px] text-right text-white top-[20px] tracking-[-0.46px] uppercase w-[251px]">
          <p className="leading-[35px]">COntact</p>
        </div>
        <div className="absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] right-[20px] not-italic text-[#949494] text-[23px] text-right top-[52.5px] tracking-[-0.46px] uppercase w-[251px]">
          <p className="leading-[35px]">e-mail</p>
        </div>
        <div className="absolute flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] right-[20px] not-italic text-[#949494] text-[23px] text-right top-[85px] tracking-[-0.46px] uppercase w-[251px]">
          <p className="leading-[35px]">linkedin</p>
        </div>
      </div>
    </div>
  );
}