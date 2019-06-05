// @flow
import React, { useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { connect } from 'react-redux';
import type { AppState } from '../../state/AppState';
import './ImageSearch.scss';
import { SubmitButton } from '../utility/buttons';
import ImageService from '../../services/ImageService';
import type { Team } from '../../models/Team';


type Props = {
  activeTeam: Team,
};

function ImageSearch(props: Props) {
  const [images, updateImages] = useState([]);
  let canvas;
  const printCanvas = async (e) => {
    e.preventDefault();
    const rawImage = canvas.canvas.drawing.toDataURL('image/png');
    const newImages = await ImageService.list({ teamId: props.activeTeam.id, searchImage: rawImage });
    console.log(newImages);
    updateImages(newImages);
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
Search!
        </SubmitButton>
      </div>
      <div className="ImageSearch__Gallery">
        {images.map(image => (
          <img className="ImageSearch__Gallery__item" alt="" src={image.url} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  activeTeam: state.activeTeam,
});

export default connect(mapStateToProps)(ImageSearch);
