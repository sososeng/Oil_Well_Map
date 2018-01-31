import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import FontIcon from 'material-ui/FontIcon';
import ActionViewList from 'material-ui/svg-icons/action/view-list';
import {fullWhite} from 'material-ui/styles/colors';

class WellsInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      fixedHeader: false,
      fixedFooter: false,
      stripedRows: true,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '300px',
      wells:[],
      value:"1-10",
    }
  }


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  buildWellInfo(start,stop){
    let tempwell= [];
    for(let i=0;i<this.props.welldata.length;i++){
      if( this.props.welldata[i].fake_number>=start && this.props.welldata[i].fake_number<=stop){
        tempwell.push(
          <TableRow key={i}>
            <TableRowColumn>{this.props.welldata[i].uwi}</TableRowColumn>
            <TableRowColumn>{this.props.welldata[i].lease}</TableRowColumn>
            <TableRowColumn>{this.props.welldata[i].operator}</TableRowColumn>
            <TableRowColumn>{this.props.welldata[i].fake_number}</TableRowColumn>
          </TableRow>

        );
      }
    }

    return tempwell;
  }

  filterChange(event, index, value){
    if(value === "1-10"){
      this.setState({value:"1-10", wells : this.buildWellInfo(1,10)});
    }
    if(value === "11-20"){
      this.setState({value:"11-20", wells : this.buildWellInfo(11,20)});
    }
    if(value === "21-30"){
      this.setState({value:"21-30",wells : this.buildWellInfo(21,30)});
    }
    if(value === "31-40"){
      this.setState({value:"31-40",wells : this.buildWellInfo(31,40)});
    }
    if(value === "41-50"){
      this.setState({value:"41-50",wells : this.buildWellInfo(41,50)});
    }
    if(value === "51-60"){
      this.setState({value:"51-60",wells : this.buildWellInfo(51,60)});
    }
    if(value === "61-70"){
      this.setState({value:"61-70",wells : this.buildWellInfo(61,70)});
    }
    if(value === "71-80"){
      this.setState({value:"71-80",wells : this.buildWellInfo(71,80)});
    }
    if(value === "81-90"){
      this.setState({value:"81-90",wells : this.buildWellInfo(81,90)});
    }
    if(value === "91-100"){
      this.setState({value:"91-100",wells : this.buildWellInfo(91,100)});
    }

  }

  componentDidMount(){

    this.setState({wells:this.buildWellInfo(1,10)});
  }

  render() {
    const actions = [

      <FlatButton
        label="Close"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    const customContentStyle = {
      width: '75%',
      maxWidth: 'none',
    };
    const filterStyles = {
      customWidth: {
        width: 100,
      },
    };

    const styles = {
      propContainer: {
        width: 800,
        overflow: 'hidden',
        margin: '20px auto 0',
      },
      propToggleHeader: {
        margin: '20px auto 10px',
      },
    };
    return(
      <div className= "WellsInfo">
        <FlatButton className = "ListView"

          hoverColor="#1FB5C9"
          icon={<ActionViewList color={fullWhite} />} onClick={this.handleOpen} />
        <Dialog
          title="Oil Wells Info"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          contentStyle={customContentStyle}
          autoScrollBodyContent={true}
        >

        <div className ="infoFilter">
          <div className = "Filter">
            <p className ="filterLabel">Filter By Performance:  </p>
            <SelectField
              style={filterStyles.customWidth}
              value={this.state.value}
              onChange={this.filterChange.bind(this)}
            >
              <MenuItem value={"1-10"} primaryText="1-10" />
              <MenuItem value={"11-20"} primaryText="11-20" />
              <MenuItem value={"21-30"} primaryText="21-30" />
              <MenuItem value={"31-40"} primaryText="31-40" />
              <MenuItem value={"41-50"} primaryText="41-50" />
              <MenuItem value={"51-60"} primaryText="51-60" />
              <MenuItem value={"61-70"} primaryText="61-70" />
              <MenuItem value={"71-80"} primaryText="71-80" />
              <MenuItem value={"81-90"} primaryText="81-90" />
              <MenuItem value={"91-100"} primaryText="91-100" />
            </SelectField>
            </div>
        </div>
        <Table
          height={this.state.height}

          selectable={this.state.selectable}

          >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >

            <TableRow>

              <TableHeaderColumn tooltip="UWI">UWI</TableHeaderColumn>
              <TableHeaderColumn tooltip="Lease">Lease</TableHeaderColumn>
              <TableHeaderColumn tooltip="Operator">Operator</TableHeaderColumn>
              <TableHeaderColumn tooltip="Performance">Performance</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
          {this.state.wells}

          </TableBody>

          </Table>



        </Dialog>
      </div>
    );
  }


}


export default WellsInfo;
