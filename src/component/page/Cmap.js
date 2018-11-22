import React, { Component } from "react";
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps";

//bloc de code compose library, réorganise les props, fonctions et wrapper. donne les options lifecycle aux stateless functional components.
const Map = compose(
  withProps({
    googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAe01yXm_aQlq9XlIA_cEv_BCEiWTtnTPE&libraries=geometry,drawing,places",
    loadingElement:<div style={{ height: `100%` }} />,
    containerElement:<div style={{ height: `400px` }} />,
    mapElement:<div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidUpdate(prevProps) {

      //bloc de code pour le calcul automatique des itinéraires
  if (this.props.marks !== prevProps.marks) {
    const DirectionsService = new window.google.maps.DirectionsService();

    DirectionsService.route(
      {
      origin: new window.google.maps.LatLng({lat:1 , lng:1}),
      destination: new window.google.maps.LatLng({lat : 1, lng: 1}),
      //$$ waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: window.google.maps.TravelMode.DRIVING

    }, (result, status) => {

      if (status === "OK") {
        this.setState({
          directions: result
        });
      } else {
        console.error(`error fetching directions ${status}`);
      }
    });
    }
  }

  })

  //googleMap avec props marqueurs onclick et directions renderer pour les itinéraires
)(props =>
        <GoogleMap
            defaultZoom={5}
            defaultCenter={{ lat: 48, lng: 2 }}
            onClick={e => props.onMapClick(e)}
        >
            {props.marks.map((mark, index) => {
              return(
                  <Marker key={index}
                  position={mark} />
            )}
          )};

          //props pour les itinéraires
          {props.directions && <DirectionsRenderer directions={props.directions} />};

        </GoogleMap>

);
 
class Cmap extends Component {

  constructor(props){
    super(props)

    //fonctions pour l'activation du formulaire et récupération/exploitation des données
    this.handleChange_POIlat = this.handleChange_POIlat.bind(this);
    this.handleChange_POIlng = this.handleChange_POIlng.bind(this);
    //$$ this.handleChange_POItitle = this.handleChange_POItitle.bind(this);
    //$$ this.handleChange_POIdesc = this.handleChange_POIdesc.bind(this);
    //$$ this.handleChange_POIaddress = this.handleChange_POIaddress.bind(this);
    //$$ this.handleChange_POIcoord = this.handleChange_POIcoord.bind(this);
    this.handleSubmit_Form = this.handleSubmit_Form.bind(this);
    this.state = {
        marks: [],
        lat:null,
        lng:null,
        title: "",
        desc: "",
        address: "",
        coord: "",
    }
  }

  handleChange_POIlat = (event) => {
  this.setState({lat: event.target.value})
    }

  handleChange_POIlng = (event) => {
  this.setState({lng: event.target.value})
   }

    //soumission du formulaire et exploitation des coord
    handleSubmit_Form = (event) => {
      event.preventDefault();
      var locationCopy = [...this.state.marks]
        var coords = {
          lat:parseFloat(this.state.lat),
          lng:parseFloat(this.state.lng)
        }
        locationCopy.push(coords);
        this.setState({
          marks:locationCopy
        })
      }

//   $$      handleChange_POItitle = () => {
// //route vers db pour choper les infos
//         this.setState({
//           title:
//         })
//         }
//
//  $$       handleChange_POIdesc = () => {
// //route vers db pour choper les infos
//         this.setState({
//           desc:
//         })
//         }
//
//   $$      handleChange_POIaddress = () => {
// //route vers db pour choper les infos
//         this.setState({
//           address:
//         })
//         }
//
//   $$      handleChange_POIcoord = () => {
// //route vers db pour choper les infos
//         this.setState({
//           coord:
//         })
//         }

    //fonction pour les marqueurs onclick
    setMark = e => {
        this.setState({ marks: [...this.state.marks, e.latLng] });
    };

    //reset du tableau marqueurs (effacage des marqueurs)
    deleteMark = () => {
        this.setState({
            marks: []
        });
    };

    render() {

        console.log(this.state.marks);
          const { marks } = this.state;

        return (
            <div>
                <button onClick={this.deleteMark}>DELETE MARKS</button>
                <Map
                  onMapClick={this.setMark}
                  marks={marks}
                  />
              <form style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                <label>
                    <input  type="text" name="latitude" onChange={this.handleChange_POIlat} value={this.state.lat} placeholder="lat: 48"/>
                  </label>
                  <label>
                      <input  type="text" name="longitude" onChange={this.handleChange_POIlng} value={this.state.lng} placeholder="lng: 2"/>
                    </label>
                  <label>
                    <input  type="text" name="title" onChange={this.handleChange_POItitle} value={this.state.title} placeholder="title"/>
                    </label>
                  <label>
                    <input  type="text" name="description" onChange={this.handleChange_POIdesc} value={this.state.desc} placeholder="description"/>
                    </label>
                  <label>
                    <input  type="text" name="adresse" onChange={this.handleChange_POIaddress} value={this.state.address} placeholder="adresse"/>
                    </label>
                  <label>
                    <input  type="text" name="coordonnées" onChange={this.handleChange_POIcoord} value={this.state.coord} placeholder="coordonnées"/>
                      </label>
                    <button className="btn btn-outline-info btn-sm" onClick={this.handleSubmit_Form}>save</button>
                    <button className="btn btn-outline-info btn-sm">display</button>
                </form>

            </div>
        );
    }
}



// lookup geocode to convert adresses to latlng
// lng and lat in arrays are accessed with :
// array.0.lat.[[scopes]].0.a
// & same as above with last property being b

export default Cmap;
