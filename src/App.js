import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import { Characters } from "./components/Characters/Characters";
import { Episodes } from "./components/Episodes/Episodes";
import { Home } from "./components/Home/Home";
import { Locations } from "./components/Locations/Locations";
import { MyWatchList } from "./components/MyWatchList/MyWatchList";
import { CharacterDetails } from "./components/Characters/CharacterDetails";
import { LocationDetails } from "./components/Locations/LocationDetails";
import { EpisodeDetails } from "./components/Episodes/EpisodeDetails";
import { Human } from "./assets/CharactersFilter/SpeciesFilter/Human";

function App() {
  return (
    <BrowserRouter>
      <div className="App h-full bg-gray-200 font-body">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/characters/:id" component={CharacterDetails} />
          <Route path="/characters" component={Characters} />
          <Route path="/episodes/:id" component={EpisodeDetails} />
          <Route path="/episodes" component={Episodes} />
          <Route path="/locations/:id" component={LocationDetails} />
          <Route path="/locations" component={Locations} />
          <Route path="/mywatchlist" component={MyWatchList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
