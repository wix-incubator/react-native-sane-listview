import React, {Component} from 'react';
import {ListView} from 'react-native';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class SaneListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds.cloneWithRows(this.props.rowsById, this.props.rowsIdArray)
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.rowsById !== nextProps.rowsById) {
      this.setState({
        dataSource: ds.cloneWithRows(nextProps.rowsById, nextProps.rowsIdArray)
      });
    }
  }

  render() {
    return (
      <ListView
        {...this.props}
        dataSource={this.state.dataSource}
      />
    );
  }
}
