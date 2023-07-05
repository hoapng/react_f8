import { useState, useEffect } from "react";

const lessons = [
    {
      id: 1,
      name: 'ReactJS là gì? Tại sao nên học ReactJS',
    },
    {
      id: 2,
      name: 'SPA/MPA là gì ?',
    },
    {
      id: 3,
      name: 'Arrow function',
    },
  ];

function Content (){
    const [lessonId, setLessonId] = useState(1);

    useEffect(()=>{
        const handleCmt = ({detail})=>{
            console.log({detail});
        }
        window.addEventListener(`lesson-${lessonId}`, handleCmt)
        return ()=>{
          window.removeEventListener(`lesson-${lessonId}`, handleCmt)
        }        
    },[lessonId])
    
    return (
        <div>
          <ul>
            {lessons.map(lesson => {
                return (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? 'red' : '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >                    
                    {lesson.name}
                    </li>
                )
            })
    
            }
          </ul>
        </div>
      );
}
export default Content