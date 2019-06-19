// @flow
import React from 'react';
import CanvasDraw from 'react-canvas-draw';
import '../ImageSearch.scss';
import { SubmitButton } from '../../utility/buttons';
import SketchService from '../../../services/SketchService';


function SketchCreation() {
  let canvas;
  const printCanvas = async (e) => {
    e.preventDefault();
    const rawImage = canvas.canvas.drawing.toDataURL('image/png');
    const newImages = await SketchService.create({ sketch: rawImage });
    console.log(newImages);
    console.log(rawImage);
  };

  return (
    <div className="ImageSearch">
      <CanvasDraw
        brushRadius={5}
        canvasWidth={800}
        canvasHeight={800}
        ref={(canvasDraw) => { canvas = canvasDraw; }}
      />
      <div className="ImageSearch__Toolbar">
        <SubmitButton
          onClick={printCanvas}
          className="ImageSearch__Toolbar__SearchButton"
        >
Save!
        </SubmitButton>
      </div>
    </div>
  );
}

export default SketchCreation;
