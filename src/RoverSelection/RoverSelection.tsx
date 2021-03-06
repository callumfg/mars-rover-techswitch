import './RoverSelection.scss'
import { RoverSummary } from "./RoverSummary/RoverSummary";
import roverData from "./roverData.json";
import { Link  } from 'react-router-dom';
import { MobileNavbar } from '../MobileNavbar/MobileNavbar';
import React, { useState } from "react";
import { Header } from '../Header/Header';

enum Rovers {
  Curiosity,
  Opportunity,
  Spirit
}

function RoverSelection() {
  const [selectedRover, setSelectedRover] = useState(Rovers.Curiosity);

  return (
    <div className='RoverSelection'>
      <MobileNavbar />
<Header 
      imgSource = {`${process.env.PUBLIC_URL}/images/garage.png`}
      altTag = 'Garage'
      />
      <div className='CuriosityRover'>
      <div className='top-page-break'></div>
      <div className='imageicons'>  
        <img data-testid={"CuriosityButton"} className={selectedRover === Rovers.Curiosity ? 'selected-icon' : 'unselected-icon'} src={roverData.curiosity.imagesrc} alt='Curiosity Icon' width='100px' height='100px' onClick={() => setSelectedRover(Rovers.Curiosity)}/>
        <img data-testid={"OpportunityButton"} className={selectedRover === Rovers.Opportunity ? 'selected-icon' : 'unselected-icon'} src={roverData.opportunity.imagesrc} alt='Opportunity Icon' width='100px' height='100px' onClick={() => setSelectedRover(Rovers.Opportunity)}/>
        <img data-testid={"SpiritButton"} className={selectedRover === Rovers.Spirit ? 'selected-icon' : 'unselected-icon'} src={roverData.spirit.imagesrc} alt='Spirit Icon'  width='100px'  height='100px' onClick={() => setSelectedRover(Rovers.Spirit)}/>
      </div>
      <div data-testid={"CuriosityStats"} className={selectedRover === Rovers.Curiosity ? 'selected-pic': 'un-selectedpic'}>
        <RoverSummary rover={roverData.curiosity} />
        <Link to='/rovers/curiosity' className='Link'> Explore Curiosity Rover! </Link>
      </div>
      <div data-testid={"OpportunityStats"} className={selectedRover === Rovers.Opportunity ? 'selected-pic': 'un-selectedpic'}>
        <RoverSummary rover={roverData.opportunity}/>
        <Link to='/rovers/opportunity' className='Link'> Explore Opportunity Rover! </Link>
      </div>
      <div data-testid={"SpiritStats"} className={selectedRover === Rovers.Spirit ? 'selected-pic': 'un-selectedpic'}>
        <RoverSummary rover={roverData.spirit}/>
        <Link to='/rovers/spirit' className='Link'> Explore Spirit Rover! </Link>
      </div>
      <div className='bottom-page-break'></div>
    </div>
    </div>
  )
}

export { RoverSelection }

