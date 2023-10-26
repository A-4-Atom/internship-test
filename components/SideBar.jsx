'use client'
import LessonTile from "./LessonTile";
export default function SideBar() {
  return (
    <nav>
      <div className="back-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </div>
      <h1>Change Simplification</h1>

      <div className="lesson-list">
        <LessonTile backgroundColor="#49BBBD" />
        <LessonTile backgroundColor="rgba(244, 140, 6, 0.3)" />
        <LessonTile backgroundColor="rgba(157, 204, 255, 0.3)" />
        <LessonTile backgroundColor="rgba(238, 100, 91, 0.3)" />
      </div>
      <h1>PRACTICE QUIZ</h1>
      <div className="lesson-list">
        <LessonTile backgroundColor="rgba(157, 204, 255, 0.3)" />
        <LessonTile backgroundColor="rgba(244, 140, 6, 0.3)" />
        <LessonTile backgroundColor="rgba(157, 204, 255, 0.3)" />
        <LessonTile backgroundColor="rgba(238, 100, 91, 0.3)" />
        <LessonTile backgroundColor="rgba(157, 204, 255, 0.3)" />
        <LessonTile backgroundColor="rgba(244, 140, 6, 0.3)" />
        <LessonTile backgroundColor="rgba(157, 204, 255, 0.3)" />

      </div>
    </nav>
  );
}
