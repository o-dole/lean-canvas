import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

const Note = ({
  onRemoveNote,
  id,
  color: intialColor,
  content,
  onUpdateNote,
}) => {
  const colorOption = [
    'bg-yellow-300',
    'bg-pink-300',
    'bg-blue-300',
    'bg-green-300',
  ];

  const [localContent, setLocalContent] = useState(content);

  const randomIndex = Math.floor(Math.random() * colorOption.length);
  const [isEdit, setIsEdit] = useState(false);
  const [color, setColor] = useState(() => {
    if (intialColor) return intialColor;
    return colorOption[randomIndex];
  });

  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + 'px';
    }
  }, [content]);

  const handleContentChange = () => {
    onUpdateNote(id, localContent, color);
  };
  const handleChangeColor = newColor => {
    setColor(newColor);
    onUpdateNote(id, content, newColor);
  };

  return (
    <div
      className={`p-4  relative max-h-[32rem] overflow-hidden ${color}`}
      onClick={() => setIsEdit(true)}
    >
      <div className="absolute top-2 right-2">
        {isEdit ? (
          <button
            aria-label="Check Note"
            className="text-gray-700"
            onClick={e => {
              e.stopPropagation();
              setIsEdit(false);
            }}
          >
            <AiOutlineCheck size={20} />
          </button>
        ) : (
          <button
            aria-label="Close Note"
            className="text-gray-700"
            onClick={e => {
              e.stopPropagation();
              onRemoveNote(id);
            }}
          >
            <AiOutlineClose size={20} />
          </button>
        )}
      </div>
      <textarea
        ref={textareaRef}
        value={localContent}
        className={`w-full h-full bg-transparent resize-none border-none focus:outline-none text-gray-900 overflow-hidden`}
        aria-label="Edit Note"
        placeholder="메모를 작성하세요."
        style={{ height: 'auto', minHeight: '8rem' }}
        readOnly={!isEdit}
        onChange={e => setLocalContent(e.target.value)}
        onBlur={handleContentChange}
      />

      {isEdit && (
        <div className="flex space-x-2">
          {colorOption.map((option, index) => (
            <button
              key={index}
              className={`w-6 h-6 rounded-full cursor-pointer outline outline-gray-50 ${option}`}
              aria-label={`Change color to ${option}`}
              onClick={() => handleChangeColor(option)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Note;
