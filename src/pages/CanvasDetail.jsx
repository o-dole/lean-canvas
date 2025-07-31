import { useParams } from 'react-router-dom';
import CanvasTitle from '../components/CanvasTitle';
import LeanCanvas from '../components/LeanCanvas';
import React, { useEffect, useState } from 'react';
import { getCanvasById, updateCanvas, updateTitle } from '../api/canvas';

function CanvasDetail() {
  const { id } = useParams();
  const [canvas, setCanvas] = useState();

  useEffect(() => {
    const fetchCanvas = async () => {
      const data = await getCanvasById(id);
      setCanvas(data);
    };
    fetchCanvas();
  }, [id]);

  const handleChangeTitle = async title => {
    try {
      await updateTitle(id, title);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleChangeCanvas = async updatedCanvas => {
    try {
      await updateCanvas(id, updatedCanvas);
      setCanvas(updatedCanvas);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <CanvasTitle value={canvas?.title} onChange={handleChangeTitle} />
      {canvas && (
        <LeanCanvas canvas={canvas} onChangeCanvas={handleChangeCanvas} />
      )}
    </div>
  );
}

export default React.memo(CanvasDetail);
