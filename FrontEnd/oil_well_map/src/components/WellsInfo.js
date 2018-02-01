import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
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
      value:"1-5",
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

  // method for building the table with the data.
  buildWellInfo(index){
    let tempwell= [];
    for(let i=0;i<this.props.welldata[index].length;i++){

        tempwell.push(
          <TableRow key={i}>
            <TableRowColumn>{this.props.welldata[index][i].uwi}</TableRowColumn>
            <TableRowColumn>{this.props.welldata[index][i].lease}</TableRowColumn>
            <TableRowColumn>{this.props.welldata[index][i].operator}</TableRowColumn>
            <TableRowColumn>{this.props.welldata[index][i].fake_number}</TableRowColumn>
          </TableRow>

        );

    }

    return tempwell;
  }
  //when the user change the filter, we will rebuild the table with new data
  filterChange(event, index, value){
    if(value === "1-5"){
      this.setState({value:"1-5", wells : this.buildWellInfo(0)});
    }
    if(value === "6-10"){
      this.setState({value:"6-10", wells : this.buildWellInfo(1)});
    }
    if(value === "11-15"){
      this.setState({value:"11-15", wells : this.buildWellInfo(2)});
    }
    if(value === "16-20"){
      this.setState({value:"16-20", wells : this.buildWellInfo(3)});
    }
    if(value === "21-25"){
          this.setState({value:"21-25", wells : this.buildWellInfo(4)});
    }
    if(value === "26-30"){
      this.setState({value:"26-30", wells : this.buildWellInfo(5)});
    }
    if(value === "31-5"){
      this.setState({value:"31-35", wells : this.buildWellInfo(6)});
    }
    if(value === "36-40"){
      this.setState({value:"36-40", wells : this.buildWellInfo(7)});
    }
    if(value === "41-45"){
      this.setState({value:"41-45", wells : this.buildWellInfo(8)});
    }
    if(value === "46-50"){
      this.setState({value:"46-50", wells : this.buildWellInfo(9)});
    }
    if(value === "51-55"){
      this.setState({value:"51-55", wells : this.buildWellInfo(10)});
    }
    if(value === "56-60"){
      this.setState({value:"56-60", wells : this.buildWellInfo(11)});
    }
    if(value === "61-65"){
      this.setState({value:"61-65", wells : this.buildWellInfo(12)});
    }
    if(value === "66-70"){
      this.setState({value:"66-70", wells : this.buildWellInfo(13)});
    }
    if(value === "71-75"){
      this.setState({value:"71-75", wells : this.buildWellInfo(14)});
    }
    if(value === "76-80"){
      this.setState({value:"76-80", wells : this.buildWellInfo(15)});
    }
    if(value === "81-85"){
      this.setState({value:"81-85", wells : this.buildWellInfo(16)});
    }
    if(value === "86-90"){
      this.setState({value:"86-90", wells : this.buildWellInfo(17)});
    }
    if(value === "91-95"){
      this.setState({value:"91-95", wells : this.buildWellInfo(18)});
    }
    if(value === "96-100"){
      this.setState({value:"96-100", wells : this.buildWellInfo(19)});
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
            <MenuItem value={"1-5"} primaryText="1-5" />
            <MenuItem value={"6-10"} primaryText="6-10" />
            <MenuItem value={"11-15"} primaryText="11-15" />
            <MenuItem value={"16-20"} primaryText="16-20" />
            <MenuItem value={"21-25"} primaryText="21-25" />
            <MenuItem value={"26-30"} primaryText="26-30" />
            <MenuItem value={"31-35"} primaryText="31-35" />
            <MenuItem value={"36-40"} primaryText="36-40" />
            <MenuItem value={"41-45"} primaryText="41-45" />
            <MenuItem value={"46-50"} primaryText="46-50" />
            <MenuItem value={"51-55"} primaryText="51-55" />
            <MenuItem value={"56-60"} primaryText="56-60" />
            <MenuItem value={"61-65"} primaryText="61-65" />
            <MenuItem value={"66-70"} primaryText="66-70" />
            <MenuItem value={"71-75"} primaryText="71-75" />
            <MenuItem value={"76-80"} primaryText="76-80" />
            <MenuItem value={"81-85"} primaryText="81-85" />
            <MenuItem value={"86-90"} primaryText="86-90" />
            <MenuItem value={"91-95"} primaryText="91-95" />
            <MenuItem value={"96-100"} primaryText="96-100" />
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
