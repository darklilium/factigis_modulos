import React from 'react';
import Griddle from 'griddle-react';
import mymap from '../../../js/services/map-service';
import layers from '../../../js/services/layers-service';
import makeSymbol from '../../utils/makeSymbol';
import FactigisBackOffice from '../factigis/FactigisBackOffice.jsx';
import {find_folioData} from '../../services/factigis_services/factigis_loadBackofficeData.js';
import _ from 'lodash';

var HeaderComponent = React.createClass({
  textOnClick: function(e) {
    e.stopPropagation();
  },

  filterText: function(e) {
    this.props.filterByColumn(e.target.value, this.props.columnName)
  },

  render: function(){
    return (
      <span>
        <div><strong style={{color: this.props.color}}>{this.props.displayName}</strong></div>
        <input type='text' onChange={this.filterText} onClick={this.textOnClick} />
      </span>
    );
  }
});


class FG_GridPerZoneH2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedRowId: ''
    }


  }
  onRowClick(gridRow, event){
    $("#iframeloadingBO1").show();
    var map = mymap.getMap();
    map.graphics.clear();
    let pointSymbol = makeSymbol.makePoint();
    map.graphics.add(new esri.Graphic(gridRow.props.data['Geometry'],pointSymbol));

    map.centerAndZoom(gridRow.props.data['Geometry'],20);

    var y = _.filter(this.props.data, (data)=>{

      return data['Folio'] == gridRow.props.data['Folio'];
    })
    this.setState({selectedRowId: gridRow.props.data['Folio']});
    this.props.callbackParent(y);

  }

  render(){
    var columnMeta = [
        {
        "columnName": "Folio",
        "customHeaderComponent": HeaderComponent,
        "customHeaderComponentProps": { color: '#da291c' }
        },
        {
        "columnName": "Estado Tramite",
        "customHeaderComponent": HeaderComponent,
        "customHeaderComponentProps": { color: '#da291c' }
        },
        {
        "columnName": "Nombre",
        "customHeaderComponent": HeaderComponent,
        "customHeaderComponentProps": { color: '#da291c' }
        },
        {
        "columnName": "Apellido",
        "customHeaderComponent": HeaderComponent,
        "customHeaderComponentProps": { color: '#da291c' }
        },
        {
        "columnName": "Tipo Mejora",
        "customHeaderComponent": HeaderComponent,
        "customHeaderComponentProps": { color: '#da291c' }
        },
        {
        "columnName": "Zona",
        "customHeaderComponent": HeaderComponent,
        "customHeaderComponentProps": { color: '#da291c' }
        },
        {
        "columnName": "Origen Factibilidad",
        "customHeaderComponent": HeaderComponent,
        "customHeaderComponentProps": { color: '#da291c' }
        },
        {
        "columnName": "Creador",
        "customHeaderComponent": HeaderComponent,
        "customHeaderComponentProps": { color: '#da291c' }
        },
        {
        "columnName": "Punto Conexion",
        "customHeaderComponent": HeaderComponent,
        "customHeaderComponentProps": { color: '#da291c' }
        }
    ];

    const rowMetadata = {
      bodyCssClassName: rowData => (rowData['Folio'] === this.state.selectedRowId ? 'selected' : '')
    };

    return (

      <Griddle rowMetadata={rowMetadata} onRowClick= {this.onRowClick.bind(this)} results={this.props.data} columnMetadata={columnMeta} resultsPerPage={3}
      columns={["Folio","Estado Tramite", "Nombre", "Apellido", "Tipo Mejora","Zona", "Origen Factibilidad", "Creador", "Punto Conexion"]}/>

    );
  }
}

export default FG_GridPerZoneH2;
