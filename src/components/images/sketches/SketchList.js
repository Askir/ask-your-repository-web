// @flow
import React, { useState, useEffect } from 'react';
import './SketchList.scss';
import SketchService from '../../../services/SketchService';


function SketchList() {
  const [sketches, setSketches] = useState([]);

  async function loadSketches() {
    const newSketches = await SketchService.list();
    setSketches(newSketches);
  }

  useEffect(() => {
    loadSketches();
  }, []);

  return (
    <div className="SketchList">
      {sketches.map(sketch => <img className="SketchList__Image" src={sketch.url} alt="" />)}
      {' '}
    </div>
  );
}

export default SketchList;
